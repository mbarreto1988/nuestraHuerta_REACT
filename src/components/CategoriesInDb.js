import React from 'react';
import Category from './Category';

class CategoriesInDb extends React.Component {
    state = {
        categoriesList: [],
        overOnH6: false
    }

    componentDidMount() {
        fetch('http://localhost:3003/api/categories')
            .then(response => response.json())
            .then(categories => {
                this.setState({
                    categoriesList: categories.data
                });
            })
            .catch(err => console.log(err));
    }

    handleMouseOver = () => {
        this.setState({ overOnH6: !this.state.overOnH6 });
    }


    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 onClick={this.handleMouseOver} className="m-0 font-weight-bold text-gray-800">Categorias en Base de Datos</h6>
                        </div>
                        <div className={`card-body ${this.state.overOnH6 && 'bg-secondary'}`}>
                            <div className="row">
                                {
                                    this.state.categoriesList.map((category, index) => {
                                        return <Category category={category.name} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }

}

export default CategoriesInDb;