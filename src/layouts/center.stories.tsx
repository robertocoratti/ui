import type { StoryObj, Meta } from "@storybook/react"

import { Center, type CenterProps } from "@/layouts/center"

const render = (args: CenterProps) => (
	<Center {...args}>
		<p>Centered content with a max inline size constraint.</p>
	</Center>
)

const meta = {
	title: "Layouts/Center",
	tags: ["autodocs"],
	component: Center,
	render,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		as: { control: "text" },
		max: { control: "text" },
		gutters: { control: "boolean" },
		intrinsic: { control: "boolean" },
		centerText: { control: "boolean" },
	},
	args: {
		as: "div",
		max: "60ch",
		gutters: false,
		intrinsic: false,
		centerText: false,
	},
} satisfies Meta<CenterProps>

type Story = StoryObj<CenterProps>

export default meta

/** Centered at 60ch */
export const Default: Story = {}

/** With gutters */
export const WithGutters: Story = {
	args: {
		gutters: true,
	},
}

/** Intrinsic centering */
export const Intrinsic: Story = {
	args: {
		intrinsic: true,
	},
}
