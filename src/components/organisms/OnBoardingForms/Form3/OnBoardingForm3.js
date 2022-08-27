import React, { useState, useEffect, useContext } from 'react'

// atoms

import MainButton from '../../../atoms/Button/Button.js'
import MainTitleLabel from '../../../atoms/TitleLabel/TitleLabel.js'
import MainLogoBox from '../../../atoms/LogoBox/LogoBox.js'

// molecules

import MainInputBox from '../../../molecules/InputBox/InputBox.js'
import MainStepperBar from '../../../molecules/StepperBar/StepperBar.js'
import CardChipSet from '../../../molecules/CardChipSet/CardChipSet.js'


// image 
import MyImage from '../../../../assets/images/person1.png'
import MyLogo from '../../../../assets/images/eden-logo(xl).png'

// data context

import DribbleContext from '../../../../utilities/DataContext'

function OnBoardingForm3() {

    const contextDribble = useContext(DribbleContext);


    const [btnDisable, setbtnDisable] = useState(false)
    const [selectedCard, setselectedCard] = useState("")

    // to check if any input is empty then disable the button
    useEffect(() => {
        if (selectedCard === "") {
            setbtnDisable(true)
        }
        else {
            setbtnDisable(false)
        }

    }, [selectedCard])

    // to pass the collected data into the main state in DataContext
    function callAction() {
        contextDribble.setchangeFormTo(4)
        contextDribble.setmainData({
            ...contextDribble.mainData,
            package: selectedCard
        })
    }

    OnBoardingForm3.defaultProps = {
        action: () => { console.log(null) },
    }


    return (
        <div className="OnBoardingForm3-main-container" >

            <MainLogoBox image={MyLogo} name={"Eden"} />
            <div className="progress-wrapper" >
                <MainStepperBar index={3} />
            </div>
            <MainTitleLabel heading={"Welcome! First things first..."} subheading={"You can always change them later."} />
            <CardChipSet getCard={setselectedCard} />
            <MainButton text={"Create Workspace"} action={callAction} disable={btnDisable} />
        </div>
    )
}

export default OnBoardingForm3
{/* <MainInputBox IBoption={true} IBlabelname={"Full name"} IBtype={"domain"} IBdomainname={"www.eden.com/"} IBplaceholdervalue={"Full name"} /> */ }