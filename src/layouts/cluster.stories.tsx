import type { StoryObj, Meta } from "@storybook/react"

import { Cluster, type ClusterProps } from "@/layouts/cluster"
import { spaces } from "@/config"

type ClusterArgs = ClusterProps & {
	childrenCount: number
	images: boolean
}

const render = ({ childrenCount = 3, images, ...args }: ClusterArgs) => (
	<Cluster {...args} className="place-content-center">
		{[...Array(childrenCount).keys()].map((num) =>
			images ? (
				<img
					key={num}
					className="radius-1 shadow-1"
					src={`https://picsum.photos/seed/${num}/200/150`}
				/>
			) : (
				<div key={num} className="bg-accent-200 text-base-800 py-xs px-sm">
					{num + 1}
				</div>
			)
		)}
	</Cluster>
)

const meta = {
	title: "Layouts/Cluster",
	tags: ["autodocs"],
	component: Cluster,
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		as: { control: "text" },
		space: {
			control: { type: "radio" },
			options: spaces,
		},
		childrenCount: {
			control: {
				type: "number",
				min: 1,
				max: 36,
			},
			description: "Children count",
		},
		images: {
			control: { type: "boolean" },
			description: "Whether it should have image children",
		},
	},
	args: {
		as: "div",
		space: "md",
		childrenCount: 3,
		images: false,
	},
} satisfies Meta<ClusterArgs>

type Story = StoryObj<ClusterArgs>

export default meta

/** Space xs */
export const ExtraSmall: Story = {
	args: {
		space: "xs",
	},
}

/** Space sm */
export const Small: Story = {
	args: {
		space: "sm",
	},
}

/** Space md (default) */
export const Medium: Story = {
	args: {
		space: "md",
	},
}

/** Space lg */
export const Large: Story = {
	args: {
		space: "lg",
	},
}

/** Space xl */
export const ExtraLarge: Story = {
	args: {
		space: "xl",
	},
}

/** Cluster with images */
export const WithImages: Story = {
	args: {
		images: true,
	},
}
