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


function OnBoardingForm2() {

    const contextDribble = useContext(DribbleContext);


    const [name, setname] = useState("")
    const [url, seturl] = useState("")
    const [btnDisable, setbtnDisable] = useState(false)

    useEffect(() => {
        if (url === "" || name === "") {
            setbtnDisable(true)
        }
        else {
            setbtnDisable(false)
        }

    }, [name, url])

    function callAction() {
        contextDribble.setchangeFormTo(3)
        contextDribble.setmainData({
            ...contextDribble.mainData,
            homeFullName: name,
            workspaceUrl: url,
        })
    }

    OnBoardingForm2.defaultProps = {
        action: () => { console.log(null) },
    }

    return (
        <div className="OnBoardingForm2-main-container" >

            <MainLogoBox image={MyLogo} name={"Eden"} />
            <div className="progress-wrapper" >
                <MainStepperBar index={2} />
            </div>
            <MainTitleLabel heading={"Let's set up a home for all your work"} subheading={"You can always create another workspace later."} />
            <MainInputBox IBoption={false} IBlabelname={"Full name"} IBtype={"regular"} IBplaceholdervalue={"Steve Jobs"} setValue={setname} />
            <MainInputBox IBoption={true} IBlabelname={"Workspace URL"} IBtype={"domain"} IBdomainname={"www.eden.com/"} IBplaceholdervalue={"Example"} setValue={seturl} />
            <MainButton text={"Create Workspace"} action={callAction} disable={btnDisable} />
        </div>
    )
}

export default OnBoardingForm2
{/* <MainCardChip icon={MyImage} headline={"For myself"} description={"Write better. Think more clearly. Stay organized"} /> */ }