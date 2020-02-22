import React, { Component } from "react";
import Carosole from "./carosole";
import "./stylesheet/mainpage.css";
import { Link } from "react-router-dom";
import Categorynavbar from './categorynav';

class Mainpage extends Component {
 
  render() {
    var rows = [];

    function cardlist(apidata) {
      if (apidata) {
        {
          var x = 100;
          for (var i = 0; apidata.articles[i] != null; i++) {
            if (apidata.articles[i].urlToImage == null) {
              x++;
              continue;
            }
            rows.push(
              <div className="card mb-4" key={i}>
                <div className="row">
                  <div className="col-md-4">
                    <img
                      className="card-img"
                      src={apidata.articles[i].urlToImage}
                      style={{height:"200px"}}
                    />
                  </div>
                  <div className="col-md-8" style={{minWidth: "630px"}}>
                    <div className="card-body">
                      <h5 className="card-title">
                        {apidata.articles[i].title}
                      </h5>
                      <p className="card-text">
                        {apidata.articles[i].description}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <Link 
                           to={{
                            pathname: "/Readpage",
                            state: { readpagenews: apidata.articles[i],
                                     arrpass:apidata.articles
                                        }
                          }}
                          >Read</Link>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }
      }
    }
    const apidata = JSON.parse(this.props.headlines);
    if (apidata) {
      console.log(apidata);
      cardlist(apidata);
    }
    return (
      <div className="container">
      
        <div
          className="row"
          style={{
            backgroundImage:
              "url(https://ak7.picdn.net/shutterstock/videos/4924517/thumb/2.jpg)"
          }}
        >
          <div className="col-12">
            <Carosole headlineslides={this.props.headlines} />
          </div>
          
        </div>

        <br/>
       
        <div className="row">
          <div className="col-lg-6 col-sm-6" style={{boxShadow:"3px 2px 6px 2px #4e4b4bd4"}}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/cvFoxljopHU"
              frameBorder="0"
              height="315"
              width="100%"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-lg-6 col-sm-6" style={{boxShadow:"3px 2px 6px 2px #4e4b4bd4"}}>
            <iframe
              height="315"
              width="100%"
              src="https://www.youtube-nocookie.com/embed/fX4SA0n3U9M"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <br/>
        <h4>LATEST NEWS</h4>
        <div className="row" id="newslist">
          
          {rows}
        </div>
      </div>
   

    );
  }
}
export default Mainpage;
