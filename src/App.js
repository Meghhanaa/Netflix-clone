import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from './components/Banner';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import List from './components/List';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path='/' element={
        <React.Fragment>
          <Header></Header>
          <HomeBanner></HomeBanner>
        </React.Fragment>
      } />
      <Route path='/register' element={
        <React.Fragment>
          <Header></Header>
          <Login/>
        </React.Fragment>
      } />
      <Route path='/login' element={
        <React.Fragment>
          <Header></Header>
          <Login page={true}/>
        </React.Fragment>
      } />
      <Route path='/register' element={
        <React.Fragment>
          <Header></Header>
          <Login page={false}/>
        </React.Fragment>
      } />
      <Route path='/dashBoard' element={
        <React.Fragment>
          {/* <Header></Header> */}
          <Banner/>
          <List title="Netflix Originals" param="originals"/>
          <List title="Trending Now" param="trending"/>
          <List title="Now Playing" param="now_playing"/>
          <List title="popular" param="popular"/>
          <List title="Top Rated" param="top_rated"/>
          <List title="Upcoming" param="upcoming"/>
        </React.Fragment>
      } />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
