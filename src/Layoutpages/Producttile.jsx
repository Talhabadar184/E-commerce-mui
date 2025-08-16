import React, { useContext, useState, useEffect } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context/Index';
import Navbar from '../components/navbar';


function Producttile() {
  const navigate = useNavigate(); 
  const { handleAddToCart } = useContext(GlobalContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  

  const fetchProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);  

  return (
    <>
      <Navbar />
      <Container sx={{ borderRadius: '20px', backgroundColor: 'black', padding: '50px', color: 'white', display: 'flex', gap: '40px' }}>
        <img
          src={product?.image}
          alt={product?.title}
          style={{ height: '300px' }}
        />
        <Container>
          <Typography>
            Product Details for ID: ${product?.id}
          </Typography>
          <Typography>
            {product?.title}
          </Typography>
          <Typography>
            Price: ${product?.price}
          </Typography>
          <Typography>
            {product?.description}
          </Typography>
          <Button variant="contained" sx={{ marginTop: '20px' }} onClick={() => handleAddToCart(product)}>
            Add To Cart
          </Button>
         
        </Container>
      </Container>
    </>
  );
}

export default Producttile;
