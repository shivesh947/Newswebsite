import React, { Component } from "react";
import { Link } from "react-router-dom";
import './stylesheet/readpage.css'
class Readpage extends Component {
  render() {

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    var readx = this.props.location.state;
    var arraycomes = this.props.location.state.arrpass;
    console.log("ds");
    console.log(arraycomes);
    return (
      // <div>read news{console.log(this.props.location.state.readpagenews)}</div>
      <div className="card mb-3 container" id="topd">
        {/* <button onClick={()=>topFunction()} id="myBtn" title="Go to top">Top</button> */}
        <div className="row no-gutters">
          <div className="col-md-6">
            <img src={readx.readpagenews.urlToImage} className="card-img" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title">{readx.readpagenews.title}</h3>
              <p>
                <small>{readx.readpagenews.author}</small>
              </p>
              <p>
                <small>{readx.readpagenews.publishedAt}</small>
              </p>
              <p className="card-text">{readx.readpagenews.description}</p>
              <p className="card-text">
                {readx.readpagenews.content}
                <a href={readx.readpagenews.url}>Click here to read</a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <br />
          <div className="row">
            {arraycomes.map((val, index) => {
              return (
                
                <div className="col-lg-3 col-md-4 col-sm-6" key={index} style={{minHeight:"400px"}}>
                  <div className="card" style={{ width: "16rem",  marginBottom:10}}>
                    <img
                      className="card-img-top"
                      src={arraycomes[index].urlToImage}
                      alt="Card image cap"
                      style={{height:"200px"}}
                    />
                    <div className="card-body" style={{height:"200px"}}>
                      <h5 className="card-title">{arraycomes[index].title}</h5>
                      <Link 
                           to={{
                            pathname: "/Readpage",
                            state: { readpagenews: arraycomes[index],
                                     arrpass:arraycomes
                                        }
                          }}
                          onClick={()=>topFunction()} 
                          >Read</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Readpage;
