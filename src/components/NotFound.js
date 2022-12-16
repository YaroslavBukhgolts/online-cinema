const NotFound = ({onNotFound}) => {
    return (
        <div>
            <h1>No result :(</h1>
            <input type="btn" defaultValue='Вернуться на главную' onClick={() => onNotFound()}/>
        </div>
    )
}

export default NotFound;