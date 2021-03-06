import React from 'react';
import Header from './Header';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from '../history';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Cv from './sections/Cv';
import Snow from './Snow';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Snow />
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to="/home" />} />
                            <Route path="/home" exact component={Home} />
                            <Route path="/about" exact component={About} />
                            <Route path="/Skills" exact component={Skills} />
                            <Route path="/cv" exact component={Cv} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
