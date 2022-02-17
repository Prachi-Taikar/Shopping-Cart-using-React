import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {

  const productList =[
    {
      price : 99999,
      name : "IPhone",
      quantity: 0,
    },
    {
      price : 9999,
      name : "Redmi",
      quantity: 0,
    }
  ]

  return (
    <>
    <Navbar/>
    
    <main className= "container mt-5">
    <ProductList productList={productList} />
    </main>

    {/* <Footer/> */}
    </>
  );
}

export default App;
