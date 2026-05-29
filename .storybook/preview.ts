import type { Preview, Decorator } from "@storybook/react"
import { renderToStaticMarkup } from "react-dom/server"
import xmlFormat from "xml-formatter"

import theme from "./theme"
import "./style.scss"

const withTheme: Decorator = (Story, context) => {
	const themeName = context.globals.theme
	if (themeName) {
		document.documentElement.setAttribute("data-theme", themeName)
	} else {
		document.documentElement.removeAttribute("data-theme")
	}
	return Story()
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
		actions: { argTypesRegex: "^on[A-Z].*" },
		docs: {
			theme,
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
