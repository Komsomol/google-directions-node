//jshint esversion:6

require('dotenv').config();

const API_KEY = process.env.GOOGLE_API_KEY;

const googleMapsClient = require('@google/maps').createClient({
	key: API_KEY,
	Promise: Promise 
});

var getTime = (origin, destination) =>{
	return new Promise( (resolve, reject ) => {
		googleMapsClient.distanceMatrix({
			origins: [
				origin
			],
			destinations: [
				destination
			],
			language: 'en',
			units: 'metric',
			'departure_time':'now',
			'traffic_model': 'best_guess'
		}).asPromise()
			.then((response) => {
				let data = {
					status: response.json.status,
					origin: response.json.origin_addresses[0],
					destination: response.json.destination_addresses[0],
					distance: response.json.rows[0].elements[0].distance.text,
					duration: response.json.rows[0].elements[0].duration.text
				};
				resolve(data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

getTime('Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia', 'KL International​ Airport').then((result) =>{
	// console.dir(result, {colors:true});
}).catch((err) =>{
	// console.log(err);
});

module.exports = {
	API_KEY,
	getTime
};