import './empty.css'

const Empty = (props) => {
    const {msg} = props
    return (
        <div className="empty"><h1>{msg}</h1></div>
    )
}

export default Empty