import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Categorynavbar extends Component{
    state = {
        datatype: " ",
        redirect: false
      };
      async fetchdatatype(id) {
        const url =
          "https://newsapi.org/v2/top-headlines?country=in&category=" +
          id +
          "&apiKey=7c642db6ea3547b584cb66c897422530";
        const response = await fetch(url);
        const data = await response.json();
        var newdata = JSON.stringify(data);
        this.setState({
          datatype: newdata,
          redirect: true
        });
        console.log(this.state.datatype);
      }
    
      setRedirect = type => {
        this.fetchdatatype(type);
      };
      renderRedirect = () => {
        if (this.state.redirect) {
          return (
            <Redirect
              to={{
                pathname: "/category",
                state: { newstype: this.state.datatype }
              }}
            />
          );
        }
      };
  
    render(){
        {{console.log(JSON.parse(this.props.headlines))}}

        return(
            <div className="row" >
            <div className="col-lg-9 col-12 container" >
                <div className="row" id="categorieslist">
                <div className="col col-lg-2 col-sm-4">
                  {this.renderRedirect()}
                  <center>
                  <button
                    onClick={() => {
                      this.setRedirect("business");
                    }}
                    style={{
                     
                    }}
                  >
                    Business
                  </button>
                  </center>
                </div>
                <div className="col col-lg-2 col-sm-4">
                  <center>
                  {this.renderRedirect()}
                  <button
                    onClick={() => {
                      this.setRedirect("entertainment");
                    }}
                  >
                    Enjoyment
                  </button>
                  </center>
                </div>
      
                <div className="col col-lg-2 col-sm-4">
                <center>
                  {this.renderRedirect()}
                  <button
                    onClick={() => {
                      this.setRedirect("health");
                    }}
                  >
                    Health
                  </button>
                  </center>
                </div>
      
                <div className="col col-lg-2 col-sm-4">
                <center>
                  {this.renderRedirect()}
                  <button
                    onClick={() => {
                      this.setRedirect("science");
                    }}
                  >
                  Science
                  </button>
                  </center>
                </div>
      
                <div className="col col-lg-2 col-sm-4">
                <center>
                  {this.renderRedirect()}
                  <button
                    onClick={() => {
                      this.setRedirect("sports");
                    }}
                  >
                    sports&nbsp;&nbsp;
                  </button>
                  </center>
                </div>
      
                <div className="col col-lg-2 col-sm-4">
                <center>
                  {this.renderRedirect()}
                  <button
                    onClick={() => {
                      this.setRedirect("technology");
                    }}
                  >
                    technology
                  </button>
                  </center>
                </div>
              </div>
            <div >
                </div>
                </div>
                </div>
        )
    }
}
export default Categorynavbar;