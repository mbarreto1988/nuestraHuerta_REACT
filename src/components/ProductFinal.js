import React from "react";
import ProductListTable from "./ProductListTable";
import ContentRowTop from "./ContentRowTop";
import ProductRankingFetch from "./ProductRankingFetch";
class Product extends React.Component {

    state = {
        products: [],
        
    }
    async componentDidMount() {
        try {
            let productsfetch = await fetch('http://localhost:3003/api/products')
            let products = await productsfetch.json()
            
            this.setState({
                products: products.data,
                
            })

        } catch (error) {
            console.log(error)

        }
    }


    render() {
        const { products } = this.state;
        return (
            <React.Fragment>
                {/* <div className="container-fluid">
                    <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>

                    <ContentRowTop products={products} />

                     <ProductRankingFetch />
                    
                    </div> */}

                    <div className="col-lg-10 mb-4">
                        <h1 className="h3 mb-2 text-gray-800">Productos en Base de Datos</h1>
                        <div className="card-body">
                            <ProductListTable products={products} />
                        </div>
                    </div>
               

            </React.Fragment>
        )
    }
}

export default Product;

// import React from "react";
// import ProductListTable from "./ProductListTable";

// class products extends React.Component {
//     state = {
//         products: [],
//         overOnH6: false
//     }

// function ProductFinal({ products }) {
//         return (
//             <React.Fragment>
//                     <div className="card shadow mb-4">
//                         <h1 className="h3 mb-2 text-gray-800">Productos en Base de Datos</h1>
//                         <div className="card-body">
//                             <ProductListTable products={products} />
//                         </div>
//                     </div>

//             </React.Fragment>
//         )
//     }


// export default ProductFinal;