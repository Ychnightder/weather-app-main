import { useWeatherContext } from '../../hooks/useContext';
import icon from '/images/icon-checkmark.svg';

export function DropdownUnits() {
	const { unitis, toggleUnitis, windSpedUnit, toggleWindSpeedUnit, PrecipitationUnit, togglePrecipitationUnit } = useWeatherContext();

	const dataDropdown = [
		{
			name: 'Temperature',
			value: unitis,
			toggle: toggleUnitis,
			front: ['Celsius (°C)', 'Fahrenheit (°F)'],
		},
		{
			name: 'Wind Speed',
			value: windSpedUnit,
			toggle: toggleWindSpeedUnit,
			front: ['km/h', 'mph'],
		},
		{
			name: 'Precipitation',
			value: PrecipitationUnit,
			toggle: togglePrecipitationUnit,
			front: ['Millimeters (mm)', 'Inches (in)'],
		},
	];

	return (
		<>
			<div className="w-54 h-103 bg-neutral-800 border border-neutral-600 radius-12 p-2 transition-transform duration-300">
				<button
					onClick={toggleUnitis}
					className="w-full text-left cursor-pointer text-neutral-0 bg-neutral-800 hover:bg-neutral-700 p-2 preset-7 radius-12">
					Switch to {unitis}
				</button>
				{dataDropdown.map((item, index) => (
					<div key={index}>
						{index !== 0 && <hr className=" my-3 " />}
						<p className="preset-8 text-neutral-300 p-2">{item.name}</p>
						{item.front.map((option, idx) => {
							const isTemperature = item.name === 'Temperature';
							const isWind = item.name === 'Wind Speed';
							const isPrecip = item.name === 'Precipitation';

							const desiredUnit = isTemperature
								? idx === 0
									? 'metric'
									: 'imperial'
								: isWind
									? idx === 0
										? 'km/h'
										: 'mph'
									: isPrecip
										? idx === 0
											? 'mm'
											: 'inches'
										: null;

							const isSelected =
								(isTemperature && unitis === desiredUnit) ||
								(isWind && windSpedUnit === desiredUnit) ||
								(isPrecip && PrecipitationUnit === desiredUnit);

							const handleClick = () => {
								if (isTemperature) {
									if (unitis !== desiredUnit) toggleUnitis();
								} else if (isWind) {
									if (windSpedUnit !== desiredUnit) toggleWindSpeedUnit();
								} else if (isPrecip) {
									if (PrecipitationUnit !== desiredUnit) togglePrecipitationUnit();
								}
							};

							return (
								<button
									key={`${index}-${idx}`}
									className={`flex w-full text-left cursor-pointer text-neutral-0 hover:bg-neutral-700 preset-7 radius-12 p-2 ${isSelected ? 'bg-neutral-700' : 'bg-neutral-800'}`}
									onClick={handleClick}>
									{option}
									{isSelected && (
										<span className="ml-auto w-5 h-5 radius-full flex items-center justify-center ">
											<img src={icon} alt="Checkmark" />
										</span>
									)}
								</button>
							);
						})}
					</div>
				))}
			</div>
		</>
	);
}
