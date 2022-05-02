import React from 'react';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import CreateUsers from './Pages/Users/CreateUsers';
import ViewUsers from './Pages/Users/ViewUsers';
import EditUsers from './Pages/Users/EditUsers';
const Routes = () => {
    return (
        <Router >
            <Switch>
                <Route exact path="/" component={CreateUsers} />
                <Route exact path="/view-users" component={ViewUsers} />
                <Route exact path="/edit-user" component={EditUsers} />
            </Switch>
        </Router>
    );
};

export default Routes;