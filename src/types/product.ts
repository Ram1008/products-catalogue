export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: { rate: number; count: number };
  }
  
  export interface ProductContextType {
    products: Product[];
    searchTerm: string;
    darkMode: boolean;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    fetchProducts: () => Promise<void>;
    filterProducts: () => Product[];
    sortByPrice: (flag: boolean) => void;
    sortByRating: () => void;
  }
  