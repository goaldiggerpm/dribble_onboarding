import React from 'react'

import Inputlabel from '../../atoms/TextInputLabel/TextInputLabel'
import InputText from '../../atoms/TextInput/TextInput'

function InputBox({ IBtype, IBdomainname, IBoption, IBlabelname, IBplaceholdervalue }) {

  return (
    <div className="inputbox-container"  >
      <div className="inputbox-holder" >
        <Inputlabel option={IBoption} labelname={IBlabelname} />
        <InputText type={IBtype} domainname={IBdomainname} placeholdervalue={IBplaceholdervalue} />
      </div>
    </div>
  )
}

export default InputBox