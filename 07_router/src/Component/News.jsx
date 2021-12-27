import React, { Component } from 'react'

export default class News extends Component {
    render() {
        console.log("News的this.props：",this.props);
        return (
            <div>
                <h3>News组件</h3>
            </div>
        )
    }
}
