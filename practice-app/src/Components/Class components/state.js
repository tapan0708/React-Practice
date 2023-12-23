import React from 'react';

class state extends React.Component {

    constructor() {
        super();
        this.state = {
            message: "Welome to dev"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thanks"
        });
    };

    render() {
        return (
            <>
                <h1 className='text-seccess'>{this.state.message}</h1>
                <button type='button' className='btn btn-primary' onClick={() => this.changeMessage() }>Subscribe</button>
            </>
        );
    }
}

export default state;