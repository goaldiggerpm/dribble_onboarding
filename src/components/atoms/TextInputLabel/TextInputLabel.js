import React from 'react'
/**
 * StepperCircle component (atom)
 * @param {string} labelname: string specifies the label name of the input box
 * @param {boolean} option: integer to select specified input is optional or not i.e true, false
 * @param {function} action: function to run on click of the button
 * @returns Custom TextInputLabel with passed properties for stepperbar
 */
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
                    null
            }
        </div>
    )
}

export default TextInputLabel