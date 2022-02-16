
const CommonBotton = (props) => {
    return (
        <button 
            className="bg-yellow-200 text-black font-semibold 
                    hover:bg-yellow-400 py-2 px-4 border hover:border-transparent rounded"
            >
            {props.text}
        </button>
    )
}

export default CommonBotton