import React from 'react'
import Styles from './Home.module.css'
import SlideShow from './SlideShow/SlideShow'
function Home() {
  return (
    <div className={Styles['container']}>

      <section id={Styles['hero']}>
        <SlideShow/>
      </section>

      <hr/>

      <section id={Styles['info-1']}>
        <ul id={Styles['list']}>
          <li className={Styles['items']}>
            <h3>blasd sd asd sda sd</h3>
            <p>
              ujbsd dsiouh a ashgd  dsadasda sd sdada 
            </p>
          </li>
          <div className={Styles['lines']}></div>
          <li className={Styles['items']}>
            <h3>blasd sd asd sda sd</h3>
            <p>
              ujbsd dsiouh a ashgd  dsadasda sd sdada 
            </p>
          </li>
          <div className={Styles['lines']}></div>
          <li className={Styles['items']}>
            <h3>blasd sd asd sda sd</h3>
            <p>
              ujbsd dsiouh a ashgd  dsadasda sd sdada 
            </p>
          </li>
        </ul>
      </section>

      <hr/>

      <section id='info-2'></section>

    </div>
  )
}

export default Home