import React, { Component } from "react";

class Weather extends Component {
  state = {
    loading: false,
    mapdata: null,
    data: null,

  };

  componentDidMount(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.value,
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
  value=async (position)=>{
    console.log(position)
    const url = "https://api.darksky.net/forecast/c4c85d231b9981e2cfee8e119c2e8352/"+position.coords.latitude+","+position.coords.longitude;
    const response = await fetch(url);
    const jsondata = await response.json();
    console.log(jsondata)
    console.log(this.state.data)
    this.setState({ mapdata: jsondata, loading: true });
    console.log(this.state.mapdata);
  }

  render() {
    return (
      <div>
      {this.state.loding || !this.state.mapdata ? (
        <div>{console.log("loding")}</div>
      ) : (
        <div>
          <div>{console.log(this.state.datacomes)}
            </div>
          <div id="besttime">

           <div className="row">
             <div className="col-md-4 col-12">
               <div>
                <center>
               <img
                  src={"images/weather/PNG/"+this.state.mapdata.currently.icon+".png"}
                  className="card-img-top"
                  alt={this.state.mapdata.currently.icon}
                  style={{width:"70%"}}
                />
                <p>{this.state.mapdata.currently.summary}</p>
                <h3>{this.state.mapdata.currently.temperature}°F</h3>
                <p>{this.state.mapdata.currently.windSpeed}</p>
                <p>{this.state.mapdata.currently.humidity}</p>
                <p>{this.state.mapdata.currently.pressure}</p>
                </center>
               </div>
             </div>



             <div className="col-md-2 col-12">
               <div>
                <center>
                  <h4>Tomorrow</h4>
               <img
                  src={"images/weather/PNG/"+this.state.mapdata.daily.data[0].icon+".png"}
                  className="card-img-top"
                  alt={this.state.mapdata.daily.data[0].icon}
                  style={{width:"90%"}}
                />
                <p>{this.state.mapdata.daily.data[0].summary}</p>
                <h3>{this.state.mapdata.daily.data[0].temperatureLow}°F</h3>
                <p>windSpeed : {this.state.mapdata.daily.data[0].windSpeed}</p>
                <p>humidity : {this.state.mapdata.daily.data[0].humidity}</p>
                <p>pressure : {this.state.mapdata.daily.data[0].pressure}</p>
                </center>
               </div>
             </div>



             <div className="col-md-2 col-12">
               <div>
                <center>
                <h4>Day after tomorrow </h4>
               <img
                  src={"images/weather/PNG/"+this.state.mapdata.daily.data[1].icon+".png"}
                  className="card-img-top"
                  alt={this.state.mapdata.daily.data[1].icon}
                  style={{width:"90%"}}
                />
                <p>{this.state.mapdata.daily.data[1].summary}</p>
                <h3>{this.state.mapdata.daily.data[1].temperatureLow}°F</h3>
                <p>{this.state.mapdata.daily.data[1].windSpeed}</p>
                <p>{this.state.mapdata.daily.data[1].humidity}</p>
                <p>{this.state.mapdata.daily.data[1].pressure}</p>
                </center>
               </div>
             </div>


             <div className="col-md-2 col-12">
               <div>
                <center>
                <h4>Day after 2 days </h4>
               <img
                  src={"images/weather/PNG/"+this.state.mapdata.daily.data[2].icon+".png"}
                  className="card-img-top"
                  alt={this.state.mapdata.daily.data[2].icon}
                  style={{width:"90%"}}
                />
                <p>{this.state.mapdata.daily.data[2].summary}</p>
                <h3>{this.state.mapdata.daily.data[2].temperatureLow}°F</h3>
                <p>{this.state.mapdata.daily.data[2].windSpeed}</p>
                <p>{this.state.mapdata.daily.data[2].humidity}</p>
                <p>{this.state.mapdata.daily.data[2].pressure}</p>
                </center>
               </div>
             </div>



           </div>
           </div>
          </div>
      )}
    </div>
    );
  }
}
export default Weather;
