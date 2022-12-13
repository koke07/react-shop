import React from 'react';
import ReactDom from 'react-dom';
import App from './routes/App'
import { ReactDOM } from 'react';


//ReactDom.render(<App/>,document.getElementById('App'));

const root = ReactDom.createRoot(
    document.getElementById("App")
);
root.render(<App tab="home" />);