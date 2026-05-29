import type { StoryObj, Meta } from "@storybook/react"

import { Container, type ContainerProps } from "@/layouts/container"

const render = (args: ContainerProps) => (
	<Container {...args}>
		<div className="bg-base-700 p-md">
			<p>Content constrained to {args.width ?? "normal"} width</p>
		</div>
	</Container>
)

const meta = {
	title: "Layouts/Container",
	tags: ["autodocs"],
	component: Container,
	render,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		as: { control: "text" },
		width: {
			control: { type: "radio" },
			options: ["narrow", "normal", "wide", "full"],
		},
		gutter: {
			control: { type: "radio" },
			options: ["none", "sm", "md", "lg"],
		},
	},
	args: {
		as: "div",
		width: "normal",
		gutter: "md",
	},
} satisfies Meta<ContainerProps>

type Story = StoryObj<ContainerProps>

export default meta

/** Normal width with md gutters */
export const Normal: Story = {}

/** Narrow content column */
export const Narrow: Story = {
	args: {
		width: "narrow",
	},
}

/** Wide layout */
export const Wide: Story = {
	args: {
		width: "wide",
	},
}

/** Full width, no gutters */
export const Full: Story = {
	args: {
		width: "full",
		gutter: "none",
	},
}
