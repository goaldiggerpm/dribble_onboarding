import React, { useState } from 'react'

// atoms 

import CardChip from '../../atoms/CardChip/CardChip.js'

// images

import MyImage from '../../../assets/images/person1.png'
import MyImage2 from '../../../assets/images/person4.png'

function CardChipSet() {
    return (
        <div className="cards-container" >
            <CardChip icon={MyImage} headline={"For myself"} description={"Write better. Think more clearly. Stay organized"} />
            <CardChip icon={MyImage2} headline={"With my team"} description={"Wikis, docs, tasks & projects, all in one place."} />
        </div>
    )
}

export default CardChipSet