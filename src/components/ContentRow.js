import React from 'react';
import SmallCard from './SmallCard';
import { GiShinyApple } from "react-icons/fa";

let frutas ={
    color:   "success",
    titulo: "Total frutas",
    valor: 12,
    icono: "fas fa-fw fa-folder",
}

let verduras = {
    color:   "warning",
    titulo: "Total verduras",
    valor: 8,
    icono: "fas fa-fw fa-folder",
}

let bolsones = {
    color:   "primary",
    titulo: "Total Bolsones",
    valor: 2,
    icono: "fas fa-fw fa-folder",
}

let productos = {
    color:   "danger",
    titulo: "Facturación Acumulada en ARS",
    valor: 220,
    icono: "fas fa-fw fa-chart-area",
}

let usuarios ={
    color:   "dark",
    titulo: "Total Usuarios",
    valor: 4,
    icono: "fas fa-user",
}


let cardProps = [frutas,verduras,bolsones,productos,usuarios];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;