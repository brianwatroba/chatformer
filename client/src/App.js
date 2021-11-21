import React, { useEffect } from 'react';
import Phaser from 'phaser';
import gameConfig from './phaser/gameConfig';

function App() {
	useEffect(() => {
		new Phaser.Game(gameConfig);
	}, []);

	// ugly inline styling until we decide on style system
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
				id="phaser-game"
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			/>
		</div>
	);
}

export default App;
