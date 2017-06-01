import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

	renderWeather(cityData) {

		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		// console.log(temps);

		return(
			<tr key={name}>
				<td>{name}</td>
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