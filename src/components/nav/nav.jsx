import logo from '/images/logo.svg';
import iconUnits from '/images/icon-units.svg';
import { ButtonDropdown } from '../button/ButtonDropdown';
import { DropdownUnits } from '../dropdown/DropdownUnits';
import { useState } from 'react';

export function Nav() {

	const [isHovered, setIsHovered] = useState(false);

	const handleToggleUnits = () => {
		 setIsHovered(!isHovered);
	};
	

	return (
		<nav className="w-full flex items-center justify-between">
			<div className="w-1/2 h-full flex items-center ">
				<img className="w-30 lg:w-40 transition-all duration-200" src={logo} alt="Logo" />
			</div>
			<div className="w-1/2 h-full flex items-center justify-end relative">
				<ButtonDropdown width="119px" icon={iconUnits} label="Units" onClick={handleToggleUnits} />
				{
					isHovered && (
						<div className="absolute top-full right-0 mt-2">
							<DropdownUnits />
						</div>
					)
				}
			</div>
		</nav>
	);
}
