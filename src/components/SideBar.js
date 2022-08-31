import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/logo.png';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                
                <div className="sidebar-brand-icon" >   
                        <img  src={image} alt="Nuestra Huerta" width="75"/>
                </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                <Link className="nav-link" to="/">
                    {/* <a className="nav-link" href="/"> */}
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>NUESTRA HUERTA</span>
                    {/* </a> */}
                </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/sections">
                    {/* <a className="nav-link collapsed" href="/"> */}
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Secciones</span>
                    {/* </a> */}
                </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/categories">    
                    {/* <a className="nav-link" href="/"> */}
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorías</span>
                    {/* </a> */}
                </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                {/* <li className="nav-item">
                <Link className="nav-link" to="/products">   
                        <i className="fas fa-fw fa-table"></i>
                        <span>Productos</span>
                   
                </Link>    
                </li> */}

                <li className="nav-item">
                <Link className="nav-link" to="/users">     
                    {/* <a className="nav-link" href="/"> */}
                        <i className="fas fa-fw fa-table"></i>
                        <span>Usuarios</span>
                    {/* </a> */}
                </Link>    
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;