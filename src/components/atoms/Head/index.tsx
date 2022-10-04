import React from 'react';
import CHead from 'next/head';

const Head: React.FC = () => {
    const liveSite = 'https://dmginc.gg/';

    return (
        <CHead>
            <title>Damage Inc</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Damage Inc" content="Demo Application for Dev Damage Inc" />

            <link
                rel="icon"
                type="image/png"
                href="https://dmginc.gg/assets/images/damageinc/di-logo/favicon.png"
            />

            <link
                rel="stylesheet"
                href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
            />

            <link rel="stylesheet" href={ `${liveSite}assets/css/damageinc.min.css` } />
        </CHead>
    );
};

export default Head;
