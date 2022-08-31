import React from 'react';
import TopBar from './TopBar';
import Product from './Product';

import Footer from './Footer';
function ContentWrapper() {
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <Product />
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;