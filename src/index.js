import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import registerServiceWorker from './tools/registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import App from './containers/App';
import companyStore from './stores/companyStore';

const stores = {
  companyStore
};

const app = (
	<Provider {...stores}>
		<BrowserRouter>
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
