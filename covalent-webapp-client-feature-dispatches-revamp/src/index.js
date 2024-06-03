/*
 * Copyright 2022 Agnostiq Inc.
 * Note: This file is subject to a proprietary license agreement entered into between
 * you (or the person or organization that you represent) and Agnostiq Inc. Your rights to
 * access and use this file is subject to the terms and conditions of such agreement.
 * Please ensure you carefully review such agreements and, if you have any questions
 * please reach out to Agnostiq at: [support@agnostiq.com].
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';

const app = (
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				{/* <Elements stripe={stripePromise()} options={options}> */}
				<App />
				{/* </Elements> */}
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
