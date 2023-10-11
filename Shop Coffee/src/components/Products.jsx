import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);
  
  const url =  `http://localhost:5000/api/products`;
 

  const fetchProducts = () => {
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);    
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='container'>    
      <h1 className='text-center'>Products</h1> 
      <div className='row my-5'>
        {products.map((product) => (
          <div className='col-lg-3 col-md-6 col-sm-12 my-4' key={product.id}>
            <div className="productcard">
              <img src={product.imageUrl} className="img-fluid im-card" alt="Product" />
              <div className="text-center">
                <h5>{product.name}</h5>                                  
                <p>{product.category}</p>  
                <h4 className='text-danger fw-bold'>$ {product.price}</h4>                                                                                            
              </div>
            </div>  
          </div>
        ))}
      </div>
    </div>
  );
}


