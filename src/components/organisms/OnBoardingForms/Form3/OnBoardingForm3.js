import React, { useState } from 'react'

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


function OnBoardingForm3() {
    return (
        <div className="OnBoardingForm3-main-container" >

            <MainLogoBox image={MyLogo} name={"Eden"} />
            <div className="progress-wrapper" >
                <MainStepperBar index={1} />
            </div>
            <MainTitleLabel heading={"Welcome! First things first..."} subheading={"You can always change them later."} />
            <CardChipSet />
            <MainButton text={"Create Workspace"} />
        </div>
    )
}

export default OnBoardingForm3
{/* <MainInputBox IBoption={true} IBlabelname={"Full name"} IBtype={"domain"} IBdomainname={"www.eden.com/"} IBplaceholdervalue={"Full name"} /> */ }