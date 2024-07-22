import React, { useState } from 'react';
import ProductList from './ProductList';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Smartphone',
      image: 'https://cdn.mos.cms.futurecdn.net/6SxD9kBtDntRhMMBcPutjF.jpg',
      price: 9999,
      popularity: 8
    },
    {
      id: 2,
      name: 'Laptop',
      image: 'https://cdn.mos.cms.futurecdn.net/6SxD9kBtDntRhMMBcPutjF.jpg',
      price: 45999,
      popularity: 7
    },
    {
      id: 3,
      name: 'Headphones',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJt3ZWzD_LyeDOH3OpuMTGlHtWeAf263jDbg&s',
      price: 2999,
      popularity: 6
    }
    // Add more products as needed
  ]);

  const [sortBy, setSortBy] = useState('name'); // Default sort by name, can be 'price' or 'popularity'

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'popularity') {
      return b.popularity - a.popularity;
    } else {
      // Default sort by name
      return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-4">Product List</h1>
      <div className="flex justify-end mb-4">
        <label htmlFor="sort" className="mr-2">Sort by:</label>
        <select
          id="sort"
          className="p-2 border border-gray-300 rounded"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map(product => (
          <ProductList
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            popularity={product.popularity}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
