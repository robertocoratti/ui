import { addons } from "@storybook/manager-api"

import { darkTheme, lightTheme } from "./theme"

function resolveTheme(themeName?: string) {
	if (themeName === "light") return lightTheme
	if (themeName === "dark") return darkTheme
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
	return prefersDark ? darkTheme : lightTheme
}

addons.setConfig({ theme: resolveTheme() })

const channel = addons.getChannel()
channel.on("setGlobals", ({ globals }: { globals?: Record<string, string> }) => {
	addons.setConfig({ theme: resolveTheme(globals?.theme) })
})
channel.on("globalsUpdated", ({ globals }: { globals?: Record<string, string> }) => {
	addons.setConfig({ theme: resolveTheme(globals?.theme) })
})
