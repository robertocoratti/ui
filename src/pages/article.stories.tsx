import type { StoryObj, Meta } from "@storybook/react"

import { Card } from "@/components/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Navigation } from "@/components/navigation"
import { Stack } from "@/layouts/stack"
import { Cluster } from "@/layouts/cluster"
import { Container } from "@/layouts/container"
import { Sidebar } from "@/layouts/sidebar"

const meta: Meta = {
	title: "Pages/Article",
	parameters: { layout: "fullscreen" },
}
export default meta

type Story = StoryObj

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
									<a href="#">Blog</a>
								</li>
								<li>
									<a href="#">GitHub</a>
								</li>
							</Cluster>
						</Navigation>
					</div>
				</Container>
			</SiteHeader>

			<main style={{ flex: 1, paddingBlock: "var(--space-xl)" }}>
				<Container gutter="md">
					<Sidebar sidebarWidth="16rem" contentMin="60%" gap="lg">
						<aside>
							<Stack space="md">
								<Card>
									<Stack space="sm">
										<h3
											className="heading-3"
											style={{ fontSize: "var(--font-size-400)" }}
										>
											On this page
										</h3>
										<nav>
											<Stack space="xs" as="ul" style={{ listStyle: "none", padding: 0 }}>
												<li>
													<a href="#">Introduction</a>
												</li>
												<li>
													<a href="#">Token system</a>
												</li>
												<li>
													<a href="#">Cascade layers</a>
												</li>
												<li>
													<a href="#">Consumer usage</a>
												</li>
											</Stack>
										</nav>
									</Stack>
								</Card>
								<Card>
									<Stack space="sm">
										<h3
											className="heading-3"
											style={{ fontSize: "var(--font-size-400)" }}
										>
											Related
										</h3>
										<Stack space="xs" as="ul" style={{ listStyle: "none", padding: 0 }}>
											<li>
												<a href="#">Every Layout guide</a>
											</li>
											<li>
												<a href="#">Fluid type with Utopia</a>
											</li>
											<li>
												<a href="#">Sass modules</a>
											</li>
										</Stack>
									</Stack>
								</Card>
							</Stack>
						</aside>

						<article>
							<Stack space="lg">
								<header>
									<Stack space="sm">
										<p
											style={{
												fontSize: "var(--font-size-300)",
												color: "var(--theme-fg-subtle)",
											}}
										>
											May 29, 2024 · 8 min read
										</p>
										<h1 className="heading-1">
											Building a token-driven design system with Sass
										</h1>
										<p
											style={{
												fontSize: "var(--font-size-600)",
												color: "var(--theme-fg-subtle)",
												lineHeight: 1.6,
											}}
										>
											How a three-level token architecture — primitives, custom
											properties, semantic tokens — produces a design system that
											is both flexible and safe to consume.
										</p>
									</Stack>
								</header>

								<section>
									<Stack space="md">
										<h2 className="heading-2">Introduction</h2>
										<p style={{ lineHeight: 1.7 }}>
											Token-driven design is the practice of storing design
											decisions — colours, spacing, typography — as named
											variables rather than literal values. The goal is a single
											source of truth that can be consumed by any tool in the
											design/engineering pipeline.
										</p>
										<p style={{ lineHeight: 1.7 }}>
											The approach here uses three distinct levels: Sass{" "}
											<code
												style={{ fontFamily: "var(--font-family-mono)" }}
											>
												!default
											</code>{" "}
											variables as primitive definitions, CSS custom properties for
											runtime theming, and a semantic token layer that maps
											purpose to value.
										</p>
									</Stack>
								</section>

								<section>
									<Stack space="md">
										<h2 className="heading-2">The token system</h2>
										<p style={{ lineHeight: 1.7 }}>
											Level one is a Sass map in{" "}
											<code style={{ fontFamily: "var(--font-family-mono)" }}>
												_variables.scss
											</code>
											. Every primitive — colour scale, spacing scale, type scale
											— lives here and is marked{" "}
											<code style={{ fontFamily: "var(--font-family-mono)" }}>
												!default
											</code>{" "}
											so consumers can override via{" "}
											<code style={{ fontFamily: "var(--font-family-mono)" }}>
												@use ... with (...)
											</code>
											.
										</p>
										<pre
											style={{
												padding: "var(--space-sm)",
												borderRadius: "var(--radius-2)",
												fontSize: "var(--font-size-300)",
												fontFamily: "var(--font-family-mono)",
												lineHeight: 1.6,
												overflowX: "auto",
											}}
										>
											{`@use "@robertocoratti/ui/scss" with (
  $color-themes: (
    "dark": (
      "bg": ("base", "900"),
      "fg": ("primary", "200"),
    ),
  ),
);`}
										</pre>
									</Stack>
								</section>

								<section>
									<Stack space="md">
										<h2 className="heading-2">Cascade layers</h2>
										<p style={{ lineHeight: 1.7 }}>
											All rules are placed inside named{" "}
											<code style={{ fontFamily: "var(--font-family-mono)" }}>
												@layer
											</code>{" "}
											blocks. The declared order is{" "}
											<code style={{ fontFamily: "var(--font-family-mono)" }}>
												reset → base → tokens → layouts → components →
												utilities
											</code>
											. Consumer rules written outside any layer sit above the
											entire stack, making overrides trivial.
										</p>
									</Stack>
								</section>
							</Stack>
						</article>
					</Sidebar>
				</Container>
			</main>

			<SiteFooter>
				<Container gutter="md">
					<p style={{ textAlign: "center", fontSize: "var(--font-size-300)" }}>
						© 2024 Roberto Coratti · MIT License
					</p>
				</Container>
			</SiteFooter>
		</div>
	),
}
