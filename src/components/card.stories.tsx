import type { StoryObj, Meta } from "@storybook/react"

import { Card, type CardProps } from "@/components/card"

type CardArgs = CardProps & { image: boolean }

const render = ({ image, ...args }: CardArgs) => (
	<Card {...args} className="shadow-1">
		{image && (
			<img
				className="card__image"
				src="https://picsum.photos/seed/1/800/400"
			/>
		)}
		<div className="card__heading">Heading</div>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aliquid
			porro non provident esse a ex earum tempora aperiam possimus saepe
			voluptates vitae dolores beatae dolorem, incidunt commodi magnam sed.
		</p>
		<div className="cluster | mx-auto">
			<button className="button" data-variant="ghost">
				Add to wishlist
			</button>
			<button className="button">Book now</button>
		</div>
	</Card>
)

const meta: Meta<CardArgs> = {
	title: "Components/Card",
	tags: ["autodocs"],
	component: Card,
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		image: {
			control: "boolean",
			description: "Wheter it should have a card image",
		},
	},
	args: {
		image: false,
	},
}

type Story = StoryObj<CardArgs>

export default meta

/** Card with a card image */
export const CardWithImage: Story = { args: { image: true } }

/** Card without a card image */
export const CardWithoutImage: Story = { args: { image: false } }
