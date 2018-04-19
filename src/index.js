import './assets/stylesheets/styles.scss';

import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import { Provider } from 'react-redux'; //Glue for react and redux
import Store from './Store'; //redux state store, actas as prop for Provider tag
import App from './app/App.jsx'; // import the main app component
import './assets/stylesheets/styles.scss'; 

ReactDOM.render(
<Provider store={Store}> { /*Glue for react and redux */ }
	<App /> { /* Render our App component */}
</Provider>,
document.getElementById('root')
); 
