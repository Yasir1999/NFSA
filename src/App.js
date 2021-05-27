// import "./App.css";
// import styled from "styled-components";
// import { AccountBox } from "./components/accountBox";
// import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";
// import Profile from "./Profile";
// import Auth0ProviderWithHistory from './auth0-provider-with-history';

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
//     <Auth0ProviderWithHistory>
//       <LoginButton />
//       <LogoutButton />
//       <Profile />
//     </Auth0ProviderWithHistory> 
//      );
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
// import { AccountBox } from "./components/accountBox";
import { LoginButton } from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./Profile";
import  Loading from "./components/loading"
import Auth0ProviderWithHistory from './auth0-provider-with-history';
// import isloading from "./assets/loading.svg";
import PrivateRoute from "./components/private-route"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Card from "./components/Card"

const AppContainer = styled.div`
  width: 200%;
  height: 200%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const {
//   isLoading,
//   isAuthenticated,
//   error,
//   user,
//   loginWithRedirect,
//   logout,
// } = useAuth0();

const ProtectedRoute = ({ component, ...args }) => (  
  <Route component={withAuthenticationRequired(component)} {...args} />
);

// const { isLoading } = useAuth0();
  
//   if (isLoading) {
//      <div>Loading ...</div>;
//   }

class App extends Component {

// const App =() =>{
//   const = {isLoading} = useAuth0()
//   if (isLoading) {
//    return <Loading/>;
//   }
// }


  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }









  render () {
    // if (isAuthenticated) {
    return (
      <>
      <Auth0ProviderWithHistory>
        <Navigation />
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/help" component={Help} />
              <Route path="/accessrestrictions" component={AccessRestrictions} />
              <Route path="/login" component={LoginButton} />
              <Route path="/logout" component={LogoutButton} />
              <ProtectedRoute path="/profile" component={Profile} />
              <Route path="/charges" component={Charges} />
              <Route path="/card" component={Card} />

              <Route component={NoMatch} />
            </Switch>
          </Router>
        </React.Fragment>
        </Auth0ProviderWithHistory>
        </>
      );
}
}
// }








export default App;
