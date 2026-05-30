import { create } from "@storybook/theming/create"

export default create({
	base: "dark",
	fontBase: "'Space Grotesk', sans-serif",
	fontCode: "'JetBrains Mono', monospace",

	colorPrimary: "hsl(250, 80%, 52%)",
	colorSecondary: "hsl(207, 75%, 56%)",

	appBg: "hsl(224, 9%, 13%)",
	appContentBg: "hsl(224, 9%, 13%)",
	appBorderColor: "hsl(224, 9%, 32%)",
	appBorderRadius: 4,

	textColor: "hsl(224, 9%, 97%)",
	textInverseColor: "hsl(224, 9%, 8%)",
	textMutedColor: "hsl(250, 80%, 74%)",

	barTextColor: "hsl(224, 9%, 97%)",
	barHoverColor: "hsl(250, 80%, 62%)",
	barSelectedColor: "hsl(207, 75%, 56%)",
	barBg: "hsl(224, 9%, 8%)",

	buttonBg: "hsl(224, 9%, 13%)",
	buttonBorder: "hsl(224, 9%, 32%)",
	booleanBg: "hsl(224, 9%, 13%)",
	booleanSelectedBg: "hsl(224, 9%, 22%)",
	inputBg: "hsl(224, 9%, 22%)",
	inputBorder: "hsl(224, 9%, 32%)",
	inputTextColor: "hsl(224, 9%, 97%)",
	inputBorderRadius: 4,
})
