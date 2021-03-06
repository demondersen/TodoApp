import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainProvider from './context/Context';

ReactDOM.render(
	<React.StrictMode>
		<MainProvider>
			<App />
		</MainProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
