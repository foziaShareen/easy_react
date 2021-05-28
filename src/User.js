function User(props)
{
    return(
        <div>
            {props.item.name}
            
            {props.item.email}
            {props.item.contact}
        </div>
    )
}
export default User