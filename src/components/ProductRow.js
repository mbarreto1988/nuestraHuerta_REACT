import React from 'react';


function ProductRow(props) {
    return (
        <tr>
            <td>
                {props.product.id}
            </td>
            <td>
                {props.product.name}
            </td>
            <td>
                {props.product.description}
            </td>
            <td>
                {props.product.price}
            </td>
            <td>
                {props.product.categories.name}
            </td>
            <td>
                {props.product.sections.name}
            </td>
            <td>
                {props.product.stock}
            </td>
        </tr>
    )
}
export default ProductRow;