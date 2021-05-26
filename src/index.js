import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Auth0ProviderWithHistory } from './auth0-provider-with-history';



ReactDOM.render(
  <Auth0ProviderWithHistory>
    <App />
  </Auth0ProviderWithHistory>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
