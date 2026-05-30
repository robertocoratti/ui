import { create } from "@storybook/theming/create"

const common = {
	fontBase: "'Space Grotesk', sans-serif",
	fontCode: "'JetBrains Mono', monospace",
	appBorderRadius: 4,
	inputBorderRadius: 4,
}

export const darkTheme = create({
	...common,
	base: "dark",

	colorPrimary: "hsl(217, 82%, 50%)",
	colorSecondary: "hsl(207, 75%, 56%)",

	appBg: "hsl(224, 9%, 13%)",
	appContentBg: "hsl(224, 9%, 13%)",
	appBorderColor: "hsl(224, 9%, 32%)",

	textColor: "hsl(224, 9%, 97%)",
	textInverseColor: "hsl(224, 9%, 8%)",
	textMutedColor: "hsl(217, 82%, 73%)",

	barTextColor: "hsl(224, 9%, 97%)",
	barHoverColor: "hsl(217, 82%, 50%)",
	barSelectedColor: "hsl(207, 75%, 56%)",
	barBg: "hsl(224, 9%, 8%)",

	buttonBg: "hsl(224, 9%, 13%)",
	buttonBorder: "hsl(224, 9%, 32%)",
	booleanBg: "hsl(224, 9%, 13%)",
	booleanSelectedBg: "hsl(224, 9%, 22%)",
	inputBg: "hsl(224, 9%, 22%)",
	inputBorder: "hsl(224, 9%, 32%)",
	inputTextColor: "hsl(224, 9%, 97%)",
})

export const lightTheme = create({
	...common,
	base: "light",

	colorPrimary: "hsl(217, 82%, 50%)",
	colorSecondary: "hsl(207, 75%, 45%)",

	appBg: "hsl(224, 9%, 97%)",
	appContentBg: "hsl(224, 9%, 97%)",
	appBorderColor: "hsl(224, 9%, 80%)",

	textColor: "hsl(224, 9%, 8%)",
	textInverseColor: "hsl(224, 9%, 97%)",
	textMutedColor: "hsl(217, 82%, 36%)",

	barTextColor: "hsl(224, 9%, 8%)",
	barHoverColor: "hsl(217, 82%, 50%)",
	barSelectedColor: "hsl(207, 75%, 45%)",
	barBg: "hsl(224, 9%, 92%)",

	buttonBg: "hsl(224, 9%, 97%)",
	buttonBorder: "hsl(224, 9%, 80%)",
	booleanBg: "hsl(224, 9%, 97%)",
	booleanSelectedBg: "hsl(224, 9%, 87%)",
	inputBg: "hsl(224, 9%, 92%)",
	inputBorder: "hsl(224, 9%, 80%)",
	inputTextColor: "hsl(224, 9%, 8%)",
})

export default darkTheme
