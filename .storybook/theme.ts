import { create } from "@storybook/theming/create"

export default create({
	base: "dark",
	fontBase: "'Inter', sans-serif",
	fontCode: "'JetBrains Mono', monospace",

	colorPrimary: "hsl(220, 90%, 52%)",
	colorSecondary: "hsl(174, 60%, 52%)",

	appBg: "hsl(222, 16%, 14%)",
	appContentBg: "hsl(222, 16%, 14%)",
	appBorderColor: "hsl(222, 16%, 32%)",
	appBorderRadius: 8,

	textColor: "hsl(222, 16%, 88%)",
	textInverseColor: "hsl(222, 16%, 14%)",
	textMutedColor: "hsl(42, 96%, 87%)",

	barTextColor: "hsl(222, 16%, 88%)",
	barHoverColor: "hsl(220, 90%, 62%)",
	barSelectedColor: "hsl(174, 60%, 52%)",
	barBg: "hsl(222, 16%, 9%)",

	buttonBg: "hsl(222, 16%, 14%)",
	buttonBorder: "hsl(222, 16%, 32%)",
	booleanBg: "hsl(222, 16%, 14%)",
	booleanSelectedBg: "hsl(222, 16%, 22%)",
	inputBg: "hsl(222, 16%, 22%)",
	inputBorder: "hsl(222, 16%, 32%)",
	inputTextColor: "hsl(222, 16%, 88%)",
	inputBorderRadius: 8,
})
