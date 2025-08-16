import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../Context/Index.jsx';
import { Container, Typography, Box, Button } from '@mui/material';
import plusIcon from '../assets/Producttile/plus.png';
import minusIcon from '../assets/Producttile/minus.png';

function Cart() {
  const { cartList } = useContext(GlobalContext);
  const { handleRemoveToCart } = useContext(GlobalContext);

  const [quantities, setQuantities] = useState(() =>
    cartList.reduce((acc, item) => {
      acc[item.id] = 1; // Initialize each item's quantity to 1
      return acc;
    }, {})
  );

  const handleAddToQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] ) + 1,  // Ensuring it remains a number
    }));
  };

  const handleSubtractFromQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,  // Decrease or keep at 1
    }));
  };

  // total amount function
  const calculateTotalAmount = () => {
    return cartList.reduce((total, item) => {
      return total + item.price * quantities[item.id];
    }, 0);
  };

  const placed = () => {
    confirm("Your order is placed");
  };


  return (
    <Container sx={{ backgroundColor: 'black', color: 'white' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Cart
      </Typography>
      {cartList.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <ul>
            {cartList.map((item) => (
              <Container
                key={item.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100px', height: '100px', marginRight: '20px' }}
                />
                <div>
                  <Typography variant="h6">{item.title}</Typography>
                  
                  {/* Updated price displayed based on quantity */}
                  <Typography variant="body1">
                    Price per item: ${item.price}
                  </Typography>

                  <Typography
                    sx={{ fontSize: '16px', color: 'white', marginTop: '30px' }}
                  >
                    Quantity: {quantities[item.id]} 
                  </Typography>

                  {/* Increase quantity  */}
                  <Button onClick={() => handleAddToQuantity(item.id)}>
                    <Box
                      component="img"
                      src={plusIcon}
                      alt="plus-icon"
                      sx={{ height: '20px' }}
                    />
                    Add
                  </Button>

                  {/* Decrease quantity  */}
                  <Button onClick={() => handleSubtractFromQuantity(item.id)}>
                    <Box
                      component="img"
                      src={minusIcon}
                      alt="minus-icon"
                      sx={{ height: '20px' }}
                    />
                    Remove
                  </Button>

                  {/* Remove    */}
                  <Button
                    variant="contained"
                    sx={{ marginTop: '20px' }}
                    onClick={() => handleRemoveToCart(item)}
                  >
                    Remove from Cart
                  </Button>

                  {/* Product total  */}
                  <Typography variant="body1" sx={{ marginTop: '10px' }}>
                    Total for {item.title}: ${(item.price * quantities[item.id]).toFixed(2)}
                  </Typography>
                </div>
              </Container>
            ))}
          </ul>

          {/*  total amount    */}
          <Typography variant="h5" sx={{ marginTop: '100px' }}>
            Overall Total: ${calculateTotalAmount().toFixed(2)}
          </Typography>
          <Button variant='contained' onClick={()=>placed()}>Place Oreder</Button>
        </>
      )}
    </Container>
  );
}

export default Cart;
