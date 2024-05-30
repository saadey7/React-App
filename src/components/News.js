import React, { Component } from 'react'
import NewItem from './NewItem'

export class News extends Component {
    render() {
        return (
            <div className='container'>
                <NewItem />
            </div>
        )
    }
}

export default News
