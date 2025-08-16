import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();



  async function fetchProducts() {
      const res = await fetch(`https://fakestoreapi.com/products`);  
      const data = await res.json();
      setProducts(data);  
  }

  useEffect(() => {
    fetchProducts();
  }, []);  

  const handleview=(productId)=>
  {
    navigate(`/Home/producttile/${productId}`);;
  }
  return (
    <>
    <Typography variant="h1" align="center" gutterBottom>
    Products
  </Typography>
    <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} >
            <Box
              sx={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                overflow: 'hidden',
                textAlign: 'center',
                maxWidth: '250px',  
                margin: '0 auto',   
                cursor:'pointer',
                backgroundColor:'black'
              }}
            >
              <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ fontSize: '16px',color:'white' }}>{product.title}</Typography>
                <Typography variant="h6" sx={{ fontSize: '16px',color:'white' }}>{product.price+"$"}</Typography>
                <Button variant="contained" onClick={() => handleview(product.id)}>View</Button>
               
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );

}

export default Products;
