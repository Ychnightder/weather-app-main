import axios from 'axios';

export async function getCoordinates(cityName) {
	try {
		const response = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
			params: {
				name: cityName,
				count: 5, 
				language: 'en', 
				format: 'json',
			},
		});

		return response.data.results || [];
	} catch (error) {
		console.error('Erreur de géocodage:', error);
		return [];
	}
}

// getCoordinates("Paris").then(results => console.log(results)).catch(error => console.error(error));