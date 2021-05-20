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
            <Route exact path="/skatch" component={Home}/>
            <Route exact path="/skatch/gettingstarted" component={Gettingstarted}/>
            <Route exact path="/skatch/alert" component={Alert}/>
            <Route exact path="/skatch/badge" component={Badge}/>
            <Route exact path="/skatch/button" component={Button}/>
            <Route exact path="/skatch/card" component={Card}/>
            <Route exact path="/skatch/footer" component={Footer}/>
            <Route exact path="/skatch/navbar" component={NavBar}/>
            <Route exact path="/skatch/popup" component={Popup}/>
            <Route exact path="/skatch/toast" component={Toast}/>
            <Route exact path="/skatch/tooltip" component={Tooltip}/>
            <Route exact path="/skatch/form" component={Form}/>
            <Route exact path="/skatch/commingsoon" component={Commingsoon}/>
            <Route  component={Error}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;