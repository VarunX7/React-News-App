import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
     
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `NewsMonkey - ${this.props.category}`
    }

    async componentDidMount(){
        this.setState({loading: true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page -1}&pagesize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }
    handleNextClick = async () => {
        if(Math.ceil(this.state.totalResults/this.props.pageSize) >= this.state.page +1){

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pagesize=${this.props.pageSize}`
            this.setState({loading: true})
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
    render() {
        return (
            <div className='container my-3 bg-transparent'>
                <h1 className='text-center' style={{color: '#e5e5e5'}}>Top Headlines {this.props.category==='general'? " ": "from " + this.props.category}</h1>
                {this.state.loading && <Spinner />}
                {!this.state.loading && <div className="row">
                    {this.state.articles.map((article)=><div className="col-md-4"  key={article.url}>
                        <NewItem title={article.title? article.title:" "} description={article.description? article.description: " "} imageUrl={article.urlToImage? article.urlToImage: "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/small/3d-world-news-background-loop-free-video.jpg"} newsUrl={article.url} author={article.author? article.author: 'Anonymous'} date={article.publishedAt.split('T')[0]} source={article.source.name}/>
                    </div>)}
                </div>}

                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-warning" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={Math.ceil(this.state.totalResults/this.props.pageSize) < this.state.page +1} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>    
            </div>
        )
    }
}

export default News
