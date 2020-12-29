import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation.js';
import SearchBar from './components/search/SearchBar.js';
import './App.css';
import Sales from './components/sales/Sales.js';
import Notifications from './components/notifications/Notifications.js';
import Notepad from './components/notepad/Notepad.js';
import Inbox from './components/inbox/Inbox.js';
import Graph from './components/graph/Graph.js';
import ThisMonth from './components/this/ThisMonth.js';
import LastMonth from './components/this/LastMonth.js';
import NoteBook from './components/notebook/NoteBook.js';
class App extends Component {
	constructor(){
		super()
		this.state={
			route:'desktop'
		}
	}
	onRouteChange=()=>{
		this.setState({route:'notepad'})
	}
	render(){
        return (
		    <div className="App">
			        <Navigation/>
			        {  this.state.route === 'desktop'
			        ?
			        <div>
			        <SearchBar/>
			        <Sales/>
			        <Notifications/>
			        <div className='Note'>
					    <Notepad onRouteChange={this.onRouteChange}/>
					    <div>
						    <Graph/>
						    <Inbox/>
					    </div>
					    <div className='monthlyPerformance'>
					        <ThisMonth/>
					        <LastMonth/>    
					    </div>
				    </div>
				    <div className='last'>
				    </div>
				   </div>
				   :
			     <NoteBook/>
			 }
			</div>
  );
	}
}

export default App;
