import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
    static defaultProps = {
        counry: "in",
        page: 15,
        category:'general'
    }
    static propTypes = {
        country: PropTypes.string,
        page: PropTypes.number,
        category:PropTypes.string,
    }
    constructor() {
        super();
        // console.log("this is a constructor from news component")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ee19af4c58a4381a2835a76b8a892b6&page=1&pageSize=15`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parseData = await data.json();

            // Once you have the parsed data, you can use it or set it to state, etc.
            console.log(parseData); // For example, logging the parsed data
            this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false });
            // You can perform operations with parseData here
        } catch (error) {
            // Handle any errors that occur during the fetch or parsing
            console.error('Error fetching data:', error);
        }
    }
    handleNextClick = async () => {
        if ((this.state.page + 1) > Math.ceil(this.state.totalResults / 15)) {

        } else {
            this.setState({
                page: this.state.page += 1,
            })
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ee19af4c58a4381a2835a76b8a892b6&page=${this.state.page + 1}&pageSize=15`;
                this.setState({ loading: true })
                let data = await fetch(url);
                let parseData = await data.json();
                // console.log(parseData);
                this.setState({
                    articles: parseData.articles,
                    page: this.state.page + 1,
                    loading: false
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
    handlePreviousClick = async () => {
        this.setState({
            page: this.state.page -= 1,
        })
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ee19af4c58a4381a2835a76b8a892b6&page=${this.state.page + 1}&pageSize=15`;
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData);
            this.setState({ articles: parseData.articles });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render() {

        // console.log("render")
        return (

            <div className="container">
                <div className="container my-3">
                    <h1>NewsMonkey</h1>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!(this.state.loading) && this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 35) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgurl={element.urlToImage} newUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                            </div>
                        })}


                    </div>

                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePreviousClick} className="btn btn-dark">&larr; Previous</button>
                    <button type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
