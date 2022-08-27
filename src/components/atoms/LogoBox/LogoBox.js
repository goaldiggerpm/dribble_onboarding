import React from 'react'

/**
 * LogoBox component (atom)
 * @param {string} image: string specifies the source of icon
 * @param {string} name: text to display on name
 * @param {function} action: function to run on click of the button
 * @returns Custom LogoBox with passed properties
 */
function LogoBox({ image, name }) {
    return (
        <div className="logo-cointainer" >
            <img className="logo-img" src={image} alt="logo" />
            <p className="logo-name" >{name}</p>
        </div>
    )
}

export default LogoBox