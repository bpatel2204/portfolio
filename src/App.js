import { useState } from 'react';
import FetchAPI from './components/FetchAPI';
import Header from './view/Header';
import ShowGrid from './view/ShowGrid';

function App() {
  const [data, setData] = useState();
  const getProduct = (product) => {
    setData(product);
  }
  return (
    <div className="App">
      <Header />
      <FetchAPI getData={getProduct} />
      <ShowGrid productData={data} />
    </div>
  );
}

export default App;
