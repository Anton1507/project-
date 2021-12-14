import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Main from './components/main/main.jsx';
import Modal  from './components/modal/modal'
import { useSelector } from 'react-redux';


const App = () => {
  const modal =useSelector(stat=>stat.app.modal);

  return (
    <div className="app-wrapper">
      {modal ? <div><Modal/></div> : null}
      <div className="header"> <Header /></div>
      
      <div className="main"> <Main /></div>

    </div>
  );
}

export default App;
