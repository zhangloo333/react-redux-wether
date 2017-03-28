import React, {Component} from 'react';

import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {fetchWeather} from '../actions/index';

export default class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

fucntion mapStateToProps({weather}) {
  return {weather}; // {weather} === {weather: weather}
}

export defualt connect(mapStateToProps)(WeatherList);
