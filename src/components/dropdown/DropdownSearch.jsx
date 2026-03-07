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
					<div className="w-131 bg-neutral-800 border border-neutral-700 rounded-lg flex flex-col items-start p-2 transition duration-300 max-h-60 overflow-y-auto">
						{cities.map((city, index) => (
							<div
								key={index}
								className="text-white preset-8 w-full text-left hover:bg-neutral-700 border border-transparent hover:border-neutral-600 rounded-md cursor-pointer p-3 truncate">
								{city}
							</div>
						))}
					</div>
				</>
		);
}