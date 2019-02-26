import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './milligram.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const gameData = require('./gameData.json');

ReactDOM.render(<App eventName={gameData.eventName} generalLocation={gameData.generalLocation} questions={gameData.questions}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
