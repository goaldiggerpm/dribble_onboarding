import React from 'react'

/**
 * Button component (atom)
 * @param {string} type: specifies the button format i.e primary(default), secondary, tertiary
 * @param {string} mode: specifies the button mode i.e normal(" " as default), danger, disabled
 * @param {string} icon: string specifies the source of icon (optional)
 * @param {string} text: text to diplay on button (optional)
 * @param {function} action: function to run on click of the button
 * @returns Custom button with passed properties
 */
function TextInput({ type, domainname, placeholdervalue, }) {

    return (

        <div className="mainTextBoxHolder" >
            {
                (type === "regular") ?
                    <div className="textBoxHolder regular" >
                        <input type="text" className="textBox-regular" placeholder={placeholdervalue} />
                    </div>
                    :
                    (type === "domain") ?
                        <label className="textBoxHolder domain" >
                            <p className="textBoxDomain" >
                                {domainname}
                            </p>
                            <input type="text" className="textBox-domain" placeholder={placeholdervalue} />
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