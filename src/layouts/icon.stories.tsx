import type { StoryObj, Meta } from "@storybook/react"

import { Icon, type IconProps } from "@/layouts/icon"

const render = (args: IconProps) => (
	<p className="text-600">
		Inline text with{" "}
		<Icon {...args} viewBox="0 0 24 24">
			<circle cx="12" cy="12" r="10" fill="currentColor" />
		</Icon>{" "}
		an icon
	</p>
)

const meta = {
	title: "Layouts/Icon",
	tags: ["autodocs"],
	component: Icon,
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		size: { control: "text" },
	},
	args: {
		size: "0.75em",
	},
} satisfies Meta<IconProps>

type Story = StoryObj<IconProps>

export default meta

/** Inline icon sized relative to parent font */
export const Default: Story = {}

/** Larger icon */
export const Large: Story = {
	args: {
		size: "1.5em",
	},
}
