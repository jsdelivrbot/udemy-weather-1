import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

	renderWeather(cityData) {

		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		const { lon, lat } = cityData.city.coord;
		// const lon = cityData.city.coord.lon;
		// const lat = cityData.city.coord.lat;

		// console.log(temps);

		return(
			<tr key={name}>
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td>
					<Chart data={temps} color="orange" units="K" />
				</td>

				<td>
					<Chart data={pressures} color="green" units="кПа" />
				</td>

				<td>
					<Chart data={humidities} color="black" units="%" />
				</td>
			</tr>
		);
	}

	render() {

		return (
			<table className="table table-hover">
				<thead>
				<tr>
					<th>Город</th>
					<th>Температура (K)</th>
					<th>Давление (кПа)</th>
					<th>Влажность (%)</th>
				</tr>
				</thead>

				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);

	}
}

function mapStateToProps({ weather }) {  // const weather = state.weather
	return { weather }; // === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);