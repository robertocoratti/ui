import { spaces } from "@/config"

export interface CoverProps<T extends React.ElementType = "div"> {
	/** Element rendered */
	as?: T
	/** Min block size (default: 100dvh) */
	minHeight?: string
	/** Padding around cover */
	padding?: (typeof spaces)[number]
}

export function Cover<T extends React.ElementType = "div">({
	className,
	children,
	as,
	minHeight,
	padding,
	...props
}: CoverProps<T> &
	Omit<React.ComponentPropsWithoutRef<T>, keyof CoverProps<T>>) {
	const Component = as || "div"
	const style: Record<string, string> = {}
	if (minHeight) style["--cover-min-height"] = minHeight
	if (padding) style["--cover-padding"] = `var(--space-${padding})`

	return (
		<Component
			className={["cover", className].join(className ? " | " : "").trim()}
			style={Object.keys(style).length ? (style as React.CSSProperties) : undefined}
			{...props}
		>
			{children}
		</Component>
	)
}
