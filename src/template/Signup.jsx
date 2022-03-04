import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Thumbnail, LoginBotton } from "../components/commonUI"
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Signup = () => {
    const navigate = useNavigate()
    const oauth = auth
    const [error, setError] = useState("")
    const signup = async(event) => {
        console.log("Sign up")
        try {
            await signInWithPopup(oauth, provider)
            navigate('/home')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }; 

    return (
        <div className="container flex flex-col items-center">
            <Thumbnail />
            <h2>サインアップ画面</h2>
            <LoginBotton text = "Googleでサインアップ" Signup = {signup}/>
            { error && <p>{error}</p>}
        </div>
    )
}

export default Signup