import React from 'react'
import Navbar from './components/Navbar'
import Tasks from './components/Tasks'

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Tasks />
    </React.Fragment>
  )
}

export default App