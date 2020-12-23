import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{

    state = {
        gifs: [],
        query: ''
    }

    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                gifs: [data.data[0], data.data[1], data.data[2]]
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            query: e.target.firstChild.value
        })
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}