import './App.scss';
import React from 'react';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: '', inStockOnly: false };
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleInStockChange(e) {
    this.setState({ inStockOnly: e.target.checked });
  }

  handleFilterTextChange(e) {
    this.setState({ filterText: e.target.value });
  }

  render() {
    const { filterText, inStockOnly } = this.state;
    return (
      <>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onStockChange={this.handleInStockChange}
        />
        <ProductTable
          filterText={filterText}
          inStockOnly={inStockOnly}
          products={PRODUCTS}
        />
      </>
    );
  }
}

export default FilterableProductTable;
