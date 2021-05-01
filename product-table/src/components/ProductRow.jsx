import React from 'react';

const ProductRow = props => {
  const { product } = props;
  const { name, price, stocked } = product;

  return (
    <tr data-stocked={stocked}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
