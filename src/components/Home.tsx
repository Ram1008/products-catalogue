import { useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext";
import Search from "./Search";
import Logo from '../assets/profilePhoto.png'
import SwitchButton from "./SwitchButton";
import Product from "./Product";
import SortFilters from "./SortFilters";

const Home: React.FC = () => {
  const { products, searchTerm, darkMode, setSearchTerm, fetchProducts, filterProducts, setDarkMode, sortByPrice, sortByRating } = useProductContext();
const filteredProducts  = filterProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={`flex flex-col px-4 py-2 gap-7 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex justify-between gap-5">
        <img className="h-[45px] w-[45px]" src={Logo} alt="logo" />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} darkMode={darkMode} />
        <SortFilters darkMode={darkMode} sortByPrice={sortByPrice} sortByRating={sortByRating} />
        <SwitchButton setDarkMode={setDarkMode}/>
      </div>
      <div className="flex flex-wrap justify-center gap-9">
        {
            filteredProducts.map(product => <Product key={product.id} product={product} darkMode={darkMode}/>)
        }
      </div>
    </div>
  );
};

export default Home;
