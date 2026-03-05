// import WeatherContext from '../../context/WeatherContext';

export function DropdownUnits() {

    // const { unitis, toggleUnitis, windSpedUnit, toggleWindSpeedUnit, PrecipitationUnit, togglePrecipitationUnit } = useContext(WeatherContext);

    return(
        
        <>
        <div className="w-56 h-103 bg-neutral-800 border border-neutral-600 rounded-xl p-2 ">
            <button className="w-full  text-white bg-neutral-800 hover:bg-neutral-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                Switch to {}
            </button>
        </div>
        </>
    );
};