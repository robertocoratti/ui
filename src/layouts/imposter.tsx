export interface ImposterProps<T extends React.ElementType = "div"> {
	/** Element rendered */
	as?: T
	/** Use fixed positioning */
	fixed?: boolean
	/** Constrain within parent bounds */
	contain?: boolean
}

export function Imposter<T extends React.ElementType = "div">({
	className,
	children,
	as,
	fixed,
	contain,
	...props
}: ImposterProps<T> &
	Omit<React.ComponentPropsWithoutRef<T>, keyof ImposterProps<T>>) {
	const Component = as || "div"

	return (
		<Component
			className={["imposter", className].join(className ? " | " : "").trim()}
			data-fixed={fixed ? "true" : undefined}
			data-contain={contain ? "true" : undefined}
			{...props}
		>
			{children}
		</Component>
	)
}
