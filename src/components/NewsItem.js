import React, { Component } from 'react'


export class NewsItem extends Component {

    render() {
        let { title, description, imgurl, newUrl, author, date,source } = this.props;
        return (
            <div>
                <div className="card my-3">
                    <img src={imgurl ? imgurl : "https://tubestatic.orf.at/static/images/site/tube/20230312/hand-gro%C3%A3.5994015.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}<span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{zIndex:'1',left:'90%'}}>
                            {source}
                            {/* <span class="visually-hidden">unread messages</span> */}
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'> <small class="text-body-secondary">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newUrl} target="blank" className="btn btn-primary btn-sm">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
