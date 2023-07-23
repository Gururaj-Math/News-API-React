import React from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import News from './components/News'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

const App = () => {
  const[items, setItems]=useState([])
  const[active, setActive]=useState(1)
  const[category, setCategory]=useState("general")

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=239662c80ccd4e01a72488a2ab0002e2`)
    .then((res)=>res.json())
    .then(data=>setItems(data.articles))
  }, [category])

  return (
    <div>
      <Navbar />
      <div className='App'>
        <Menu active={active} setActive={setActive} setCategory={setCategory}/>
        <News items={items}/>
        <Footer />
      </div>
    </div>
  )
}

export default App
