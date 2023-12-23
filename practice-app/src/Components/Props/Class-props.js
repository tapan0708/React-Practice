import React from 'react';

class ClassProps extends React.Component {

    render() {
        return (
            <>
                <h1>Hey, I am {this.props.userName}</h1>
            </>
        )
    };
}

export default ClassProps;