import React, { useRef, useState } from 'react';
import './App.css';
import { IonPhaser } from '@ion-phaser/react';
import ChatJump from '../../src/main';

function App() {
	return (
		<div className="App">
			<div>Chat Jump</div>
			<IonPhaser game={ChatJump} initialize={true} />
		</div>
	);
}

export default App;
