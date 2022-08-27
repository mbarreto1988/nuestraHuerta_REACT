import React from 'react';
import ProductList from './ProductList';

// import ProductDetail from './ProductDetail';

function Product(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					{/* <h1 className="h3 mb-3 px-3 px-sm-4 text-gray-800">Nuestra Huerta - Listado de Productos</h1> */}
					<ProductList/>
                    {/* <ProductDetail/> */}
					{/*<!-- DataTales Example -->*/}
					            
        </React.Fragment>
    )
}
export default Product;