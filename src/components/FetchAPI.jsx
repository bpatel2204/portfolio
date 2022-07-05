import React, { useState, useEffect } from 'react';


const FetchAPI = (props) => {
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setProduct(data);
    })
    .catch(err => console.log(err));
  }, [])
  useEffect(() => {
    product &&
    props.getData(product)
  }, [product]);
  return (
    <>
    </>
  )
}

export default FetchAPI;
