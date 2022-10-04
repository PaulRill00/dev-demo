import { useRouter } from 'next/router';
import React from 'react';
import { connect } from 'react-redux';

const NewsArticlePage = () => {
    const { query } = useRouter();
    const slug = query.slug?.toString() || '';

    return (
        <div className="main-page">
            { slug }
        </div>
    )
};

export default connect(null, null)(NewsArticlePage);
