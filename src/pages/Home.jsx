import React from 'react'
import CarouselTop from '../components/CarouselTop'
import FooterHome from '../components/FooterHome'
import NavBar from '../components/NavBar'
import ProdectCard from '../components/ProdectCard'

const Home = () => {
  return (
    <>
        <NavBar/>
        <CarouselTop/>
        <ProdectCard/>
        <FooterHome/>
    </>
  )
}

export default Home