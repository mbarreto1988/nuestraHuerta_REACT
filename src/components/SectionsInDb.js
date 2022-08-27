import React from 'react';
import Section  from './Section';

class SectionsInDb extends React.Component {
    state = {
        sectionsList: [],
        overOnH6: false
    }
    componentDidMount() {
        fetch('http://localhost:3003/api/sections')
            .then(response => response.json())
            .then(sections => {
                this.setState({
                    sectionsList: sections.data
                });
            })
            .catch(err => console.log(err));
    }
    handleMouseOver = () => {
        this.setState({overOnH6: !this.state.overOnH6});
    }
    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 onClick={this.handleMouseOver} className="m-0 font-weight-bold text-gray-800">Secciones en nuestra Base</h6>
                        </div>
                        <div className={`card-body ${this.state.overOnH6 && 'bg-secondary'}`}>
                            <div className="row">
                                {
                                    this.state.sectionsList.map((section,index)=>{
                                        return  <Section section={section.name}  key={index} />
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
export default SectionsInDb;