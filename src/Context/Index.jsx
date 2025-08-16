import {createContext,useState,useEffect} from 'react'
export const GlobalContext=createContext(null);

export default function GlobalState({children}) {
  const [cartList, setcartlist] = useState(() => {
    const savedCart = localStorage.getItem('cartList');
    return savedCart ? JSON.parse(savedCart) : []; 
  });

  function handleAddToCart(product)
  {
  
    console.log(product);
    let cpycartList = [...cartList];
    const index = cpycartList.findIndex(item=> item.id === product.id)
    if(index === -1) {  
      alert("Added to cart");
      cpycartList.push(product)
    } else {
      alert("already present");
    }

    setcartlist(cpycartList)
  }
  useEffect(() => {
    localStorage.setItem('cartList', JSON.stringify(cartList));
  }, [cartList]);
  

  function handleRemoveToCart(product)
  {
    let cpycartList = [...cartList];
    const index = cpycartList.findIndex(item => item.id === product.id);

    if (index !== -1) {
      cpycartList.splice(index, 1); 
    }

    setcartlist(cpycartList); 
  }
  return (
    <GlobalContext.Provider  value={{handleRemoveToCart,handleAddToCart,cartList}} >{children}</GlobalContext.Provider>
  )
}

