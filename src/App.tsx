import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import Product from "./components/Product/Product";
import ProductInfo from "./components/ProductInformation/ProductInfo";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto max-md:p-1">
      <Header />
      <Product />
      <ProductInfo />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
