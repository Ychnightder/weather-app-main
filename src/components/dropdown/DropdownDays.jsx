export function DropdownDays() {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <>
                    <div className="w-53.5 h-80 bg-neutral-800 border border-neutral-600 rounded-lg flex flex-col items-start p-2 transition duration-300 overflow-y-auto">
                        {days.map((day, index) => (
                            <div
                                key={index}
                                className="text-white preset-8 w-full text-left hover:bg-neutral-700 border border-transparent rounded-md cursor-pointer p-3"
                            >
                                {day}
                            </div>
                        ))}
                    </div>
        </>
    );
}