import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navigation-bar/navigation-bar';

import Homepage from './pages/home/homepage';

function App() {
  return (
    <>
      <NavigationBar/>
      <Homepage/>
    </>
  );
}

export default App;
