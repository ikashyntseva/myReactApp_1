import React from 'react';
import ProductCategoryBlock from './ProductCategoryBlock';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.products = props.products;
  }

  getCategories() {
    return [...new Set(this.props.products.map(product => product.category))];
  }

  filterProductsBySearch(filterText) {
    const pattern = new RegExp(filterText, 'gi');
    return this.products.filter(product => !!product.name.match(pattern));
  }

  getProductsByCategory(category) {
    return this.filterProductsBySearch(this.props.filterText).filter(
      product => product.category === category,
    );
  }

  getStockedProducts(productsByCategory) {
    return productsByCategory.filter(product => product.stocked);
  }

  getProductsToRender(category) {
    let products = this.getProductsByCategory(category);

    return this.props.inStockOnly
      ? this.getStockedProducts(products)
      : products;
  }

  renderCategoryBlocks() {
    const categories = this.getCategories();

    return categories.map((category, i) => (
      <ProductCategoryBlock
        key={i}
        products={this.getProductsToRender(category)}
      />
    ));
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{this.renderCategoryBlocks()}</tbody>
      </table>
    );
  }
}

export default ProductTable;
