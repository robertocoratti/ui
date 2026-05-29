export type ContainerWidth = "narrow" | "normal" | "wide" | "full"
export type ContainerGutter = "none" | "sm" | "md" | "lg"

export interface ContainerProps<T extends React.ElementType = "div"> {
	/** Element rendered */
	as?: T
	/** Max inline size (default: normal = 64rem) */
	width?: ContainerWidth
	/** Horizontal padding (default: md) */
	gutter?: ContainerGutter
}

export function Container<T extends React.ElementType = "div">({
	className,
	children,
	as,
	width,
	gutter,
	...props
}: ContainerProps<T> &
	Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
	const Component = as || "div"

	return (
		<Component
			className={["container", className].join(className ? " | " : "").trim()}
			data-width={width}
			data-gutter={gutter}
			{...props}
		>
			{children}
		</Component>
	)
}
