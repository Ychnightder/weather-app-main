import { useState } from 'react';
import { WeatherContext } from './WeatherContext';


export const WeatherProvider = ({ children }) => {
  
	const [unitis, setUnitis] = useState('metric'); // imperial or metric
	const [windSpedUnit, setWindSpedUnit] = useState('km/h'); // km/h or mph
  const [PrecipitationUnit, setPrecipitationUnit] = useState('mm'); // mm or inches

	const [weatherData, setWeatherData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null); 

	const toggleUnitis = () => {
		setUnitis(prevUnitis => (prevUnitis === 'metric' ? 'imperial' : 'metric'));
	};

	const toggleWindSpeedUnit = () => {
		setWindSpedUnit(prevUnit => (prevUnit === 'km/h' ? 'mph' : 'km/h'));
	};

  const togglePrecipitationUnit = () => {
    setPrecipitationUnit(prevUnit => (prevUnit === 'mm' ? 'inches' : 'mm')); 
  };

	return (
		<WeatherContext.Provider
			value={{ unitis, toggleUnitis, weatherData, setWeatherData, loading, setLoading, error, setError, windSpedUnit, toggleWindSpeedUnit, PrecipitationUnit, togglePrecipitationUnit }}>
			{children}
		</WeatherContext.Provider>
	);
};
          