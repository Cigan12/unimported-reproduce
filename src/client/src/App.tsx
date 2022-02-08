import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainView } from 'views/Main/Main.view';

export const App: React.FC = () => (
    <div>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <MainView />
                </Route>
            </Switch>
        </Router>
    </div>
);
