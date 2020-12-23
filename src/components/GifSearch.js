import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        input: ''
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type='text' value={this.state.value} onChange={this.handleChange}></input>
                <input type='submit' value='Find Gifs'></input>
            </form>
        )
    }
}