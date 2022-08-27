import React, { useState } from 'react'

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


function OnBoardingForm2() {
    return (
        <div className="OnBoardingForm2-main-container" >

            <MainLogoBox image={MyLogo} name={"Eden"} />
            <div className="progress-wrapper" >
                <MainStepperBar index={1} />
            </div>
            <MainTitleLabel heading={"Let's set up a home for all your work"} subheading={"You can always create another workspace later."} />
            <MainInputBox IBoption={false} IBlabelname={"Full name"} IBtype={"regular"} IBplaceholdervalue={"Steve Jobs"} />
            <MainInputBox IBoption={true} IBlabelname={"Workspace URL"} IBtype={"domain"} IBdomainname={"www.eden.com/"} IBplaceholdervalue={"Example"} />
            <MainButton text={"Create Workspace"} />
        </div>
    )
}

export default OnBoardingForm2
{/* <MainCardChip icon={MyImage} headline={"For myself"} description={"Write better. Think more clearly. Stay organized"} /> */ }