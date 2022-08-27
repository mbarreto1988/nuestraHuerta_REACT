import React from 'react';
import TopBar from './TopBar';
import ProductDetailFetch from './ProductDetailFetch';
// import UserComp from './UserComp';
// import ProductRankingFetch from './ProductRankingFetch';
// import Product from './Product';
import Footer from './Footer';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ProductDetailFetch />
                    {/* <UserComp /> */}
                    {/* <ProductRankingFetch /> */}
                    {/* <Product /> */}
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;