// import React from "react"
// import {Route} from "react-router-dom"
// import {withAuthenticationRequired} from "@auth0/auth0-react"
// import {Loading} from "./loading"

// export const PrivateRoute = ({component, ...args}) => (
//     <Route

//     components={withAuthenticationRequired(component, {
//         onRedirecting: () =><Loading />,
//     })}
//     {...args}
//     />
// );

// export default PrivateRoute;

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
 
// import {withAuthenticationRequired} from "@auth0/auth0-react"
 
// const PrivateRoute = ({ children, ...rest }) => {
//  const auth = withAuthenticationRequired();
 
//  return (
//    <Route
//      {...rest}
//      render={() => (auth.user ? children : <Redirect to='/login' />)}
//    ></Route>
//  );
// };
 
// export default PrivateRoute;


import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const PrivateRoute = () => (<div>Private</div>);

export default withAuthenticationRequired(PrivateRoute, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});