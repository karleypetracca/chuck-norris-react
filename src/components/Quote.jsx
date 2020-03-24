import React, { Component } from "react";

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "hahahaha",
            message2: "charcuterie rulez",
        }
    }

    render() {
        const { message, message2 } = this.state; //destructured
        return (
            <div>
                <p>Chuck says... {message2} </p>
            </div>
        )
    }
}

export default Quote;