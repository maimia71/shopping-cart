import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Cart from './components/Cart';


function App() {

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');

  useEffect(() => {
    fetch(
      "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "543abe539dmshe8a43e180ee7ca0p18dc84jsn93d25aa337c5",
          "x-rapidapi-host": "asos2.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (

    <div className="App">

      <Header cart={cart} changePage={page => setPage(page)} />

      {page === 'products' && (
        <>
          <Body products={products} addToCart={product => setCart([...cart, product])} />
        </>
      )}


      {page === 'carts' && (
        <>
          <Cart cart={cart} removeFromCart={(productToRemove) => setCart(cart.filter(product => product !== productToRemove))} />
        </>
      )}

    </div>
    
  );
}

export default App;
