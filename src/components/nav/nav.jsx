import logo from '/images/logo.svg';
import iconUnits from '/images/icon-units.svg';
import { ButtonDropdown } from '../button/buttonDropdown';

export function Nav() {
	return (
		<nav className="w-full flex items-center h-11 lg:px-28 lg:pt-12 md:px-20 md:pt-15 px-5 pt-10" >
			<div className="w-1/2 h-full flex items-center">
				<img className="w-30 lg:w-40 transition-all duration-200" src={logo} alt="Logo" />
			</div>
			<div className="w-1/2 h-full flex items-center justify-end ">
				<ButtonDropdown width="119px"  icon={iconUnits} label="Units" />
			</div>
		</nav>
	);
}
