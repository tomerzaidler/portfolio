import React from 'react';
import Header from './Header';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Cv from './sections/Cv';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
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
