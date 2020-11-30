import React from 'react'

class button extends Components {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show:true
        };
    }

    incrementItem = () => {
        this.setState({ clicks: this.state.clicks +1});
    }
    decrementItem = () => {
        this.setState({ clicks: this.state.clicks -1});
    }
}

render () {
    return (
        <div>
            <button onClick={this.incrementItem}>Click To add 1</button>
            <button onClick={this.decremtItem}>Click To subtract 1</button>
        </div>
    );
}

export default button;