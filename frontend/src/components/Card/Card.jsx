import React from 'react'
import './Card.css'

const Card = ({ title, description }) => {
    return (
        <>
            <div className="card-container">
                <div className="card-title">{title}</div>
                <div className="card-description">{description}</div>
            </div>
        </>
    )
}

export default Card