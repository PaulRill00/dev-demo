import { ForceLoginProvider } from '@dmgincs/utils';
import React from 'react';
import { connect } from 'react-redux';

const IndexPage = () => {
    return (
        <ForceLoginProvider>
            <div className="main-page">
                <h1>You can only see this if you are logged in</h1>
            </div>
        </ForceLoginProvider>
    )
};

export default connect(null, null)(IndexPage);
