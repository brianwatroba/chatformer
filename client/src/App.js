import React, { useRef, useState } from 'react';
import './App.css';
import { IonPhaser } from '@ion-phaser/react';
import ChatJump from './chatjump/main';

function App() {
	return (
		<div className="App">
			<IonPhaser game={ChatJump} initialize={true} />
		</div>
	);
}

export default App;
