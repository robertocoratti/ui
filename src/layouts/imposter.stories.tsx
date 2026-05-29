import type { StoryObj, Meta } from "@storybook/react"

import { Imposter, type ImposterProps } from "@/layouts/imposter"

const render = (args: ImposterProps) => (
	<div style={{ position: "relative", width: "300px", height: "200px" }} className="bg-base-700">
		<Imposter {...args}>
			<div className="bg-accent-200 text-base-800 p-sm radius-2">Centered overlay</div>
		</Imposter>
	</div>
)

const meta = {
	title: "Layouts/Imposter",
	tags: ["autodocs"],
	component: Imposter,
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		as: { control: "text" },
		fixed: { control: "boolean" },
		contain: { control: "boolean" },
	},
	args: {
		as: "div",
		fixed: false,
		contain: false,
	},
} satisfies Meta<ImposterProps>

type Story = StoryObj<ImposterProps>

export default meta

/** Centered absolutely within parent */
export const Default: Story = {}

/** Constrained within parent bounds */
export const Contained: Story = {
	args: {
		contain: true,
	},
}
