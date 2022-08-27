import React from 'react'

/**
 * TextChip component (atom)
 * @param {string} icon: string specifies the source of icon
 * @param {string} headline: text to display on headline
 * @param {string} description: text to display on description
 * @param {function} action: function to run on click of the button
 * @returns Custom TextChip with passed properties
 */
function TextChip(props) {
    return (
        <div className="chipHolder" onClick={() => props.select(props.name)} >
            <img className="chip image" src={props.icon} alt="icon" />
            <p className="chip text headline" >
                {props.headline}
            </p>
            <p className="chip text description" >
                {props.description}
            </p>
        </div>
    )
}

export default TextChip