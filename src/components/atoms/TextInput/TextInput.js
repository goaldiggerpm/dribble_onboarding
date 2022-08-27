import React, { useState, useEffect } from 'react'

/**
 * Button component (atom)
 * @param {string} type: specifies the button format i.e regular(default), domain
 * @param {string} domainname: text to display on input label 
 * @param {string} placeholdervalue: text to display on input placeholder
 * @param {function} action: function to run on click of the button
 * @returns Custom TextInput with passed properties
 */
function TextInput(props) {

    const [inputValue, setinputValue] = useState("")

    useEffect(() => {
        if (inputValue === "") {
            props.catchInput(inputValue, "turnOff")
        }
        else {
            props.catchInput(inputValue, "turnOn")
        }
    }, [inputValue])


    return (

        <div className="mainTextBoxHolder" >
            {
                (props.type === "regular") ?
                    <div className="textBoxHolder regular" >
                        <input
                            maxLength={100}
                            type="text" className="textBox-regular"
                            placeholder={props.placeholdervalue} value={inputValue}
                            onChange={(e) => {
                                setinputValue(e.target.value)
                            }}
                        />
                    </div>
                    :
                    (props.type === "domain") ?
                        <label className="textBoxHolder domain" >
                            <p className="textBoxDomain" >
                                {props.domainname}
                            </p>
                            <input
                                maxLength={100}
                                type="text" className="textBox-domain"
                                placeholder={props.placeholdervalue} value={inputValue}
                                onChange={(e) => {
                                    setinputValue(e.target.value)
                                }}
                            />
                        </label>
                        :
                        null
            }
        </div>

    )
}
/**
 * Default props of the Button Component, it will be overridden
 * when the respective values are passed
 */
//  Button.defaultProps = {
//     type: "primary",
//     mode: "",
//     icon: null,
//     text: "Demo",
//     action: () => {
//       console.log("demo button prop");
//     },
//   };


export default TextInput