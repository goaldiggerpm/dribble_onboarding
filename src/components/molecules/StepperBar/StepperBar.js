import React, { useState, useEffect } from 'react'

import StepperCircle from '../../atoms/StepperCircle/StepperCircle'

function StepperBar({ index }) {

    const [mount, setMount] = useState(false)

    const [classNames, setclassNames] = useState({
        class1: "completed nearactive",
        class2: " ",
        class3: " ",
        class4: " "
    })

    const changeClassName = (index) => {
        switch (index) {
            case 1:
                setclassNames({
                    ...classNames,
                    class1: "completed nearactive",
                    class2: " ",
                    class3: " ",
                    class4: " "
                })
                break;
            case 2:
                setclassNames({
                    ...classNames,
                    class1: "completed ",
                    class2: "completed nearactive",
                    class3: " ",
                    class4: " "
                })
                break;
            case 3:
                setclassNames({
                    ...classNames,
                    class1: "completed ",
                    class2: "completed ",
                    class3: " completed nearactive",
                    class4: "  "
                })
                break;
            case 4:
                setclassNames({
                    ...classNames,
                    class1: "completed ",
                    class2: "completed ",
                    class3: "completed ",
                    class4: "completed "
                })
                break;
            default:
                setclassNames({
                    ...classNames,
                    class1: "completed nearactive",
                    class2: " ",
                    class3: " ",
                    class4: " "
                })
                break;
        }
    }

    useEffect((index) => {
        if (!mount) {
            setMount(true);
            changeClassName(index)
        }
    }, [index, mount])

    return (
        <div className="stepper-wrapper">
            <StepperCircle name={classNames.class1} no={1} />
            <StepperCircle name={classNames.class2} no={2} />
            <StepperCircle name={classNames.class3} no={3} />
            <StepperCircle name={classNames.class4} no={4} />
        </div>
    )
}

export default StepperBar