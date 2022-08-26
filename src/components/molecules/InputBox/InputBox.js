import React from 'react'

import Inputlabel from '../../atoms/TextInputLabel/TextInputLabel'
import InputText from '../../atoms/TextInput/TextInput'

function InputBox({ IBtype, IBdomainname, IBoption, IBlabelname, IBplaceholdervalue }) {

  return (
    <React.Fragment>
      <Inputlabel option={IBoption} labelname={IBlabelname} />
      <InputText type={IBtype} domainname={IBdomainname} placeholdervalue={IBplaceholdervalue} />
    </React.Fragment>

  )
}

export default InputBox