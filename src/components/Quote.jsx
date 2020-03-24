import React, { Component } from "react";

class Quote extends Component {    
    render() {
        return (
            <div>
                <p>Chuck says... {this.props.message} </p>
            </div>
        )
    }
}

export default Quote;