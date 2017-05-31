import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component {

	renderWeather(cityData) {

		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const pressure = cityData.list.map(weather => weather.main.pressure);

		// console.log(temps);

		return(
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Sparklines height={120} width={180} data={temps}>
						<SparklinesLine color="red" />
					</Sparklines>
				</td>

				<td>
					<Sparklines height={120} width={180} data={pressure}>
						<SparklinesLine color="green" />
					</Sparklines>
				</td>

				<td>
					<Sparklines height={120} width={180} data={humidity}>
						<SparklinesLine color="blue" />
					</Sparklines>
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
					<th>Температура</th>
					<th>Давление</th>
					<th>Влажность</th>
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