import React from 'react'

/**
 * ImageHolder component (atom)
 * @param {string} srcfile: string specifies the source of icon i.e /assets/images/filename
 * @param {function} action: function to run on click of the button
 * @returns Custom Icon with passed properties
 */
function ImageHolder({ srcfile }) {
    return (
        <div className="imageholder-box" >
            <img src={srcfile} alt="image" />
        </div>
    )
}

export default ImageHolder