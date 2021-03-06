import React from 'react';
import logo from './logo.svg';
import './App.css';
import RenderingElements from './rendering-elements';
import HandlingEvent from './handling-event';
import HandleEventExample from './handling-event/example';
import State from './state';
import ListKey from './list-keys';
import Car from './car';
import ListMovie from './list-movie';
import Props from './props';
import LiftingStateUpCart from './lifting-state-up';

function App() {
	return (
		<div className="App">
			{/* <RenderingElements />
			<hr />
			<HandlingEvent />
			<hr />
			<HandleEventExample />
			<hr />
			<State />
			<hr />
			<ListKey /> */}
			{/* <Car /> */}
			{/* <ListMovie /> */}
			{/* <Props/> */}
			<LiftingStateUpCart/>
		</div>
	);
}

export default App;
