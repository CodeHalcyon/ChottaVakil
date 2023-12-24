import React from 'react'
import { CSSProperties } from 'react'


function AboutCards(props) {
  return (
    <>
        <div className="abt-cards">
            <h1>{props.heading}</h1>
            <p>{props.desc}</p>
            <img src={props.address} alt="" />
        </div>
    </>
  )
}

export default AboutCards
