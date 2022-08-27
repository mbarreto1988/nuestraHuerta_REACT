import React from "react";
import ProductRow from "./ProductRow";
class ProductList extends React.Component {

    state = {
        ProductList: [],
        // overOnH6: false
    }
	componentDidMount() {
        fetch('http://localhost:3003/api/products')
            .then(response => response.json())
            .then(products => {
				console.log(products)
                this.setState({
                    ProductList: products.data
                });
            })
            .catch(err => console.log(err));
    }

    render (){
        return(
            <div className="card shadow mb-4">
						<h1 className="h3 mb-3 px-3 px-sm-4 text-gray-800">Nuestra Huerta - Listado de Productos</h1>

                        <div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Precio</th>
                                            <th>Categoría</th>
                                            <th>Sección</th>
                                            <th>Stock</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                        
										</tr>
									</tfoot>
									<tbody>
									{
                                    this.state.ProductList.map((product,index)=>
                                    <ProductRow product={product} key={index} />
									
									)
                                }
									</tbody>
								</table>
							</div>
						</div>
					</div>
        )
    }
}

export default ProductList;