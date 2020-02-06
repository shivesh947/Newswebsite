import React, { Component } from "react";
import "./stylesheet/carosole.css";
class Carosole extends Component {
  render() {
    const apidata = JSON.parse(this.props.headlineslides);
    if (apidata) {
      {
        var rows = [];
        rows.push(
          <div className="carousel-item active" key={-1}>
            <img
              className="d-block "
              src={apidata.articles[0].urlToImage}
              style={{ width: "100vw" }}
            />
            <div className="carousel-caption">
              <h3 className="h3-responsive">{apidata.articles[0].title}</h3>
            </div>
          </div>
        );
        var x = 10;
        for (var i = 1; i < x; i++) {
          if (apidata.articles[i].urlToImage == null) {
            x++;
            continue;
          }
          rows.push(
            <div className="carousel-item" key={i}>
              <img className="d-block " src={apidata.articles[i].urlToImage} />
              <div className="carousel-caption">
                <h3 className="h3-responsive">{apidata.articles[i].title}</h3>
              </div>
            </div>
          );
        }
      }
    }
    return (
      <div  style={{backgroundImage:
        "url(https://ak7.picdn.net/shutterstock/videos/4924517/thumb/2.jpg)"}}>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner ">{rows}</div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
export default Carosole;
