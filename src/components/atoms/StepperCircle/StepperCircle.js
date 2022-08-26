import React from 'react'

function StepperCircle({ name, no }) {
    return (
        <div className={`stepper-item ${name}`}>
            <div className="step-counter">{no}</div>
        </div>
    )
}

export default StepperCircle