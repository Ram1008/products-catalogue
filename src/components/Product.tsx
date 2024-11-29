import React from 'react';
import {Product as ProductType} from "../types/product"

interface ProductPropeType {
    product: ProductType;
    darkMode: boolean;
}

const Product: React.FC<ProductPropeType> = React.memo(({product, darkMode}) => {
    return (
      <div className={`w-full flex flex-col align-center max-w-sm border rounded-lg shadow ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
          <img className="p-8 rounded-t-lg h-[250px] object-contain" src={product.image} alt="product image" />
          <div className="px-5 pb-5">
              <a href="#">
                  <h5 className={`text-xl font-semibold tracking-tight ${darkMode ? 'text-white': 'text-gray-900' }`}>{product.title}</h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
              <div
                  className="Stars inline-block text-transparent font-Times text-[var(--star-size)] leading-none"
                  style={{
                      "--rating": product.rating.rate,
                  }}
                  />
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating.rate}</span>
              </div>
              <div className="flex items-center justify-between">
                  <span className={`text-2xl font-bold ${darkMode ? 'text-white': 'text-gray-900' }`}>$ {product.price}</span>
              </div>
          </div>
      </div>
    );
  });
  

export default Product