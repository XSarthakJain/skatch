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
import Popup from './Popup';
import Toast from './Toast';
import Tooltip from './Tooltip';
import Form from './Form';
import Error from './Error';
import Commingsoon from './Commingsoon';

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
            <Route exact path="/popup" component={Popup}/>
            <Route exact path="/toast" component={Toast}/>
            <Route exact path="/tooltip" component={Tooltip}/>
            <Route exact path="/form" component={Form}/>
            <Route exact path="/commingsoon" component={Commingsoon}/>
            <Route  component={Error}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;