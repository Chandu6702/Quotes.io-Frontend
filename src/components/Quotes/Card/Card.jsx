import React from 'react'
import Styles from './Card.module.css'

function Card({text}) {
return (
    <div className={Styles['container']}>
        {text}
    </div>
)
}

export default Card