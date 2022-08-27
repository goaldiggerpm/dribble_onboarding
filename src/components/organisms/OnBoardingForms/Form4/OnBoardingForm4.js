import React, { useState } from 'react'

// atoms

import MainButton from '../../../atoms/Button/Button.js'
import MainTitleLabel from '../../../atoms/TitleLabel/TitleLabel.js'
import MainCardChip from '../../../atoms/CardChip/CardChip.js'
import MainLogoBox from '../../../atoms/LogoBox/LogoBox.js'
import MainImageHolder from '../../../atoms/ImageHolder/ImageHolder.js'

// molecules

import MainInputBox from '../../../molecules/InputBox/InputBox.js'
import MainStepperBar from '../../../molecules/StepperBar/StepperBar.js'


// image 
import Success from '../../../../assets/images/success.png'
import MyLogo from '../../../../assets/images/eden-logo(xl).png'


function OnBoardingForm4() {
    return (
        <div className="OnBoardingForm4-main-container" >

            <MainLogoBox image={MyLogo} name={"Eden"} />
            <div className="progress-wrapper" >
                <MainStepperBar index={1} />
            </div>
            <MainImageHolder srcfile={Success} />
            <MainTitleLabel heading={"Welcome! First things first..."} subheading={"You can always change them later."} />
            <MainButton text={"Launch Eden"} />
        </div>
    )
}

export default OnBoardingForm4