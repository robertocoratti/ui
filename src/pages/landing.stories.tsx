import type { StoryObj, Meta } from "@storybook/react"

import { Button } from "@/components/button"
import { Card } from "@/components/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Navigation } from "@/components/navigation"
import { Stack } from "@/layouts/stack"
import { Cluster } from "@/layouts/cluster"
import { Container } from "@/layouts/container"
import { Cover } from "@/layouts/cover"
import { Grid } from "@/layouts/grid"

const meta: Meta = {
	title: "Pages/Landing",
	parameters: { layout: "fullscreen" },
}
export default meta

type Story = StoryObj

const features = [
	{
		title: "SCSS-first",
		desc: "Token-driven system built on modern Sass. Design in variables, ship in custom properties.",
	},
	{
		title: "Cascade layers",
		desc: "Every rule lives in a named @layer. Override anything without specificity fights.",
	},
	{
		title: "Every Layout",
		desc: "All twelve intrinsically responsive primitives. Layouts that adapt without media queries.",
	},
	{
		title: "Fluid scales",
		desc: "Typography and spacing interpolate smoothly across viewports via clamp().",
	},
	{
		title: "Light & dark",
		desc: "Full theming via data-theme and prefers-color-scheme. Toggle at runtime with zero flicker.",
	},
	{
		title: "Distributable",
		desc: "Published to npm as @robertocoratti/ui. Use SCSS source or the prebuilt CSS bundle.",
	},
]

export const Default: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
			<SiteHeader>
				<Container gutter="md">
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<span
							style={{
								fontFamily: "var(--font-family-display)",
								fontWeight: "var(--font-weight-bold)",
								fontSize: "var(--font-size-600)",
								color: "var(--color-secondary-300)",
							}}
						>
							ui
						</span>
						<Navigation>
							<Cluster
								as="ul"
								space="lg"
								style={{ listStyle: "none", padding: 0, margin: 0 }}
							>
								<li>
									<a href="#">Docs</a>
								</li>
								<li>
									<a href="#">Components</a>
								</li>
								<li>
									<a href="#">GitHub</a>
								</li>
							</Cluster>
						</Navigation>
					</div>
				</Container>
			</SiteHeader>

			<main style={{ flex: 1 }}>
				<Cover padding="xl">
					<Container gutter="md">
						<Stack
							space="lg"
							style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto" }}
						>
							<h1
								className="heading-1"
								style={{ fontSize: "var(--font-size-900)" }}
							>
								Design system for the modern web
							</h1>
							<p
								style={{
									fontSize: "var(--font-size-600)",
									color: "var(--theme-fg-subtle)",
									lineHeight: 1.6,
								}}
							>
								SCSS-first, Every Layout primitives, fluid type scales, and full
								light/dark theming. Build consistent interfaces without runtime
								overhead.
							</p>
							<Cluster
								space="sm"
								style={{ justifyContent: "center" }}
							>
								<Button variant="primary" size="lg">
									Get started
								</Button>
								<Button variant="ghost" size="lg">
									View on GitHub
								</Button>
							</Cluster>
						</Stack>
					</Container>
				</Cover>

				<section
					style={{
						paddingBlock: "var(--space-xl)",
						background: "var(--theme-surface)",
					}}
				>
					<Container gutter="md">
						<Stack space="lg">
							<h2
								className="heading-2"
								style={{ textAlign: "center" }}
							>
								Everything you need
							</h2>
							<Grid min="20rem" space="md">
								{features.map((f) => (
									<Card key={f.title}>
										<Stack space="sm">
											<h3 className="heading-3">{f.title}</h3>
											<p
												style={{
													color: "var(--theme-fg-subtle)",
													lineHeight: 1.6,
												}}
											>
												{f.desc}
											</p>
										</Stack>
									</Card>
								))}
							</Grid>
						</Stack>
					</Container>
				</section>

				<section style={{ paddingBlock: "var(--space-xl)" }}>
					<Container gutter="md" width="narrow">
						<Stack space="md" style={{ textAlign: "center" }}>
							<h2 className="heading-2">Ready to use</h2>
							<p
								style={{
									color: "var(--theme-fg-subtle)",
									fontFamily: "var(--font-family-mono)",
									fontSize: "var(--font-size-400)",
									background: "var(--theme-surface)",
									padding: "var(--space-sm)",
									borderRadius: "var(--radius-2)",
								}}
							>
								pnpm add @robertocoratti/ui sass
							</p>
							<Cluster space="sm" style={{ justifyContent: "center" }}>
								<Button variant="secondary">Read the docs</Button>
								<Button variant="accent">View Storybook</Button>
							</Cluster>
						</Stack>
					</Container>
				</section>
			</main>

			<SiteFooter>
				<Container gutter="md">
					<p
						style={{
							textAlign: "center",
							fontSize: "var(--font-size-300)",
						}}
					>
						© 2024 Roberto Coratti · MIT License
					</p>
				</Container>
			</SiteFooter>
		</div>
	),
}
