import React from 'react'
import { HashRouter as Router, Route , Redirect, Switch} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//BrowserRouter
import Index from '../components/Index'
import Writer from '../components/Writer'
import NoMatch from '../components/NoMatch'

//
export default (
    <Router basename='/blog'>
        <div>
            <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={3000}
                    transitionLeaveTimeout={3000}
                >
                <Switch>
                        <Route path="/" exact  component={Index} />
                        <Route path="/writer"  component={Writer} />

                        <Redirect from="*" to="/writer" />,
                        <Route component={NoMatch}/>
                </Switch>
            </ReactCSSTransitionGroup>
        </div>
    </Router>
)