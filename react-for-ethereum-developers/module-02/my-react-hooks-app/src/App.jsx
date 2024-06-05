import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>

    </div>
  );
}

export default App
