import type { StoryObj, Meta } from "@storybook/react"

import { Box, type BoxProps } from "@/layouts/box"
import { spaces } from "@/config"

const render = (args: BoxProps) => (
	<Box {...args}>
		<p>Box content</p>
	</Box>
)

const meta = {
	title: "Layouts/Box",
	tags: ["autodocs"],
	component: Box,
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		as: { control: "text" },
		padding: {
			control: { type: "radio" },
			options: spaces,
		},
		invert: { control: "boolean" },
	},
	args: {
		as: "div",
		padding: "md",
		invert: false,
	},
} satisfies Meta<BoxProps>

type Story = StoryObj<BoxProps>

export default meta

/** Default box with padding */
export const Default: Story = {}

/** Inverted colors */
export const Inverted: Story = {
	args: {
		invert: true,
	},
}
