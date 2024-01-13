import { twMerge } from 'tailwind-merge'

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = BaseButtonProps & {
	variant?: 'primary' | 'secondary' | 'tertiary'
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
	// Base classes
	const baseClasses: string =
		'inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none diabled:opacity-50'

	const genVariantClasses = (variant: string) => {
		switch (variant) {
			case 'primary':
				return 'border border-transparent py-3 text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-500'
			default:
				return ''
		}
	}

	// Gen variant classes based on color props
	//
	const variantClasses = genVariantClasses(variant)

	// Merge base classes with variant classes

	const mergedClasses = twMerge([baseClasses, variantClasses])
	return <button className={mergedClasses} {...props} />
}

export default Button
