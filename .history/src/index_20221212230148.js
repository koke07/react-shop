import React from 'react';
import ReactDom from 'react-dom';
import App from './routes/App'


//ReactDom.render(<App/>,document.getElementById('App'));

const root = ReactDom.createRoot(
    document.getElementById("app")
);
root.render(<App tab="home" />);