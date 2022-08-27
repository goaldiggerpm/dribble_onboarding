import React, { useState, useEffect } from 'react'

import StepperCircle from '../../atoms/StepperCircle/StepperCircle'

/**
 * StepperBar component (molecule)
 * @param {int} no: integer to select specified circle i.e 1, 2, 3, 4
 * @param {function} IBaction: function to run on click of the button
 * @returns Custom StepperBar with passed properties for creating stepper progress bar
 */
function StepperBar({ index }) {

    const [mount, setMount] = useState(false)

    const [classNames, setclassNames] = useState({
        class1: "completed nearactive",
        class2: " ",
        class3: " ",
        class4: " "
    })

    /**
     * changeClassName function 
     * @param {int} index: integer to select specified circle i.e 1, 2, 3, 4
     * @returns Function to provide each steppercircle there classname according to there index given
     */
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

    /**
    * useEffect hook 
    * @param {index} index: integer to select specified circle i.e 1, 2, 3, 4
    * @dependency {index} 
    * @returns Its called on each time index is changed
    */
    useEffect(() => {
        if (!mount) {
            setMount(true);
            let no = index;
            changeClassName(no)
        }
    }, [index, mount]) // eslint-disable-next-line

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