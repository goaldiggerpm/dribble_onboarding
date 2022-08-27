import React from "react";


const Button = ({ text }) => {

    return (
        <div className="button-box" >
            <button className="main-button" >
                {text}
            </button>
        </div>
    );
}

export default Button;
