// Vendor
import React from 'react';
import { FCWithChildren } from '@dmgincs/utils';
import { Navbar } from 'loadables';

// Templates
import Footer from 'components/templates/Footer';
import { useRouter } from 'next/router';
import { IHeaderItem } from '@dmgincs/common/dist/components/molecules/Navbar';

const PageLayout: FCWithChildren = ({ children }) => {
    const router = useRouter();

    const navLinks: IHeaderItem[] = [
        { 'name': 'home', 'href': '/', 'blank': false, 'pagePath': ['/'] },
    ];

    return router.isReady ? (
        <React.Fragment>
            <Navbar navitems={ navLinks || [] } loggedInLinks={ [
                {
                    label: 'Logged in page',
                    link: '/loggedin'
                }
            ] } />

            <div className="content-wrap" id="content-wrap">
                <div>{ children }</div>
            </div>

            <Footer />
        </React.Fragment>
    ) : null;
};

export default PageLayout;
