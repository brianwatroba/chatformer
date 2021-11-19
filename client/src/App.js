import React, { useEffect } from 'react';
import './App.css';
import Phaser from 'phaser';
import gameConfig from './chatjump/main';

function App() {
	useEffect(() => {
		new Phaser.Game(gameConfig);
	});
	return (
		<div
			className="App"
			style={{
				display: 'flex',

				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					flexDirection: 'row',
				}}
			>
				<div>Chat Jump!!</div>
				<div
					id="phaser-game"
					style={{
						display: 'flex',

						justifyContent: 'center',
					}}
				/>
				<div>Testing!!</div>
			</div>
		</div>
	);
}

export default App;
