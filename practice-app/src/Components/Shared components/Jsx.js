import React from 'react';

function CreateElementByJsx() {
    return (
        <>
            <h1>Hello, I am HTML element</h1>
        </>
    );
};

function CreateElementByReact() {
    return (
        React.createElement(
            'div',
            { id: "color-red", className: "text-danger" },
            React.createElement('h1', null, "Hey, I am Heading")
        )
    );
};

export default CreateElementByReact;