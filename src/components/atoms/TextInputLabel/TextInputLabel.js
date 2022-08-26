import React from 'react'

function TextInputLabel({ option, labelname }) {

    return (
        <div className="labelBox">
            <p className="label" >
                {labelname}
            </p>
            {
                option === true ?
                    <p className="label blur" >&#40;&#32;optional&#32;&#41;</p>
                    :
                    <></>
            }
        </div>
    )
}

export default TextInputLabel