import type { StoryObj, Meta } from "@storybook/react"

import { Switcher, type SwitcherProps } from "@/layouts/switcher"
import { spaces } from "@/config"

const render = (args: SwitcherProps) => (
	<Switcher {...args}>
		{[...Array(3).keys()].map((i) => (
			<div key={i} className="bg-base-700 p-sm">
				Item {i + 1}
			</div>
		))}
	</Switcher>
)

const meta = {
	title: "Layouts/Switcher",
	tags: ["autodocs"],
	component: Switcher,
	render,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		as: { control: "text" },
		gap: {
			control: { type: "radio" },
			options: spaces,
		},
		threshold: { control: "text" },
	},
	args: {
		as: "div",
		gap: "md",
		threshold: "40rem",
	},
} satisfies Meta<SwitcherProps>

type Story = StoryObj<SwitcherProps>

export default meta

/** Three equal items that wrap below threshold */
export const Default: Story = {}

/** Narrow threshold forces early wrap */
export const NarrowThreshold: Story = {
	args: {
		threshold: "60rem",
	},
}
