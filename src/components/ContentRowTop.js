import React from 'react';
import SmallCard from './SmallCard';
import PropTypes from 'prop-types';

function ContentRowTop({ totalProducts, totalUsers }) {
	let frutas ={
		color:   "success",
		titulo: "Total frutas",
		valor: 10,
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
	
	
	let productInDataBase = {
		color: "primary",
		titulo: "Productos en Base Datos",
		valor: totalProducts,
		icono: "fas fa-fw fa-table",
	}

	let amount = {
		color:   "danger",
		titulo: "Facturación Acumulada en ARS",
		valor: 220,
		icono: "fas fa-fw fa-chart-area",
	}

	let user = {
		color:   "dark",
		titulo: "Total Usuarios",
		valor: totalUsers,
		icono: "fas fa-user",
	}
	

	let cardProps = [frutas,verduras,bolsones, productInDataBase, amount, user];
	return (
		<React.Fragment>
			<div className="row">
				{
					cardProps.map((producto, index) => {
						return <SmallCard  {...producto} key={index} />
					})
				}
			</div>


		</React.Fragment>
	)

}

ContentRowTop.propTypes = {
	totalProducts: PropTypes.number,
	totalUsers: PropTypes.number
}

ContentRowTop.defaultProps = {
	totalProducts: 0,
	totalUsers: 0
}
export default ContentRowTop;