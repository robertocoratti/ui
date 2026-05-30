import type { StoryObj, Meta } from "@storybook/react"

import { Button } from "@/components/button"
import { Stack } from "@/layouts/stack"
import { Cover } from "@/layouts/cover"

const meta: Meta = {
	title: "Pages/Sign in",
	parameters: { layout: "fullscreen" },
}
export default meta

type Story = StoryObj

export const Default: Story = {
	render: () => (
		<Cover>
			<div
				style={{
					width: "100%",
					maxWidth: "26rem",
					margin: "0 auto",
					padding: "var(--space-md)",
				}}
			>
				<Stack space="lg">
					<Stack space="xs" style={{ textAlign: "center" }}>
						<span
							style={{
								fontFamily: "var(--font-family-display)",
								fontWeight: "var(--font-weight-bold)",
								fontSize: "var(--font-size-700)",
								color: "var(--color-secondary-300)",
							}}
						>
							ui
						</span>
						<h1 className="heading-2">Welcome back</h1>
						<p style={{ color: "var(--theme-fg-subtle)" }}>
							Sign in to your account to continue.
						</p>
					</Stack>

					<div
						style={{
							background: "var(--theme-surface)",
							borderRadius: "var(--radius-3)",
							padding: "var(--space-md)",
							border: "1px solid var(--theme-border)",
						}}
					>
						<Stack space="md" as="form">
							<Stack space="xs">
								<label htmlFor="email">Email</label>
								<input
									id="email"
									type="email"
									placeholder="you@example.com"
									style={{ width: "100%" }}
								/>
							</Stack>
							<Stack space="xs">
								<label htmlFor="password">Password</label>
								<input
									id="password"
									type="password"
									placeholder="••••••••"
									style={{ width: "100%" }}
								/>
							</Stack>
							<Button variant="primary" style={{ width: "100%" }}>
								Sign in
							</Button>
						</Stack>
					</div>

					<p
						style={{
							textAlign: "center",
							color: "var(--theme-fg-subtle)",
							fontSize: "var(--font-size-300)",
						}}
					>
						Don't have an account?{" "}
						<a href="#">Create one</a>
					</p>
				</Stack>
			</div>
		</Cover>
	),
}
