import React from 'react'

function TextChip({ icon, headline, description }) {
    return (
        <div className="chipHolder" >
            <img className="chip image" src={icon} alt="icon" />
            <p className="chip text headline" >
                {headline}
            </p>
            <p className="chip text description" >
                {description}
            </p>
        </div>
    )
}

export default TextChip