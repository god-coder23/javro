import React from 'react'
import Navbar from './components/Navbar'
import LeftContent from './components/LeftContent'
import RightSide from './components/RightSide'
import MiddlePage from './components/MiddlePage'
import HowWork from './components/HowWork'
import Mailus from './components/Mailus'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-row gap-10'>
        <LeftContent />
        <RightSide />
      </div>
      <MiddlePage />
      <HowWork />
      <Mailus />
    </div>
  )
}

export default App
