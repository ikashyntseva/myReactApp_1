import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductCategoryBlock extends React.Component {
  renderProductRows() {
    return this.props.products.map((product, i) => (
      <ProductRow key={i} product={product} />
    ));
  }

  render() {
    const { products } = this.props;
    return (
      <>
        {products.length ? (
          <>
            <ProductCategoryRow category={products[0].category} />
            {this.renderProductRows()}
          </>
        ) : null}
      </>
    );
  }
}

export default ProductCategoryBlock;
