import type { StoryObj, Meta } from "@storybook/react"

import { Sidebar, type SidebarProps } from "@/layouts/sidebar"
import { spaces } from "@/config"

const render = (args: SidebarProps) => (
	<Sidebar {...args}>
		<nav className="bg-base-700 p-sm">
			<p>Sidebar</p>
		</nav>
		<main className="bg-base-800 p-sm">
			<p>Main content</p>
		</main>
	</Sidebar>
)

const meta = {
	title: "Layouts/Sidebar",
	tags: ["autodocs"],
	component: Sidebar,
	render,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		as: { control: "text" },
		side: {
			control: { type: "radio" },
			options: ["start", "end"],
		},
		gap: {
			control: { type: "radio" },
			options: spaces,
		},
		sidebarWidth: { control: "text" },
		contentMin: { control: "text" },
	},
	args: {
		as: "div",
		side: "start",
		gap: "md",
	},
} satisfies Meta<SidebarProps>

type Story = StoryObj<SidebarProps>

export default meta

/** Sidebar on start */
export const Start: Story = {}

/** Sidebar on end */
export const End: Story = {
	args: {
		side: "end",
	},
}
