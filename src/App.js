import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default class App extends Component {
  // c = "Ravi Maurya";
  render() {

    return (
      <div>
       <Navbar/>
       <Router>
          <Routes>
            <Route exact path="/general" element={<News page={5} country="in" category="general"/>}></Route>
            <Route exact path="/business" element={<News page={5} country="in" category="business"/>}></Route>
            <Route exact path="/sports" element={<News page={5} country="in" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News page={5} country="in" category="technology"/>}></Route>
            <Route exact path="/health" element={<News page={5} country="in" category="health"/>}></Route>
            <Route exact path="/science" element={<News page={5} country="in" category="science"/>}></Route>
            <Route exact path="/entertainment" element={<News page={5} country="in" category="entertainment"/>}></Route>
            {/* <Route exact path="/" element={<News page={5} country="in" category="general"/>}></Route> */}
          </Routes>
      </Router>
      </div>
    )
  }
}