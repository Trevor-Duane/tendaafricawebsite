import React, {useState, useEffect} from 'react';
import axios from 'axios'

function ProductApi() {
    const [products, getProduct] = useState('');

    const url ='http://localhost:1337/api/';

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = () => {
        axios.get(`${url}products`)
        .then((response) => {
            const allProducts = response.data.posts.allProducts;
            getProduct(allProducts);
        })
        .catch(error => console.log(`Error: ${error}`));
    }
  return (
    <div>{products}</div>
  )
}

export default ProductApi