import React from 'react';
import imagenFondo from '../assets/images/pomelorojo1.jpg';
// import ContentRow from './ContentRow';

function ProductDetailComp(props) {
    return (
        <React.Fragment>
            {/*<!-- Content Row Top -->*/}
            <div>
                {/* <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div> */}

                {/*<!-- Content Row -->*/}
                {/* <ContentRow /> */}
                {/*<!-- End  in Data Base -->*/}

                {/*<!-- Content Row Last Movie in Data Base -->*/}
                <div className="row">
                    {/*<!-- Last Movie in DB -->*/}
                    <div className="col-lg-12 mb-7">
                        <div >
                            <div className="card-header py-3">
                                <h4>Producto más vendido (últ 10 días)</h4>
                                <h5 className="m-0 font-weight-bold text-gray-800">{props.product.name}</h5>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="px-sm-4 mt-3 mb-4" style={{ width: 20 + 'rem', height: 200 + "px"}} src={imagenFondo} alt=" Combo Frutas " />
                                </div>
                                <br></br>
                                <p>{props.product.description}</p>
                                
                                
                                <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3003/product/${props.product.id}/detail`}>Ver el producto en detalle</a>
                            </div>
                        </div>
                    </div>
                    {/*<!-- End content row last movie in Data Base -->*/}


                    {/*<!-- Genres in DB -->*/}
                    {/* <CategoriesInDb /> */}
                    {/*<!--End Genres In Db-->*/}

                    {/*<!-- Genres in DB -->*/}
                    {/* <SectionsInDb /> */}
                    {/*<!--End Genres In Db-->*/}

                </div>
            </div>
            {/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ProductDetailComp;