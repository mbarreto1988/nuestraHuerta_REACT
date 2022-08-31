import React from 'react';
import SmallCard from './SmallCard';
import PropTypes from 'prop-types';

function ContentRowTop({ totalProducts, totalUsers, totalFrutas, totalVerduras, totalBolsones }) {
	let frutas ={
		color:   "success",
		titulo: "Total frutas",
		valor: totalFrutas,
		icono: "fas fa-fw fa-folder",
	}
	
	let verduras = {
		color:   "warning",
		titulo: "Total verduras",
		valor: totalVerduras,
		icono: "fas fa-fw fa-folder",
	}
	
	let bolsones = {
		color:   "primary",
		titulo: "Total Bolsones",
		valor: totalBolsones,
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
	totalUsers: PropTypes.number,
	totalFrutas: PropTypes.number,
	totalVerduras: PropTypes.number,
	totalBolsones: PropTypes.number,
}

ContentRowTop.defaultProps = {
	totalProducts: 0,
	totalUsers: 0,
	totalFrutas: 0,
	totalVerduras: 0,
	totalBolsones: 0,
}
export default ContentRowTop;