import React, { Component } from 'react'

export class NewItem extends Component {

    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div className='my-3'>
                <div className="card border border-black" style={{ background: "#e5e5e5"}}>
                    <div>
                        <span className="badge rounded-pill bg-danger" style={{position: "absolute", right: 0, zIndex: 10 }}>{source}</span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">Article By- <strong>{author}</strong></small></p>
                        <p className="card-text"><small className="text-body-secondary">Dated: <strong>{date}</strong></small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-warning">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewItem
