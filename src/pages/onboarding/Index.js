import React, { useState } from 'react'
import MyButton from '../../components/atoms/Button/Button.js'
import MyTitleLabel from '../../components/atoms/TitleLabel/TitleLabel.js'
import MyTextChip from '../../components/atoms/CardChip/TextChip.js'

// molecules 
import MyInput from '../../components/molecules/InputBox/InputBox.js'
import Progressbar from '../../components/molecules/StepperBar/StepperBar'

// image 
import MyImage from '../../assets/images/person1.png'

function Index() {

    const [collectedData, setcollectedData] = useState({})

    function saveData() {

    }

    return (
        <div>
            <MyButton text={"Hii Pm"} />
            <MyInput IBoption={true} IBlabelname={"Full name"} IBtype={"domain"} IBdomainname={"www.eden.com/"} IBplaceholdervalue={"Full name"} />
            <MyTitleLabel heading={"Let's set up a home for all your work"} subheading={"you can always create another workspace later"} />
            <MyTextChip icon={MyImage} headline={"For myself"} description={"Write better. Think more clearly. Stay organized"} />
            <Progressbar index={1} />
        </div>
    )
}

export default Index