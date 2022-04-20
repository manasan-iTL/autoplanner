import {ListItem} from ".";

const SearchArea = (props) => {
    const ListItems = props.items.length > 0 && (props.items.map(item => 
        <ListItem key={item.id} id={item.id} title = {item.title} handleChange={props.onChange}/> ))
    
    return (
        <div>
            {/* {
                props.items.length > 0 && (props.items.map((item,i) => {
                    return (
                        <div key={item.id}>
                            <input  type="radio" 
                                    // key={item.id} 
                                    // id={item.id} 
                                    name="selectBook"
                                    value={item.title} /> 
                            <label>{item.title}</label>
                        </div>
                    )
                })) 
            } */}
            {ListItems}
        </div>
    )
}

export default SearchArea