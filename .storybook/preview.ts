import type { Preview, Decorator } from "@storybook/react"
import { renderToStaticMarkup } from "react-dom/server"
import xmlFormat from "xml-formatter"

import { darkTheme, lightTheme } from "./theme"
import "./style.scss"

function resolvePreviewTheme(name?: string) {
	if (name === "light") return lightTheme
	if (name === "dark") return darkTheme
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? darkTheme : lightTheme
}

const withTheme: Decorator = (Story, context) => {
	const themeName = context.globals.theme
	if (themeName) {
		document.documentElement.setAttribute("data-theme", themeName)
	} else {
		document.documentElement.removeAttribute("data-theme")
	}

	// Inject overrides for Storybook docs wrapper elements whose backgrounds
	// are baked-in via emotion from docs.theme and ignore CSS custom properties.
	const isDark = themeName === "dark" || (!themeName && window.matchMedia("(prefers-color-scheme: dark)").matches)
	let el = document.getElementById("sb-docs-bg") as HTMLStyleElement | null
	if (!el) {
		el = document.createElement("style")
		el.id = "sb-docs-bg"
		document.head.appendChild(el)
	}
	if (isDark) {
		el.textContent = ""
	} else {
		el.textContent = [
			".sbdocs-wrapper,.sbdocs-content{background-color:hsl(224,9%,97%)!important;color:hsl(224,9%,8%)!important}",
			".sbdocs-preview,.docs-story{background-color:hsl(224,9%,97%)!important}",
			".docblock-argstable-body tr{background-color:hsl(224,9%,92%)!important;color:hsl(224,9%,8%)!important}",
			".docblock-argstable-body tr:nth-child(odd){background-color:hsl(224,9%,97%)!important}",
			".docblock-argstable-head tr th{color:hsl(224,9%,46%)!important}",
		].join("\n")
	}

	return Story()
}

function readUrlTheme(): string | undefined {
	try {
		const m = new URLSearchParams(window.location.search).get("globals")?.match(/theme:(\w+)/)
		return m?.[1]
	} catch {
		return undefined
	}
}

const preview: Preview = {
	globalTypes: {
		theme: {
			description: "Color theme",
			defaultValue: "",
			toolbar: {
				title: "Theme",
				icon: "circlehollow",
				items: [
					{ value: "", title: "System" },
					{ value: "light", title: "Light" },
					{ value: "dark", title: "Dark" },
				],
				dynamicTitle: true,
			},
		},
	},
	decorators: [withTheme],
	parameters: {
		backgrounds: { disable: true },
		actions: { argTypesRegex: "^on[A-Z].*" },
		docs: {
			// Evaluated lazily on each docs page render — reads URL globals so
			// navigating to ?globals=theme:light picks up the light docs theme.
			get theme() {
				return resolvePreviewTheme(readUrlTheme())
			},
			toc: true,
			source: {
				transform: (source: any, storyContext: any) => {
					return `// react\n${source}\n\n// html\n${xmlFormat(
						renderToStaticMarkup(
							storyContext.originalStoryFn(storyContext.args)
						),
						{ indentation: "  " }
					)
						.replace(/=""/g, "")
						.replace(/\ssrc=".*"/g, ' src="..." ')
						.replace(/\sstyle=".*"/g, "")}`
				},
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
			sort: "requiredFirst",
		},
	},
}

export default preview
