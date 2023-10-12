import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';


export default function Products() {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  
  
  const url =  `http://localhost:5000/api/products`;
  

  const fetchProducts = () => {
    axios
      .get(url)
      .then((response) => {
       
        let filteredProducts = response.data; 
        if (selectedCategory !== "all") {
          filteredProducts = response.data.filter(
            (product) => product.category === selectedCategory
          );
        }
  
        setProducts(filteredProducts);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
    setMinPrice("");
    setMaxPrice("");
  }, [selectedCategory]);

  const handlePriceFilter = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
  
    if (isNaN(min) || isNaN(max)) {
      // Si los valores ingresados no son números válidos, muestra un mensaje de error o realiza alguna otra acción.
      // Puedes usar un estado para mostrar un mensaje de error en el JSX.     
     
  return;
    }
  
    const filteredProducts = products.filter(
      (product) => product.price >= min && product.price <= max
    );
  
    
    setProducts
  setProducts(filteredProducts);
  };
  
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;
  const displayedProducts = products.slice(pagesVisited, pagesVisited + productsPerPage);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  
   
  const clearFilters = () => {
    setSelectedCategory("all");
    setMinPrice("");
    setMaxPrice("");
    // Vuelve a obtener la lista completa de productos sin filtros
    fetchProducts();
  };
  

  return (
    <div className='container'>    
      <h1 className='text-center'>Productos</h1>
      <div className='my-3 gap-5 d-flex justify-content-center'> 
        <div className='filcat'>
            <h4>Filtrado por Categoria</h4>
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                <option value="">Seleccione Categoria</option>
                <option value="all">Todos</option>
                <option value="Cafe">Cafe</option>
                <option value="Crepa Dulce">Crepa Dulce</option>
                <option value="Crepa Salada">Crepa Salada</option>
                <option value="Mini Dona">Mini Dona</option>
                <option value="Frozen">Frozen</option>
                <option value="Galletas">Galletas</option>
                <option value="Pan Dulce">Pan Dulce</option>
                <option value="Cupcakes">Cupcakes</option>
                <option value="Pasteleria">Pasteleria</option>
                <option value="Reposteria">Reposteria</option>
              </select>
        </div>
      
        <div className='filpric'>
            <h3>Filtrado por Precio</h3>
            <input
                type="number"
                placeholder="Precio mínimo"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className='w-25'
            />

            <input
                type="number"
                placeholder="Precio máximo"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className='w-25'
            />

            <button onClick={handlePriceFilter}>Filtrar</button>
            
        </div>
        <button onClick={clearFilters} className='btnclean'>Limpiar Filtros</button>
        </div>
        <div className='row my-5'>
      {displayedProducts.map((product) => (
          <div className='col-lg-3 col-md-6 col-sm-12 my-4' key={product.id}>
            <Link to={`/products/${product.id}`}>
                <div className="productcard">
                  <img src={product.imageUrl} className="img-fluid im-card" alt="Product" />
                  <div className="text-center">
                    <h5>{product.name}</h5>                                  
                    <p>{product.category}</p>  
                    <h4 className='text-danger fw-bold'>$ {product.price}</h4>                                                                                            
                  </div>
                </div>  
            </Link>
          </div>
        ))}
        <div className='my-3 d-flex justify-content-center'>
            <ReactPaginate
              previousLabel={'Anterior'}
              nextLabel={'Siguiente'}
              breakLabel={'...'}
              pageCount={Math.ceil(products.length / productsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              
            />
        </div>
      </div>
    </div>
  );
}


