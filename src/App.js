import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {adminRouter} from './routes'
import {Frame} from './components'

class App extends Component {
    render() {
        return (
            <Frame menu={[...adminRouter]}>
                <Switch>
                    {
                        adminRouter.map(item => {
                            return <Route key={item.path} path={item.path} render={(routerProps) => {
                                return <item.component {...routerProps}/>
                            }} />
                        })
                    }

                    <Redirect to={adminRouter[0].path} from='/admin' exact/>
                    <Redirect to='/404' />
                </Switch>
            </Frame>
        );
    }
}

export default App;

