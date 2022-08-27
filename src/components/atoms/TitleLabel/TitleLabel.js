import React from 'react'
/**
 * TitleLabel component (atom)
 * @param {string} heading: string specifies the heading atom to change its behaviour accordingly 
 * @param {string} subheading: string specifies the subheading atom to change its behaviour accordingly 
 * @param {function} action: function to run on click of the button
 * @returns Custom TitleLabel with passed properties for stepperbar
 */
function TitleLabel({ heading, subheading }) {
    return (
        <div className="titleBox" >
            <p className="title heading" >{heading}</p>
            <p className="title subheading" >{subheading}</p>
        </div>
    )
}

export default TitleLabel