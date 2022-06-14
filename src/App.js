import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

class App extends Component {
  render() {
    return (
      <GoogleOAuthProvider clientId="960591633064-bf9k86c616cfe1fbvkod9cd2r0qg6orl.apps.googleusercontent.com">
        <div className="App">
          <Navbar dark color="primary ">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          ;
        </div>
      </GoogleOAuthProvider>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
