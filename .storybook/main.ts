import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		{
			name: "@storybook/addon-essentials",
			options: {
				actions: false,
				backgrounds: false,
			},
		},
		"@storybook/addon-links",
	],
	core: {},
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	viteFinal: async (config) => ({
		...config,
		plugins: (config.plugins ?? []).filter(
			(p) => !(p && typeof p === "object" && "name" in p && p.name === "vite:dts"),
		),
	}),
}

export default config
