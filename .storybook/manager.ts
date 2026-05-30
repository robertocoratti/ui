import { addons } from "@storybook/manager-api"

import { darkTheme, lightTheme } from "./theme"

function readUrlTheme(): string | undefined {
	try {
		const m = new URLSearchParams(window.location.search).get("globals")?.match(/theme:(\w+)/)
		return m?.[1]
	} catch {
		return undefined
	}
}

function resolveTheme(name?: string) {
	const themeName = name ?? readUrlTheme()
	if (themeName === "light") return { theme: lightTheme, mode: "light" as const }
	if (themeName === "dark") return { theme: darkTheme, mode: "dark" as const }
	const dark = window.matchMedia("(prefers-color-scheme: dark)").matches
	return { theme: dark ? darkTheme : lightTheme, mode: dark ? "dark" as const : "light" as const }
}

function applyTheme(name?: string) {
	const { theme, mode } = resolveTheme(name)
	addons.setConfig({ theme })
	document.documentElement.setAttribute("data-theme", mode)
}

// Set before React renders so the initial mount uses the correct theme.
applyTheme()

addons.register("sb-theme-sync", () => {
	const channel = addons.getChannel()
	channel.on("setGlobals", ({ globals }: { globals?: Record<string, string> }) => {
		applyTheme(globals?.theme)
	})
	channel.on("globalsUpdated", ({ globals }: { globals?: Record<string, string> }) => {
		applyTheme(globals?.theme)
	})
})
