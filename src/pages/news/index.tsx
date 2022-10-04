import { NewsArticle } from 'components/atoms/NewsArticle';
import SkeletonLoader from 'components/atoms/SkeletonLoader';
import { useNewsArticles } from 'queries/News/useNewsArticles';
import React from 'react';
import { connect } from 'react-redux';

const NewsPage = () => {
    const { newsArticles, isLoading } = useNewsArticles();

    return (
        <div className="main-page">
            <div className="news-articles"> 
                { 
                    isLoading && newsArticles.length === 0 
                        ? Array(6).fill(0).map((_, index) => <SkeletonLoader key={index} width="20rem" height="8rem" visible />)
                        : newsArticles.map((article, index) => (<NewsArticle key={index} article={article} />)) 
                }
            </div>
        </div>
    )
};

export default connect(null, null)(NewsPage);
