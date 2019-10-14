import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, id_user = localStorage.getItem('id_user'), ...rest }) => (
    <div>
        <Route
            {...rest}
            render={ props => (id_user == 'null') ? <Redirect to="/login" /> : <Component {...props}/> }
        />
    </div>
);

export default PrivateRoute;