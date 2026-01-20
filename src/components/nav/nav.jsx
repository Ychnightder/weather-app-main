import logo from '/images/logo.svg';
import iconUnits from '/images/icon-units.svg';
import { ButtonDropdown } from '../button/ButtonDropdown';

export function Nav() {
	return (
		<nav className="w-full flex   ">
			<div className="w-1/2 h-full flex items-center">
				<img className="w-30 lg:w-40 transition-all duration-200" src={logo} alt="Logo" />
			</div>
			<div className="w-1/2 h-full flex items-center justify-end ">
				 <ButtonDropdown width="119px" icon={iconUnits} label="Units" />
			</div> 
		</nav>
	);
}
