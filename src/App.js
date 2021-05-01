import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Components/Signin';
import Footer from './Components/Footer';
import Front from './Components/Front';
import Dashboard from './Components/Dashboard';
import Corousel from './Components/Corousel';
import Cardtype from './Components/Card';
import Movies from './Components/Movies';
import Webseries from './Components/Webseries';


 
class App extends Component {
  constructor(){
   super();
   this.state ={
    route: 'front',
    sgnin: false
   }
  }
  onRouteChange = (route) => {
    if (route === 'dashboard') {
      this.setState({sgnin: false})
    }
    else {
      this.setState({sgnin: true})
    }
    this.setState({route: route})
  }

  render(){
    return (
    <div className="App">
      { this.state.route === 'dashboard'
          ?
          <div>
              <Navbar onRouteChange={this.onRouteChange}/>
              <Corousel />
              <Cardtype />
              <Movies />
              <Webseries />
          </div>
          :
          ( this.state.route === 'login'
            ?
            <Signin onRouteChange={this.onRouteChange} />
            :
            <Front onRouteChange={this.onRouteChange}/>
          )            
      } 
      <Footer/>
    </div>
  );
  }
}

export default App;
