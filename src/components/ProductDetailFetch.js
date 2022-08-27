import React from "react";
import ProductDetailComp from "./ProductDetailComp";

class ProductDetailFetch extends React.Component {

    state = {
        ProductDetail: [],
        // overOnH6: false
    }
    componentDidMount() {
        fetch('http://localhost:3003/api/products/detail')
            .then(response => response.json())
            .then(products => {
                console.log(products)
                this.setState({
                    ProductDetail: products.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="card shadow mb-4">

                <ProductDetailComp product={this.state.ProductDetail}/>

            </div>
        )
    }
}

export default ProductDetailFetch;