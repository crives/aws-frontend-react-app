import React from 'react';
import './App.css';
import CardInterface from './components/CardInterface';
import SiteNav from './components/SiteNav';

function App() {

  return (
    <div className="container">
      <SiteNav/>
      <CardInterface/>
    </div>
  );
}

export default App;
