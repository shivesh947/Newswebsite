import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Mainpage from './components/mainpage';
import Category from './components/category';
import Readpage from './components/readpage';
import Weather from './components/weather';
import Categorynavbar from './components/categorynav';


import './App.css';
class App extends Component{
  state = {
    loading: false,
    newsdata: null,
  };
   componentDidMount() {
    try {
  const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7c642db6ea3547b584cb66c897422530";
    const response = await fetch(url);
    const data = await response.json();
    var newdata=JSON.stringify(data);
    this.setState({ newsdata: newdata, loading: true });
} catch(err) {
  alert(err); // Failed to fetch
}
    
  }
  render(){
    return(
      <BrowserRouter>
      <Navbar/>
      <Categorynavbar headlines={this.state.newsdata} />

      <div>
          {this.state.loding || !this.state.newsdata ? (
            <div>{console.log("loding")}</div>
          ) : ( 
            <div>
              <div>{console.log("loding done")}
            </div>
     
      <Switch>
        <Route path="/" exact render={()=><Mainpage headlines={this.state.newsdata}/>}/>
        <Route path="/Category" component={Category}/>
        <Route path="/Categorynavbar" render={()=><Categorynavbar headlines={this.state.newsdata}/>}/>
        <Route path="/Readpage" component={Readpage}/>
        <Route path="/weather" component={Weather}/>
      </Switch>
      </div>
          )}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
