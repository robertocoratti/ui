import { create } from "@storybook/theming/create"

export default create({
	base: "dark",
	fontBase: "'Space Grotesk', sans-serif",
	fontCode: "'JetBrains Mono', monospace",

	colorPrimary: "var(--sb-primary)",
	colorSecondary: "var(--sb-secondary)",

	appBg: "var(--sb-bg)",
	appContentBg: "var(--sb-bg)",
	appBorderColor: "var(--sb-border)",
	appBorderRadius: 4,

	textColor: "var(--sb-fg)",
	textInverseColor: "var(--sb-bg)",
	textMutedColor: "var(--sb-muted)",

	barTextColor: "var(--sb-fg)",
	barHoverColor: "var(--sb-primary)",
	barSelectedColor: "var(--sb-secondary)",
	barBg: "var(--sb-bar)",

	buttonBg: "var(--sb-bg)",
	buttonBorder: "var(--sb-border)",
	booleanBg: "var(--sb-bg)",
	booleanSelectedBg: "var(--sb-surface)",
	inputBg: "var(--sb-surface)",
	inputBorder: "var(--sb-border)",
	inputTextColor: "var(--sb-fg)",
	inputBorderRadius: 4,
})
