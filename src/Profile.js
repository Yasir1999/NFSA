// import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
// import JSONPretty from 'react-json-pretty';
import { Container, Button } from 'react-bootstrap'




// const Profile = () => {

//   const { user, isAuthenticated, isLoading } = useAuth0();
  
//   // if (isLoading) {
//   //   return <div>Loading ...</div>;
//   // }

//   return (
    
//     isAuthenticated && ( 
//       <Container>
//      <div>
//        <h1 className="headingtext">Profile</h1>
//        <br></br>
//         <img src={user.picture} alt={user.name} />
//         <h2>Hello, {user.name}</h2>
//         <p>{user.email}</p>
//         <p>{user.role}</p>
//         <JSONPretty data={user} />
//         {/* {JSON.stringify(user, null, 2)} */}
//       </div>
//       </Container>
//     )
//   )
// }

// export default Profile 


import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isLoading  } = useAuth0();
  const { name, picture, email } = user;

    if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
          <Container>
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
          {/* <p>{user.name}</p> */}
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>

      </div>
    </div>
    <div>
      <Button href="/payment">Pay A Contract</Button>
    </div>
    </Container>
  );
};

// user.app_metadata.roles

export default Profile;