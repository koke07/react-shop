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
        <Switch>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="recovery-password" component={RecoveryPassword} />
                <Route component={NotFound} />
            </Layout>
        </Switch>
    </BrowserRouter>
    );
}

export default App;