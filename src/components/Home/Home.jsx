import React from 'react'
import Styles from './Home.module.css'
import SlideShow from './SlideShow/SlideShow'
function Home() {
  return (
    <div className={Styles['container']}>
      <section id='hero'>
        <SlideShow/>
      </section>
      <section id='info-1'></section>
      <section id='info-2'></section>
    </div>
  )
}

export default Home