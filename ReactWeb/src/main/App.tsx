//import { useState } from 'react'

import HouseList from '../house/HouseList'
import './App.css'
import Header from './Header'

function App() {

  return (
    //container is a bootstrap class that will serve as container
    //for the rest of the layout
    <div className="container">
      <Header subtitle="Providing houses all over the world"/>
      <HouseList />
    </div>
   )
}

export default App
