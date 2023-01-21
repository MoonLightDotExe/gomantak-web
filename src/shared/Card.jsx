import React from 'react'

function Card({img, name, desc}) {
  return (
    <>
        <div className="card-contain">
            <div className="card__hero"> 
                <img src={img} alt="hero" className='hero'/>
            </div>
            <div className="card__desc">
                <span className="card--primary">{name}</span>
                <span className="card--secondary">{desc}</span>
            </div>
        </div>
    </>
  )
}

export default Card