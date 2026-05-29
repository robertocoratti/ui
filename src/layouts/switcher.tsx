import { spaces } from "@/config"

export interface SwitcherProps<T extends React.ElementType = "div"> {
	/** Element rendered */
	as?: T
	/** Gap between items */
	gap?: (typeof spaces)[number]
	/** Viewport width at which items wrap (default: 40rem) */
	threshold?: string
}

export function Switcher<T extends React.ElementType = "div">({
	className,
	children,
	as,
	gap,
	threshold,
	...props
}: SwitcherProps<T> &
	Omit<React.ComponentPropsWithoutRef<T>, keyof SwitcherProps<T>>) {
	const Component = as || "div"
	const style: Record<string, string> = {}
	if (gap) style["--switcher-gap"] = `var(--space-${gap})`
	if (threshold) style["--switcher-threshold"] = threshold

	return (
		<Component
			className={["switcher", className].join(className ? " | " : "").trim()}
			style={Object.keys(style).length ? (style as React.CSSProperties) : undefined}
			{...props}
		>
			{children}
		</Component>
	)
}
