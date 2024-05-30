import React, { Component } from 'react'

export class NewItem extends Component {
    constructor() {
        super();
        console.log('object')
    }

    componentDidMount() {
        console.log('asasaasasa');
        let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=539a86eba5b3401fa5d975000e4fc6f8';
        let data = fetch(url);
        console.log('dddadad', data);
    }


    render() {
        return (
            <div className='row mt-5'>
                <div className='col-md-3'>
                    <div className="card" style={{ width: '100%' }}>
                        <img src={require('../assets/house.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card" style={{ width: '100%' }}>
                        <img src={require('../assets/house.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card" style={{ width: '100%' }}>
                        <img src={require('../assets/house.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card" style={{ width: '100%' }}>
                        <img src={require('../assets/house.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewItem
