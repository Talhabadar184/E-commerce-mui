import React from 'react';

function Home1() {
  return (
    <div sx={{display:'flex',}}>
      <img 
        src="./src/assets/Home/main.jpg" 
        alt="nahh" 
        style={{     width: '60%',
            height: '550px',
            objectfit: 'cover',
            justifycontent: 'center',
            alignitems: 'center',
            display: 'flex',
            position: 'relative',
            left: '320px',
            borderRadius:'20px',
        top:'7px' }} 
      />
    </div>
    
  );
}

export default Home1;
