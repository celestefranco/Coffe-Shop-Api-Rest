import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsItems } from '../assets/js/productsItems'; 


export default function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [quantity, setQuantity] = useState(1);
  

  useEffect(() => {
      const productFromAPI = productsItems.find((p) => p.id == id);

    if (productFromAPI) {
      setProduct(productFromAPI);
    }
  }, [id]);
  
  if (!product) {
    return <div>Loading...</div>; 
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleAddToCart = () => {
    // Aquí puedes implementar la lógica para agregar el producto al carrito.
    // Puedes utilizar el estado `quantity` para saber cuántos productos se agregarán.
  };

  return (
    <div className='container'>
      <h2 className='text-center my-4'>Detalles del Producto</h2>
        <div className='row my-5'>
            <div className='col-lg-4 col-md-6 col-sm-12 my-4'>
                <img src={product.imageUrl} alt={product.name} className={`improd ${isZoomed ? 'zoomed' : ''}`}
                    onClick={toggleZoom}/>
            </div>
            <div className='col-lg-8 col-md-6 col-sm-12 my-5'>
                <h3>{product.name}</h3>
                <p>Categoría: {product.category}</p>
                <p>{product.description}</p>
                <p className='fs-5 fw-bold'>Precio: $ {product.price}</p>                   
       
               <div>
                            <p>Cantidad:</p>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className='quan'
                            />
                            <button onClick={handleAddToCart} className='btn-cart'>Añadir al carrito</button>
                        </div>
                    
                 </div>
           </div>
    </div>
  );
}
