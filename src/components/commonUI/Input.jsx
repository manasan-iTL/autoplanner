import { useState } from "react"
import { CommonBotton } from ".";

const Input = (props) => {
    const [isFocus, setFocus] = useState(false)

    const CheckFocus = () => {
        setFocus(!isFocus)
    };

    return (
        <div>
            <label className="text-blue-700 text-xs">{(isFocus)? props.placefolderText: ""}</label>
            <div>
                <input 
                    className="focus:border-b-4 focus:border-blue-700 border-b-2 border-slate-900 outline-none p-2 disabled:border-none"
                    type={props.type} 
                    placeholder = {props.placefolderText}
                    disabled = {props.disabled}
                    value = {props.value}
                    onFocus = {CheckFocus}
                    onBlur = {CheckFocus}
                />
                <CommonBotton text = "検索"/>
            </div>
        </div>
    )
}

// Input.defaultProps = {
//     value: "",
// }

export default Input