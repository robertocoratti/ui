import type { StoryObj, Meta } from "@storybook/react"

import { Frame, type FrameProps } from "@/layouts/frame"
import { aspectRatios } from "@/config"

type FrameArgs = FrameProps

const render = ({ ...args }: FrameArgs) => (
	<Frame
		{...args}
		className="radius-1 shadow-1"
		style={{ width: "50%", margin: "0 auto" }}
	>
		<img src="https://picsum.photos/840/360" loading="lazy" />
	</Frame>
)

const meta = {
	title: "Layouts/Frame",
	tags: ["autodocs"],
	component: Frame,
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		as: { control: "text" },
		aspectRatio: {
			control: { type: "radio" },
			options: aspectRatios,
		},
	},
	args: {
		as: "div",
		aspectRatio: "16:9",
	},
} satisfies Meta<FrameArgs>

type Story = StoryObj<FrameArgs>

export default meta

export const _Frame: Story = {}

export const WithoutAspectRatio: Story = {
	args: { aspectRatio: undefined },
}
