//imr
import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';
import { BrowserRouter, Switch,Routes, Route } from 'react-router-dom';
//slr
const App = () => {
    return (

    <BrowserRouter>
 
       <Layout>
            <Routes>
                <Route exact path="/" element={Home} />
                <Route exact path="/login" element={Login} />
                <Route exact path="recovery-password" element={RecoveryPassword} />
                <Route element={NotFound} />
            </Routes>
        </Layout>
      
    </BrowserRouter>
    );
}

export default App;