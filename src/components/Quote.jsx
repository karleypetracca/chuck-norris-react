import React, { Component } from "react";

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "hahahaha",
            message2: "charcuterie rulez",
            quote: "Fetching a quote...",
        }
    }

    componentDidMount() {
        this.setState({
            quote: "here's your quote"
        })
    }

    render() {
        const { message, message2, Quote } = this.state; //destructured
        return (
            <div>
                <p>Chuck says... {message2} </p>
            </div>
        )
    }
}

export default Quote;