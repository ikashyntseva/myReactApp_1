import React from 'react';

const ProductCategoryRow = props => {
  return (
    <tr>
      <td colSpan="2" className="product-category">
        {props.category}
      </td>
    </tr>
  );
};

export default ProductCategoryRow;
