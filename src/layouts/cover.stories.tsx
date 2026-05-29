import type { StoryObj, Meta } from "@storybook/react"

import { Cover, type CoverProps } from "@/layouts/cover"
import { spaces } from "@/config"

const render = (args: CoverProps) => (
	<Cover {...args} style={{ minBlockSize: "400px" }}>
		<header>Header</header>
		<main data-cover-center>
			<p>Centered content</p>
		</main>
		<footer>Footer</footer>
	</Cover>
)

const meta = {
	title: "Layouts/Cover",
	tags: ["autodocs"],
	component: Cover,
	render,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		as: { control: "text" },
		padding: {
			control: { type: "radio" },
			options: spaces,
		},
		minHeight: { control: "text" },
	},
	args: {
		as: "div",
		padding: "md",
		minHeight: "400px",
	},
} satisfies Meta<CoverProps>

type Story = StoryObj<CoverProps>

export default meta

/** Header, centered main, footer */
export const Default: Story = {}
