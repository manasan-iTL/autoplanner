
const SearchArea = (props) => {
    return (
        <div>
            {
                props.items.length > 0 && (props.items.map((item,i) => {
                    return (
                        <div>
                            <input  type="radio" 
                                    key={item.id} 
                                    id={item.id} 
                                    name="selectBook"
                                    value={item.title} /> 
                            <label for={item.id} key={i}>{item.title}</label>
                        </div>
                    )
                })) 
            }
        </div>
    )
}

export default SearchArea