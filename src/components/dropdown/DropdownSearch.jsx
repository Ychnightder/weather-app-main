import loader from '/images/icon-loading.svg';
/**
 * Description placeholder
 *
 * @export
 * @param {{ cities: string[]; }} param0
 * @returns {*}
 */

export function DropdownSearch({ cities }) {
	return (
		<>
			<div className="w-131 bg-neutral-800 border border-neutral-700 radius-8 flex flex-col items-start p-2 transition duration-300 max-h-60 overflow-y-auto">
				{cities === null || cities.length === 0 ? (
					<div className="flex items-center gap-2 text-neutral-0 preset-8">
						<img src={loader} alt="Loading..." className="w-5 animate-spin" /><span className="preset-7">Search in progress</span>
					</div>
				) : (
					cities.map((city, index) => (
						<div
							key={index}
							className="text-white preset-8 w-full text-left hover:bg-neutral-700 border border-transparent rounded-md cursor-pointer p-3">
							{city}
						</div>
					))
				)}
			</div>
		</>
	);
}
