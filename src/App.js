import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'





export class App extends Component {
  render() {
    return (
      <div className='App'>

        <Map google={this.props.google} zoom={14}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
          </InfoWindow>
        </Map>

      </div>
    )
  }
}



export default GoogleApiWrapper({
  apiKey: ("AIzaSyDVNp3Ad_CN_8y2GAVG9vhgBqclcqO4i_Q")
})(App)

