import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      filteredText,
      isStockOnly,
      onFilterTextChange,
      onStockChange,
    } = this.props;

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={filteredText}
          onChange={onFilterTextChange}
          className="search-field"
        />
        <label>
          <input
            type="checkbox"
            checked={isStockOnly}
            onChange={onStockChange}
          />
          <span>Only show products in stock</span>
        </label>
      </div>
    );
  }
}

export default SearchBar;
