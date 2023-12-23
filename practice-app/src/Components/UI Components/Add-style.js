import './stylesheet.css';

function AddStyle() {
    const inlineStyle = {
        color: "orange",
        fontSize: "50px"
    }
    return (
        <>
            <h1 className="success">Hey I am css</h1>
            <p style={inlineStyle}>Hey I am inline</p>
        </>
    );
}

export default AddStyle;