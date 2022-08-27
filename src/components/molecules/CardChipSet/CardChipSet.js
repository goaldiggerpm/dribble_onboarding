import React, { useState } from 'react'

// atoms 

import CardChip from '../../atoms/CardChip/CardChip.js'

// images

import MyImage from '../../../assets/images/person1.png'
import MyImage2 from '../../../assets/images/person4.png'
/**
 * CardChipSet component (molecule)
 * @param {string} icon: string specifies the source of icon
 * @param {string} headline: text to display on headline
 * @param {string} description: text to display on description
 * @param {function} action: function to run on click of the button
 * @param {function} action: function to run on click of the button
 * @returns Custom CardChipSet with passed properties for CardChip to create CardChip grid
 */
function CardChipSet(props) {

    function cardSelection(card) {
        // console.log("card selectedCard", card)
        props.getCard(card)
    }

    return (
        <div className="cards-container" >
            <CardChip icon={MyImage} headline={"For myself"} description={"Write better. Think more clearly. Stay organized"} name={"self"} select={cardSelection} />
            <CardChip icon={MyImage2} headline={"With my team"} description={"Wikis, docs, tasks & projects, all in one place."} name={"team"} select={cardSelection} />
        </div>
    )
}

export default CardChipSet