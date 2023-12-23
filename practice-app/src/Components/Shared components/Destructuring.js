import React from 'react'

function Destructuring(props) {
    const { name, age } = props.user;
    return (
        <div>
            <h1>Hey, I am {name} {age}</h1>
        </div>
    )
}

export default Destructuring;
