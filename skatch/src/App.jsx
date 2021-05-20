import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Gettingstarted from './Gettingstarted';
import Alert from './Alert';
import Badge from './Badge';
import Button from './Button';
import Card from './Card';
import Footer from './Footer';
import NavBar from './NavBar';

function App(){
    return (
        <React.Fragment>
            <Header/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/gettingstarted" component={Gettingstarted}/>
            <Route exact path="/alert" component={Alert}/>
            <Route exact path="/badge" component={Badge}/>
            <Route exact path="/button" component={Button}/>
            <Route exact path="/card" component={Card}/>
            <Route exact path="/footer" component={Footer}/>
            <Route exact path="/navbar" component={NavBar}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;