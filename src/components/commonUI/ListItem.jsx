
const ListItem = (props) => {
    return (
        <div>
            <input type="radio" name="selectBook" value={props.id} onChange={props.handleChange}/>
            <label>{props.title}</label>
        </div>
    )
}

export default ListItem