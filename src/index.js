import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from "./store/provider";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider story={<App />} />, document.getElementById('root'));
registerServiceWorker();
