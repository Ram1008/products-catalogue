import Home from "./components/Home";
import {ProductProvider} from './contexts/ProductContext';
const App = () => {
  return (
    <ProductProvider>
      <Home/>
    </ProductProvider>
  )
}

export default App;