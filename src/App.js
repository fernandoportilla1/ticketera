import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from './header/Header';
import Footer from './footer/Footer';
import Login from './auth/Login'
import Logout from './auth/Logout'


function Index() {

  return (
    <Mensaje>
      <h1> PROVEDATOS TICKETERA </h1>
    </Mensaje>
  )

}

function Mensaje(props) {
  return (
    <div>
      <h1>{props.mensaje}</h1>
      {props.children}
    </div>
  )

}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Index} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
