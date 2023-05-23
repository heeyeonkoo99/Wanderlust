import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import NavBar from './NavBar';


class Routing extends React.Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Main />} />
         
        </Routes>
      </Router>
    );
  }
}

export default Routing;