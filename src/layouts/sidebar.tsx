import { spaces } from "@/config"

export type SidebarSide = "start" | "end"

export interface SidebarProps<T extends React.ElementType = "div"> {
	/** Element rendered */
	as?: T
	/** Which child is the sidebar (default: start) */
	side?: SidebarSide
	/** Space between sidebar and content */
	gap?: (typeof spaces)[number]
	/** Sidebar width (default: 20rem) */
	sidebarWidth?: string
	/** Min content width before wrapping (default: 50%) */
	contentMin?: string
}

export function Sidebar<T extends React.ElementType = "div">({
	className,
	children,
	as,
	side,
	gap,
	sidebarWidth,
	contentMin,
	...props
}: SidebarProps<T> &
	Omit<React.ComponentPropsWithoutRef<T>, keyof SidebarProps<T>>) {
	const Component = as || "div"
	const style: Record<string, string> = {}
	if (gap) style["--sidebar-gap"] = `var(--space-${gap})`
	if (sidebarWidth) style["--sidebar-width"] = sidebarWidth
	if (contentMin) style["--sidebar-content-min"] = contentMin

	return (
		<Component
			className={["sidebar", className].join(className ? " | " : "").trim()}
			data-side={side}
			style={Object.keys(style).length ? (style as React.CSSProperties) : undefined}
			{...props}
		>
			{children}
		</Component>
	)
}
