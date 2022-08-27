import React from 'react'

function LogoBox({ image, name }) {
    return (
        <div className="logo-cointainer" >
            <img className="logo-img" src={image} alt="logo" />
            <p className="logo-name" >{name}</p>
        </div>
    )
}

export default LogoBox