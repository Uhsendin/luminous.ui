import { twMerge } from 'tailwind-merge'

// Define exclusive color prop types for variant

type PrimaryColors = {
	bg?: string
	hoverBg?: string
	focusRing?: string
}
type SecondaryColors = {
	text?: string
	hoverBorder?: string
	hoverBg?: string
	focusRing?: string
}
type TertiaryColors = {
	text?: string
	hoverText?: string
	focusRing?: string
}

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonComponent = {
	(
		props: BaseButtonProps & { variant?: 'primary'; colors?: PrimaryColors },
	): JSX.Element
	(
		props: BaseButtonProps & { variant: 'secondary'; colors?: SecondaryColors },
	): JSX.Element
	(
		props: BaseButtonProps & { variant: 'tertiary'; colors?: TertiaryColors },
	): JSX.Element
}

const Button: ButtonComponent = ({
	variant = 'primary',
	colors = {},
	...props
}) => {
	// Base classes
	const baseClasses: string =
		'inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
	const genVariantClasses = (variant: string, colorProps: any) => {
		switch (variant) {
			case 'primary':
				return `border border-transparent py-3 text-white ${colorProps.bg || 'bg-emerald-500'
					} ${colorProps.hoverBg || 'hover:bg-emerald-600'} ${colorProps.focusRing || 'focus:ring-emerald-500'
					}`
			case 'secondary':
				return `border-2 border-gray-200 py-[.688rem] hover:text-white ${colorProps.text || 'text-emerald-500'
					} ${colorProps.hoverBorder || 'hover:border-emerald-500'} ${colorProps.hoverBg || 'hover:bg-emerald-500'
					} ${colorProps.focusRing || 'focus:ring-emerald-500'}`
			case 'tertiary':
				return `border border-transparent py-3 underline-offset-4 ring-offset-white hover:underline ${colorProps.text || 'text-emerald-500'
					} ${colorProps.hoverText || 'hover:text-emerald-700'} ${colorProps.focusRing || 'focus:ring-emerald-500'
					}`
			default:
				return ''
		}
	}

	// Gen variant classes based on color props
	//
	const variantClasses = genVariantClasses(variant, colors)

	// Merge base classes with variant classes

	const mergedClasses = twMerge([baseClasses, variantClasses])
	return <button className={mergedClasses} {...props} />
}

export default Button
