import React from 'react'

export default function FunctionClick() {

    function clickHandler() {
        console.log("Clicked");
    }

    return (
        <>
            <div>
                <button className='btn btn-primary' onClick={clickHandler}>Click</button>
            </div>
        </>
    )
}
