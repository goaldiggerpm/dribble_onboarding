import React from 'react'

/**
 * StepperCircle component (atom)
 * @param {string} name: string specifies the class name of the atom to change its behaviour accordingly 
 * @param {int} no: integer to select specified circle i.e 1, 2, 3, 4
 * @param {function} action: function to run on click of the button
 * @returns Custom StepperCircle with passed properties for stepperbar
 */
function StepperCircle({ name, no }) {
    return (
        <div className={`stepper-item ${name}`}>
            <div className="step-counter">{no}</div>
        </div>
    )
}

export default StepperCircle