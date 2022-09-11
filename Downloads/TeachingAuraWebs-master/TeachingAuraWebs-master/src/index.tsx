import React from 'react';
import ReactDOM from 'react-dom';
import AllRoutes from './InstituteFlow/AllRoutes';
import reportWebVitals from './reportWebVitals';
import { appContainer } from './inversify.config';
import { Provider } from 'inversify-react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/fonts/roboto/index.css';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider container={appContainer}>
			<AllRoutes />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
