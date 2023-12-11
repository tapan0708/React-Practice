const reactElement = {
    type: "a",
    props: {
        href: "https://facebook.com",
        target: "_blank"
    },
    children: 'click me to visit facebook'
}

const rootContainer = document.getElementById("root");

function customRender(reactElement, rootContainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    rootContainer.appendChild(domElement)
}

customRender(reactElement, rootContainer);


