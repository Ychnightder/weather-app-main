export function ButtonPrimary({width = '114px', label = 'Search' }) {
	return (
		<button
			className={`h-14 ${width} flex items-center justify-center radius-12 preset-5-m bg-blue-500 hover:bg-blue-700 text-neutral-0 transition-colors duration-200 cursor-pointer px-4`}>
			{label}
		</button>
	);
}