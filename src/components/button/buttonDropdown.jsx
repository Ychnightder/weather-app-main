import drop from '/images/icon-dropdown.svg';

export function ButtonDropdown({ width = '119px', icon, label , onClick}) {
	return (
		<button
			style={{ width }}
			className=" lg:h-11 h-9 flex items-center justify-center gap-2 rounded bg-neutral-800 text-neutral-0 transition-colors duration-200 cursor-pointer"
			onClick={onClick}
		>
			{icon ? <img src={icon} alt={label} /> : null}
			{label}
			<img src={drop} alt="Dropdown icon" />
		</button>
	);
}