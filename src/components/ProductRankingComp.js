import React from 'react';
import imagenFondo from '../assets/images/pomelorojo1.jpg';
// import ContentRow from './ContentRow';

function ProductDetailComp(props) {
    return (
        <React.Fragment>
            {/*<!-- Content Row Top -->*/}
            <div>

                <div className="row">
                    <div className="col-lg-12 mb-0">
                    <div >
                        <div className="card-header py-1">
                                <h4>Producto más vendido (últ 10 días)</h4>
                                <h5 className="m-0 font-weight-bold text-gray-800">{props.product.name}</h5>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-0" style={{ width: 15 + 'rem' }} src={imagenFondo} alt=" Combo Frutas " />
                                </div>
                                <p>{props.product.description}</p>
                                
                                
                                <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3003/product/${props.product.id}/detail`}>Ver el producto en detalle</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ProductDetailComp;