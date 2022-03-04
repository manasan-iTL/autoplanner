import { useState } from "react"
import { CommonButton } from ".";

const Input = (props) => {
    const [isFocus, setFocus] = useState(false)
    const [isDisabled, setDisabled] = useState(true)

    const CheckFocus = () => {
        setFocus(!isFocus)
    };

    const CheckIsDisabled = () => {
        setDisabled(!isDisabled)
    };

    return (
        <div>
            <label className="text-blue-700 text-xs">{(isFocus)? props.placefolderText: ""}</label>
            <div>
                <input 
                    className="focus:border-b-4 focus:border-blue-700 border-b-2 border-slate-900 outline-none p-2 disabled:border-none mr-10 mb-10"
                    type={props.type} 
                    placeholder = {props.placefolderText}
                    disabled = {isDisabled}
                    value = {props.value}
                    onFocus = {CheckFocus}
                    onBlur = {CheckFocus}
                />
                <CommonButton text = {props.text} onClick = {CheckIsDisabled} />
            </div>
        </div>
    )
}

// Input.defaultProps = {
//     value: "",
// }

export default Input