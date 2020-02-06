import React, { Component } from "react";

class Weather extends Component {
    state = {
    loading: false,
    weatherdata: null,
    x: null,
    y: null
  };
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.showError
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }
  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
    }
  }
  async showPosition(position) {
 
    const url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c4c85d231b9981e2cfee8e119c2e8352/"+position.coords.latitude+","+position.coords.longitude;
    const response = await fetch(url);
    const data = await response.json();
    var newdata=JSON.stringify(data);
    this.setState({ weatherdata: newdata, loading: true });
    console.log(newdata);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <input
              type="button"
              onClick={() => {
                this.getLocation();
              }}
              value="click"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4"></div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}
export default Weather;
