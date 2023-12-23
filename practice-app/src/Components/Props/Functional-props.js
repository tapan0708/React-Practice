
function FunctionalProps(props) {
    console.log(props)
    return (
        <>
            <h1>Hello, I am {props.userName}</h1>
            {props.children}
        </>
    )
}

export default FunctionalProps;