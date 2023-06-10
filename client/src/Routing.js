import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../src/pages/Main/Main";
//"./pages/Main/Main";
import NavBar from '../src/NavBar';


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