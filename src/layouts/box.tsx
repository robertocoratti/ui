import { spaces } from "@/config"

export interface BoxProps<T extends React.ElementType = "div"> {
	/** Element rendered */
	as?: T
	/** Padding size */
	padding?: (typeof spaces)[number]
	/** Invert foreground and background colors */
	invert?: boolean
}

export function Box<T extends React.ElementType = "div">({
	className,
	children,
	as,
	padding,
	invert,
	...props
}: BoxProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BoxProps<T>>) {
	const Component = as || "div"

	return (
		<Component
			className={["box", className].join(className ? " | " : "").trim()}
			data-invert={invert ? "true" : undefined}
			style={
				padding
					? ({ "--box-padding": `var(--space-${padding})` } as React.CSSProperties)
					: undefined
			}
			{...props}
		>
			{children}
		</Component>
	)
}
