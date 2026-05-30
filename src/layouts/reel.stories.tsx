import type { StoryObj, Meta } from "@storybook/react"

import { Reel, type ReelProps } from "@/layouts/reel"
import { spaces } from "@/config"

type ReelArgs = ReelProps & {
	imagesCount: number
}

const render = ({ imagesCount = 8, ...args }: ReelArgs) => (
	<Reel {...args}>
		{[...Array(imagesCount).keys()].map((num) => (
			<img
				key={num}
				className="radius-1 shadow-1"
				alt={`Random image #${num + 1}`}
				src={`https://picsum.photos/seed/${num}/200/150`}
				loading="lazy"
			/>
		))}
	</Reel>
)

const meta = {
	title: "Layouts/Reel",
	tags: ["autodocs"],
	component: Reel,
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
		imagesCount: {
			control: {
				type: "number",
				min: 1,
				max: 15,
			},
			description: "Images count",
		},
	},
	args: {
		as: "div",
		space: "md",
		imagesCount: 8,
	},
} satisfies Meta<ReelArgs>

type Story = StoryObj<ReelArgs>

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
