import type { StoryObj, Meta } from "@storybook/react"

import { Grid, type GridProps } from "@/layouts/grid"
import { spaces } from "@/config"

type GridArgs = GridProps & {
	childrenCount: number
	images: boolean
}

const render = ({ childrenCount = 3, images, ...args }: GridArgs) => (
	<Grid {...args}>
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
	</Grid>
)

const meta = {
	title: "Layouts/Grid",
	tags: ["autodocs"],
	component: Grid,
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
		min: { control: "text" },
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
		min: "250px",
		childrenCount: 3,
		images: false,
	},
} satisfies Meta<GridArgs>

type Story = StoryObj<GridArgs>

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

/** Grid with images */
export const WithImages: Story = {
	args: {
		images: true,
	},
}
