import React, { Component } from "react";
import Carosole from "./carosole";
import { Link } from "react-router-dom";

class Category extends Component {
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
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {apidata.articles[i].title}
                      </h5>
                      <p>
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
                          >Readpage</Link>
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
    const apidata = JSON.parse(this.props.location.state.newstype);
    if (apidata) {
      console.log(apidata);
      cardlist(apidata);
    }
   
    return (
      <div className="container">
        <div className="row" style={{display:"block"}} >
         
          <Carosole headlineslides={this.props.location.state.newstype} />
        </div>
        <br></br>
        <div id="newslist" className="row">{rows}</div>
      </div>
    );
  }
}
export default Category;
