import React, { Component } from "react";

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
        }
    }

    async clickHandler() {
        try {
            const response = await fetch(`https://api.chucknorris.io/jokes/random?category=dev`);
            const data = await response.json();
            this.setState({ quote: data.value });
        } catch (error) {
            this.setState({ quote: error.message });
        }
    }

    render() {
        const { quote } = this.state; //destructured
        return (
            <div>
                <p>Chuck says...</p>
                <p>"{quote}"</p>
                <div>
                    <button onClick={this.clickHandler.bind(this)}>Click to refresh</button>
                </div>
            </div>
        )
    }
}

export default Quote;