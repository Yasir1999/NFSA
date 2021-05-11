// import "./App.css";
// import styled from "styled-components";
// import { AccountBox } from "./components/accountBox";

// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// function App() {
//   return (
//     <AppContainer>
//       <AccountBox />
//     </AppContainer>
//   );
// }

// export default App;



import './App.css';
import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Charges } from './components/Charges';
import { AccessRestrictions } from './components/AccessRestrictions';
import { Help } from './components/Help';
import { NoMatch } from './components/NoMatch';
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";



const AppContainer = styled.div`
  width: 200%;
  height: 200%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



class App extends Component {



  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }










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
              <Route path="/login" component={AccountBox} />
              <Route path="/charges" component={Charges} />

              <Route component={NoMatch} />
            </Switch>
          </Router>
        </React.Fragment>
        </>
      );
}
}








export default App;
