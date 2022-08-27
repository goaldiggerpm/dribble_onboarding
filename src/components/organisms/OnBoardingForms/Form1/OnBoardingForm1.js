import React, { useState, useEffect, useContext } from 'react'

// atoms

import MainButton from '../../../atoms/Button/Button.js'
import MainTitleLabel from '../../../atoms/TitleLabel/TitleLabel.js'
import MainCardChip from '../../../atoms/CardChip/CardChip.js'
import MainLogoBox from '../../../atoms/LogoBox/LogoBox.js'

// molecules

import MainInputBox from '../../../molecules/InputBox/InputBox.js'
import MainStepperBar from '../../../molecules/StepperBar/StepperBar.js'


// image 
import MyImage from '../../../../assets/images/person1.png'
import MyLogo from '../../../../assets/images/eden-logo(xl).png'

// data context

import DribbleContext from '../../../../utilities/DataContext'



function OnBoardingForm1(props) {

    const contextDribble = useContext(DribbleContext);

    const [name, setname] = useState("")
    const [displayName, setdisplayName] = useState("")
    const [btnDisable, setbtnDisable] = useState(false)

    // to check if any input is empty then disable the button
    useEffect(() => {
        if (displayName === "" || name === "") {
            setbtnDisable(true)
        }
        else {
            setbtnDisable(false)
        }

    }, [name, displayName])

    function takeInput(data, data2, data3) { "" }

    // to pass the collected data into the main state in DataContext
    function callAction() {
        contextDribble.setchangeFormTo(2)
        contextDribble.setmainData({
            ...contextDribble.mainData,
            fullName: name,
            displayName: displayName,
        })
    }

    OnBoardingForm1.defaultProps = {
        action: () => { console.log(null) },
    }

    return (
        <div className="OnBoardingForm1-main-container" >

            <MainLogoBox image={MyLogo} name={"Eden"} />
            <div className="progress-wrapper" >
                <MainStepperBar index={1} />
            </div>
            <MainTitleLabel heading={"Welcome! First things first..."} subheading={"You can always change them later."} />
            <MainInputBox IBoption={false} IBlabelname={"Full name"} IBtype={"regular"} IBplaceholdervalue={"Steve Jobs"} takeNewValue={takeInput} setValue={setname} />
            <MainInputBox IBoption={false} IBlabelname={"Display name"} IBtype={"regular"} IBplaceholdervalue={"Steve"} takeNewValue={takeInput} setValue={setdisplayName} />
            <MainButton text={"Create Workspace"} action={callAction} disable={btnDisable} />
        </div>
    )
}

export default OnBoardingForm1