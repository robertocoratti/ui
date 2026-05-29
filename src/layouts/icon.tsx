export interface IconProps<T extends React.ElementType = "svg"> {
	/** Element rendered */
	as?: T
	/** Icon size (default: 0.75em) */
	size?: string
}

export function Icon<T extends React.ElementType = "svg">({
	className,
	children,
	as,
	size,
	...props
}: IconProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof IconProps<T>>) {
	const Component = as || "svg"

	return (
		<Component
			className={["icon", className].join(className ? " | " : "").trim()}
			style={
				size ? ({ "--icon-size": size } as React.CSSProperties) : undefined
			}
			aria-hidden="true"
			focusable="false"
			{...props}
		>
			{children}
		</Component>
	)
}
