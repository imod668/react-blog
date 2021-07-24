import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.css';
import Nav from './components/nav';
import Home from './components/home';
import Wallpaper from './components/wallpaper';
import Contact from './components/contact';
import Error from './components/error';
import Description from './components/description';


function App() {
  return (
	<Router>
		<div className="app">
			<Nav />
			<Switch>
				<Route exact path="/"> 
					<Home /> 
				</Route>
				<Route path="/wallpaper">
					<Wallpaper />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/mota/:idParams/:ten.html">
					<Description />
				</Route>
				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</div>
	</Router>
  );
}


export default App;
