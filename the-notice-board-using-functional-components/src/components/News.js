import React, { useEffect, useState } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

const News = (props) => {
    
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    document.title = `NewsMonkey - ${props.category}`

    const updateNews = async()=>{

        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    useEffect(()=>{
        updateNews()
    }, [])

    const handlePrevClick = async () => {
        
        setPage(page - 1)
        updateNews()

    }
    const handleNextClick = async () => {
        if(Math.ceil(totalResults/props.pageSize) >= page +1){

            setPage(page + 1)
            updateNews()
        }
    }

        return (
            <div className='container my-3 bg-transparent'>
                <h1 className='text-center' style={{color: '#e5e5e5'}}>Top Headlines {props.category==='general'? " ": "from " + props.category}</h1>
                {loading && <Spinner />}
                {!loading && <div className="row">
                    {articles.map((article)=><div className="col-md-4"  key={article.url}>
                        <NewItem title={article.title? article.title:" "} description={article.description? article.description: " "} imageUrl={article.urlToImage? article.urlToImage: "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/small/3d-world-news-background-loop-free-video.jpg"} newsUrl={article.url} author={article.author? article.author: 'Anonymous'} date={article.publishedAt.split('T')[0]} source={article.source.name}/>
                    </div>)}
                </div>}

                <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-warning" onClick={handlePrevClick}>&larr; Previous</button>
                <button disabled={Math.ceil(totalResults/props.pageSize) < page +1} type="button" className="btn btn-warning" onClick={handleNextClick}>Next &rarr;</button>
                </div>    
            </div>
        )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
