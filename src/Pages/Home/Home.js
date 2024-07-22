import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../Hero/Hero'
import Footer from '../../components/Footer/Footer'
import Happiness from '../Happiness/Happiness'
import TarbeerSound from '../TakbeerSound/TakbeerSound'
import Family from '../Family/Family'
import Greeting from '../Greeting/Greeting'
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Happiness />
      <TarbeerSound />
      <Family />
      <Greeting />
      <Footer />
    </div>
  )
}

export default Home
