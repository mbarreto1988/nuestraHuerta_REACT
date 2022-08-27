import React from "react";
import ProductRankingComp from "./ProductRankingComp";

class ProductRankingFetch extends React.Component {

    state = {
        ProductRanking: [],
        // overOnH6: false
    }
    componentDidMount() {
        fetch('http://localhost:3003/api/products/ranking')
            .then(response => response.json())
            .then(products => {
                console.log(products)
                this.setState({
                    ProductRanking: products.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="card shadow mb-4">

                <ProductRankingComp product={this.state.ProductRanking}/>

            </div>
        )
    }
}

export default ProductRankingFetch;