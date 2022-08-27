import React from 'react';
import imagenFondo from '../assets/images/combo frutas.png';
// import imagenFondo2 from '../assets/images/banana.jpg';
// import CategoriesInDb from './CategoriesInDb';
// import SectionsInDb from './SectionsInDb';
import ContentRow from './ContentRow';
import ProductRankingFetch from './ProductRankingFetch';


function ProductDetailComp(props) {
    return (
        <React.Fragment>
            {/*<!-- Content Row Top -->*/}
            <div className="container-fluid">
                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                {/*<!-- Content Row -->*/}
                <ContentRow />
                {/*<!-- End  in Data Base -->*/}

                {/*<!-- Content Row Last Movie in Data Base -->*/}
                <div className="row">
                    {/*<!-- Last Movie in DB -->*/}
                    <div className="col-lg-5 mb-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h4>Ultimo producto creado</h4>
                                <h5 className="m-0 font-weight-bold text-gray-800">{props.product.name}</h5>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-0" style={{ width: 20 + 'rem' }} src={imagenFondo} alt=" Combo Frutas " />
                                </div>
                                <p>{props.product.description}</p>
                                <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3003/product/${props.product.id}/detail`}>Ver el producto en detalle</a>
                            </div>
                        </div>
                        
                    </div>
                    {/* <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                            <h4>Producto mas vendido</h4>
                                <h5 className="m-0 font-weight-bold text-gray-800">Ranking últimos 10 días</h5>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-5 mb-5" style={{ width: 25 + 'rem' }} src={imagenFondo2} alt=" Banana " />
                                </div>
                                <p></p>
                                <p>Banana Ecuatoriana</p>
                                <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3003/product/${props.product.id}/detail`}>Ver el producto en detalle</a>
                            </div>
                        </div>
                    </div> */}
                    {/*<!-- End content row last movie in Data Base -->*/}


                    {/*<!-- Genres in DB -->*/}
                    {/* <CategoriesInDb /> */}
                    {/*<!--End Genres In Db-->*/}

                    {/*<!-- Genres in DB -->*/}
                    <ProductRankingFetch />
                    {/*<!--End Genres In Db-->*/}

                </div>
            </div>
            {/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ProductDetailComp;