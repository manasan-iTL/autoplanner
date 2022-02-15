
const LoginBotton = (props) => {
    return (
        <button 
            className="w-3/5 bg-cyan-300 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded-full"
            onClick={props.Signup}
            > 
            {props.text}
        </button>
    )
}

export default LoginBotton