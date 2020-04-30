import React from 'react';
import {render} from 'react-dom';
import App from './App'
import {BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";

import './index.less';

import { mainRouter } from './routes'




render(
    <Router>
        <Switch>
            <Route path='/admin'  render={(routerProps) => {
                return <App {...routerProps}/>
            }}/>
            {
                mainRouter.map(item => {
                    return <Route key={item.path} path={item.path} component={item.component} />
                })
            }

            <Redirect to="admin" from="/" exact/>
            <Redirect to="/404" />
        </Switch>

    </Router>,
    document.querySelector('#root')
)