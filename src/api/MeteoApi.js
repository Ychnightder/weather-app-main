import config from '../config/config.json' with { type: 'json' };
import axios from 'axios';


/**
 * Récupère les données météo pour une position donnée
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 */
export async function getMeteoData(lat, lon) {
	try {
		const response = await axios.get(config.API_URL_METEO, {
			params: {
				latitude: lat,
				longitude: lon,
				current: 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m',
				hourly: 'temperature_2m,weather_code',
				daily: 'weather_code,temperature_2m_max,temperature_2m_min',
				timezone: 'auto', 
			},
		});
		return response.data;
	} catch (error) {
		console.error('Erreur lors de la récupération météo:', error);
		throw error; 
	}
}
// getMeteoData(48.8566, 2.3522).then(data => console.log(data)).catch(error => console.error(error));