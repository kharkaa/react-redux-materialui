import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './pages/Home';

export default function Routes() {
    return (
        <Router>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
        </Router>
    );
}