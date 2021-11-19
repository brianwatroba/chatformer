import React, { useRef, useState } from 'react';
import './App.css';
import { IonPhaser } from '@ion-phaser/react';
import ChatJump from './chatjump/main';

function App() {
	return (
		<div
			className="App"
			style={{
				display: 'flex',
				flexDirection: 'row',
			}}
		>
			<div>Chat Jump!!</div>
			<IonPhaser
				game={ChatJump}
				initialize={true}
				style={{ position: 'absolute', top: 10 }}
			/>
		</div>
	);
}

export default App;
