import React from 'react';
import { connect } from 'react-redux';

const IndexPage = () => {
    return (
        <div className="main-page">
            <h1>Happy birthday Emilkr!</h1>
        </div>
    )
};

export default connect(null, null)(IndexPage);
