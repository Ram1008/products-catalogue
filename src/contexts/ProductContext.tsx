import React, { createContext, useContext, useState } from 'react';
import { Product, ProductContextType } from '../types/product';

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Fetching product data
  const fetchProducts = async (): Promise<void> => {
    await fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        setProducts(data);
    })
    .catch((err) => {
        console.log(err);
    })
  };

  const sortByPrice = (flag: boolean) => {
    setProducts((prevProducts) =>
      [...prevProducts].sort((a, b) =>
        flag
          ? a.price - b.price // Low to High
          : b.price - a.price // High to Low
      )
    )
  };

  const sortByRating = () => {
    setProducts((prevProducts) =>
      [...prevProducts].sort((a, b) => b.rating.rate - a.rating.rate) // Rating high to low
    );
  };

  // Filtering based on search parameter
  const filterProducts = () => {
    return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  };

  return (
    <ProductContext.Provider value={{ products, searchTerm, darkMode, setSearchTerm, setDarkMode, fetchProducts, filterProducts, sortByRating, sortByPrice }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
