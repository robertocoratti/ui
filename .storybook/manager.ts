import { addons } from "@storybook/manager-api"

import theme from "./theme"

function applyTheme(themeName?: string) {
	if (themeName) {
		document.documentElement.setAttribute("data-theme", themeName)
	} else {
		document.documentElement.removeAttribute("data-theme")
	}
}

addons.setConfig({ theme })

const channel = addons.getChannel()
channel.on("setGlobals", ({ globals }: { globals?: Record<string, string> }) => {
	applyTheme(globals?.theme)
})
channel.on("globalsUpdated", ({ globals }: { globals?: Record<string, string> }) => {
	applyTheme(globals?.theme)
})
