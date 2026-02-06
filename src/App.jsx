import { useState } from 'react'

import './App.css'
import Section from './components/section/section1.jsx'
import Section2 from './components/section2/section2.jsx'
import Section3 from './components/section3/section3.jsx'
import Section4 from './components/section4/Section4.jsx'
import Section5 from './components/section5/section5.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
    </>
  )
}

export default App
