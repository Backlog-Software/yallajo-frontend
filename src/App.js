import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";

// import axios from 'axios';
// import Blogs from './components/Blogs'
// import Citycomponent from './components/LandingPage/LoggedIN/mainComponents/Citycomponent';
// import AuthButtons from './components/user/AuthButtons';
// import { MDBRow } from 'mdb-react-ui-kit';
// import Header from './components/LandingPage/loggedOut/Header'
// import MainLoggedOut from './components/LandingPage/loggedOut/MainLoggedOut';
// import { useAuth0 } from '@auth0/auth0-react';
// import Profile from './components/user/Profile';
// import Test from './components/test';
// import LoginButton from './components/user/LoginButton';
import BlogPost from './components/BlogPost';

function App() {

  return (
    <>
      {/* <LandingPage /> */}
      {/* <Blogs /> */}
      <BlogPost />
    </>
  );
}

export default App;
