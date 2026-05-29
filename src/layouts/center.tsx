export interface CenterProps<T extends React.ElementType = "div"> {
	/** Element rendered */
	as?: T
	/** Max inline size (default: 60ch) */
	max?: string
	/** Add horizontal gutters */
	gutters?: boolean
	/** Align children to center axis */
	intrinsic?: boolean
	/** Center text */
	centerText?: boolean
}

export function Center<T extends React.ElementType = "div">({
	className,
	children,
	as,
	max,
	gutters,
	intrinsic,
	centerText,
	...props
}: CenterProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof CenterProps<T>>) {
	const Component = as || "div"

	return (
		<Component
			className={["center", className].join(className ? " | " : "").trim()}
			data-gutters={gutters ? "true" : undefined}
			data-intrinsic={intrinsic ? "true" : undefined}
			data-text={centerText ? "true" : undefined}
			style={
				max ? ({ "--center-max": max } as React.CSSProperties) : undefined
			}
			{...props}
		>
			{children}
		</Component>
	)
}
