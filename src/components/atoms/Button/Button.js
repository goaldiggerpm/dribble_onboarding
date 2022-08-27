import React from "react";

/**
 * Button component (atom)
 * @param {string} text: specifies the name
 * @param {string} disable: specifies the mode to disable the button and removes the action
 * @param {function} action: function to run on click of the button
 * @returns Custom button with passed properties
 */
function Button(props) {

    return (
        <React.Fragment>
            {
                props.disable === true ?
                    <div className="button-box disabled"  >
                        <button className="main-button" >
                            {props.text}
                        </button>
                    </div>
                    :
                    <div className="button-box enabled" onClick={() => { props.action() }} >
                        <button className="main-button" >
                            {props.text}
                        </button>
                    </div>
            }
        </React.Fragment>

    );
}

export default Button;
