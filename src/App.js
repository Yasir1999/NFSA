//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Charges } from './components/Charges';
import { AccessRestrictions } from './components/AccessRestrictions';
import { Help } from './components/Help';
import { NoMatch } from './components/NoMatch';
import { Login } from './components/Login';
import ItemManager from './components/ItemManager';
import ItemPayment from './components/ItemPayement';
import IPFS from './components/UploadIPFS';



class App extends Component {
  render () {
    return (
      <>
        <Navigation />
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/help" component={Help} />
              <Route path="/accessrestrictions" component={AccessRestrictions} />
              <Route path="/login" component={Login} />
              <Route path="/charges" component={Charges} />
              <Route path="/contracts" component={ItemManager} />
              <Route path="/payment" component={ItemPayment} />
              <Route path="/ipfs" component={IPFS} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </React.Fragment>
        </>
      );
}
}

export default App;
