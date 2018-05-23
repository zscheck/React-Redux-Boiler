// Import dependencies
import React from 'react';
import { render } from 'react-dom';

// Import Root App
import App from './app';

// Import stylesheet
import style from '../scss/main.scss';


// Render to app nodeName ID on HTML
render (
    <App />,
    document.getElementById("app")
);