import { Thumbnail, LoginBotton } from "../components/commonUI"

const Signup = () => {
    const signup = () => {
        console.log("Sign up")
    }; 

    return (
        <div className="container flex flex-col items-center">
            <Thumbnail />
            <h2>サインアップ画面</h2>
            <LoginBotton text = "Googleでサインアップ" Signup = {signup}/>
        </div>
    )
}

export default Signup