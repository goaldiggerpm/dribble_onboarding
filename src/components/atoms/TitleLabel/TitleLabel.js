import React from 'react'

function TitleLabel({ heading, subheading }) {
    return (
        <div className="titleBox" >
            <p className="title heading" >{heading}</p>
            <p className="title subheading" >{subheading}</p>
        </div>
    )
}

export default TitleLabel