import type { StoryObj, Meta } from "@storybook/react"

import { SiteFooter, type SiteFooterProps } from "@/components/site-footer"
import { Stack } from "@/layouts/stack"
import { Cluster } from "@/layouts/cluster"

type SiteFooterArgs = SiteFooterProps

const render = ({ ...args }: SiteFooterArgs) => (
	<Stack className="bg-base-800 pt-xl shadow-3" space="lg">
		<section className="px-md">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam
			iste ea, provident incidunt at reiciendis, quo a voluptas vitae
			consequatur nesciunt tenetur? Ipsum assumenda nemo cupiditate. Eaque,
			labore ratione.
		</section>
		<section className="px-md">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam
			iste ea, provident incidunt at reiciendis, quo a voluptas vitae
			consequatur nesciunt tenetur? Ipsum assumenda nemo cupiditate. Eaque,
			labore ratione.
		</section>
		<section className="px-md">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam
			iste ea, provident incidunt at reiciendis, quo a voluptas vitae
			consequatur nesciunt tenetur? Ipsum assumenda nemo cupiditate. Eaque,
			labore ratione.
		</section>
		<SiteFooter {...args} className="text-center shadow-1 py-md">
			<Stack space="sm">
				<Cluster className="justify-content-evenly mx-3xl">
					<Stack space="xs" className="text-start">
						<div className="font-semibold text-base-500">Info</div>
						<a>Pricing</a>
						<a>Docs</a>
						<a>Customers</a>
					</Stack>
					<Stack space="xs" className="text-start">
						<div className="font-semibold text-base-500">Socials</div>
						<a>Instagram</a>
						<a>Twitter</a>
					</Stack>
				</Cluster>
				<div>&copy; 2024 Roberto Coratti</div>
			</Stack>
		</SiteFooter>
	</Stack>
)

const meta: Meta<SiteFooterArgs> = {
	title: "Components/SiteFooter",
	tags: ["autodocs"],
	component: SiteFooter,
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {},
	args: {},
}

type Story = StoryObj<SiteFooterArgs>

export default meta

export const _SiteFooter: Story = {}
