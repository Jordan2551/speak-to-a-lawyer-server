import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navigation-bar/navigation-bar';

import Homepage from './pages/home/homepage';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <NavigationBar/>
      <Homepage/>
      <Footer/>
    </>
  );
}

export default App;
