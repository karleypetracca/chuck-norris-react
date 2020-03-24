import React, { Component } from "react";

class Quote extends Component {    
    render() {
        const { message } = this.props; //destructured
        return (
            <div>
                <p>Chuck says... {message} </p>
            </div>
        )
    }
}

export default Quote;