import React, { useState, useEffect, useContext } from 'react'

// organisms 

import OnBoardingForm1 from '../../components/organisms/OnBoardingForms/Form1/OnBoardingForm1'
import OnBoardingForm2 from '../../components/organisms/OnBoardingForms/Form2/OnBoardingForm2'
import OnBoardingForm3 from '../../components/organisms/OnBoardingForms/Form3/OnBoardingForm3'
import OnBoardingForm4 from '../../components/organisms/OnBoardingForms/Form4/OnBoardingForm4'

// data context

import DribbleContext from '../../utilities/DataContext'


function Index(props) {

    const contextDribble = useContext(DribbleContext);

    console.log(contextDribble.mainData)



    return (
        <div>

            {
                (contextDribble.changeFormTo === 1) ?
                    <OnBoardingForm1 />
                    :
                    (contextDribble.changeFormTo === 2) ?
                        <OnBoardingForm2 />
                        :
                        (contextDribble.changeFormTo === 3) ?
                            <OnBoardingForm3 />
                            :
                            (contextDribble.changeFormTo === 4) ?
                                <OnBoardingForm4 />
                                :
                                null
            }
        </div>
    )
}

export default Index