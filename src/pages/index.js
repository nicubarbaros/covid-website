import React from "react"
import HomeBanner from "../components/HomeBanner"
import "../styles/home.scss"
import Footer from "../components/Footer"
import Carousel from "../components/Slider"
const slideData = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
  }
]
export default () => (
  <div className="page-wrapper">
    <HomeBanner />
    <Carousel />
    <Footer/>
  </div>
)
