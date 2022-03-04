import { useState } from "react";
import { CommonButton } from ".";

const SearchInput = (props) => {
    const [isFocus, setFocus] = useState(false)

    const CheckFocus = () => {
        setFocus(!isFocus)
    };

    return (
        <div>
        <label className="text-blue-700 text-xs">{(isFocus)? props.placefolderText: ""}</label>
        <div>
            <input 
                className="focus:border-b-4 focus:border-blue-700 border-b-2 border-slate-900 outline-none p-2 disabled:border-none mr-10 mb-10"
                type={props.type} 
                placeholder = {(isFocus)? null :props.placefolderText}
                disabled = {false}
                value = {props.value}
                onFocus = {CheckFocus}
                onBlur = {CheckFocus}
            />
            <CommonButton text = {props.text}/>
        </div>
    </div>
    )
}

export default SearchInput