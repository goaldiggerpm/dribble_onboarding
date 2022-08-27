import React from 'react'

function ImageHolder({ srcfile }) {
    return (
        <div className="imageholder-box" >
            <img src={srcfile} alt="image" />
        </div>
    )
}

export default ImageHolder