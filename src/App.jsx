import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Main from './components/3-projects/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'


function App() {
  useEffect(() => {
    window.addEventListener("scroll",() => {
      if(window.scrollY > 300){
        setScrollBTN(true)
      }else{setScrollBTN(false)}
    })
  }, []);
  const [ScrollBTN, setScrollBTN] = useState(false)
  
  return (
    <div className='container'>
      <Header/>
      <Hero/>
      <div className='divider'/>
      <About/>
      <div className='divider'/>
      <Main/>
      <div className='divider'/>
      <Contact/>
      <div className='divider'/>
      <Footer/>
      
      <a  className='icon-arrow-up' style={{opacity: ScrollBTN ? 1 : 0}} href="#header"></a>
    </div>
  )
}

export default App
