import React, { useState, useEffect } from 'react'

// atoms 

import Inputlabel from '../../atoms/TextInputLabel/TextInputLabel'
import InputText from '../../atoms/TextInput/TextInput'

/**
 * InputBox component (molecule)
 * @param {string} IBtype: specifies the button format i.e regular(default), domain
 * @param {string} IBdomainname: text to display on input label 
 * @param {string} IBplaceholdervalue: text to display on input placeholder
 * @param {string} IBlabelname: string specifies the label name of the input box
 * @param {boolean} IBoption: integer to select specified input is optional or not i.e true, false
 * @param {function} IBaction: function to run on click of the button
 * @returns Custom InputBox with passed properties for InputBox to create input with label
 */
export default function InputBox(props) {

  // function to pass the values to HOC
  function getNewValue(val, active) {
    props.takeNewValue(val, props.IBlabelname, active);
    props.setValue(val)
  }

  InputBox.defaultProps = {
    takeNewValue: () => { "" },
    setValue: () => { "" }
  }

  return (
    <div className="inputbox-container"  >
      <div className="inputbox-holder" >
        <Inputlabel option={props.IBoption} labelname={props.IBlabelname} />
        <InputText type={props.IBtype} domainname={props.IBdomainname} placeholdervalue={props.IBplaceholdervalue} catchInput={getNewValue} />
      </div>
    </div>
  )
}
