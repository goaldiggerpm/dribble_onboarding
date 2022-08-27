import React, { useState } from 'react'

// organisms 

import OnBoardingForm1 from '../../components/organisms/OnBoardingForms/Form1/OnBoardingForm1'
import OnBoardingForm2 from '../../components/organisms/OnBoardingForms/Form2/OnBoardingForm2'
import OnBoardingForm3 from '../../components/organisms/OnBoardingForms/Form3/OnBoardingForm3'
import OnBoardingForm4 from '../../components/organisms/OnBoardingForms/Form4/OnBoardingForm4'


function Index() {

    // const [collectedData, setcollectedData] = useState({})

    // function saveData() {

    // }

    return (
        <div>
            <OnBoardingForm1 />
            <OnBoardingForm2 />
            <OnBoardingForm3 />
            <OnBoardingForm4 />
        </div>
    )
}

export default Index