import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Container from './elements/Container';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ListExpenses from './components/ListExpenses';
import ExpensesByCategory from './components/ExpensesByCategory';
import EditExpenses from './components/EditExpenses';
import {Helmet} from "react-helmet";
import favicon from './imagenes/logo.png';
import Background from './elements/Background';
import {AuthProvider} from './contexts/AuthContext';
import {TotalExpensedProvider} from './contexts/TotalExpensedByMonthContext';
import PrivateRoute from './components/PrivateRoute';

WebFont.load({
    google: {
        families: ['Work Sans:400,500,700', 'sans-serif']
    }
});

const Index = () => {
    return ( 
        <> 
            <Helmet>
                <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            </Helmet>
            <AuthProvider>
                <TotalExpensedProvider >
                    <BrowserRouter>
                        <Container >
                            <Switch>
                                <Route path="/log-in" component={Login} />
                                <Route path="/sign-up" component={Signup} />
                                <PrivateRoute path="/categories">
                                    <ExpensesByCategory />
                                </PrivateRoute>
                                <PrivateRoute path="/list">
                                    <ListExpenses />
                                </PrivateRoute>
                                <PrivateRoute path="/edit/:id">
                                    <EditExpenses />
                                </PrivateRoute>
                                <PrivateRoute path="/">
                                    <App />
                                </PrivateRoute>
                            </Switch>
                        </Container>
                    </BrowserRouter>
                </TotalExpensedProvider>
            </AuthProvider>
            <Background />
        </>
    );
}

ReactDOM.render( <Index /> , document.getElementById('root'));