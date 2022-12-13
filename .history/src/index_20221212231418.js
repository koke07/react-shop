//import React from 'react';
//import ReactDom from 'react-dom';
//import App from './routes/App'


//ReactDom.render(<App/>,document.getElementById('App'));


//import React from 'react';
//import { createRoot } from 'react-dom/client';
//import App from './routes/App'

//const container = document.getElementById('App');
//const root = createRoot(container);
//root.render(<App/>);



import React from 'react';
import {StrictMode} from 'react';
import App from './routes/App';
import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('App');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
