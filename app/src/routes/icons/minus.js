const IconMinus = ({ size = 24, ...props }) =>
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="#333"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		{...props}
	>

		<circle cx="12" cy="12" r="10" />
		<line x1="8" y1="12" x2="16" y2="12" />
	</svg>

export default IconMinus
