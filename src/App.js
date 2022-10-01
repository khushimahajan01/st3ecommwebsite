
import './App.css';
import Home from './components/home';
import Cart from './components/cart';
import Login from './components/login';
import Axios from 'axios';
import React, { useState,useEffect } from 'react';



const Khushi=(props)=>{
  const[all,setAll]=useState();
  const[women,setWomen]=useState([<></>]);
  const[men,setMen]=useState([<></>]);
  const[loadingMen,setLoadingMen]=useState(true);
  const[loadingWomen,setLoadingWomen]=useState(true);
  const[cart,setCart]=useState([]);
  const[quant,setQuant]=useState(0)
  const[total,setTotal]=useState(0)

  function getTotal(li)
  {
    var val=0;
    for(var i=0;i<li.length;i++)
    {
      val=val+li[i].price*li[i].count;
    }
    setTotal(val.toFixed(2));
  }
  function getQuant(li)
  {
    var val=0;
    for(var i=0;i<li.length;i++)
    {
      val=val+li[i].count;
    }
    setQuant(val);
  }


  function addToCart(id,setter)
  {
    if(setter===1)
    {
      id=id-1;
    }
    var li=[...cart];
    var flag=0;
    for(var i=0;i<li.length;i++)
    {
      if(li[i].id===id)
      {
        var val=li[i].count
        li[i].count=val+1
        flag=1;
        break
      }
    }
    if(flag===0)
    {
      li.push({id:id,title:all[id].title,image:all[id].image,rate:all[id].rating.rate,price:all[id].price,count:1});
    }
    getTotal(li);
    getQuant(li);
    setCart(li);
  }
  function removeCart(id)
  {
    var li=[...cart];
    var flag=0;
    for(var i=0;i<li.length;i++)
    {
      if(li[i].id===id)
      {
        var check=li[i].count;
        if(check===1)
        {
          li.splice(i,1); 
          flag=1;
          break;
        }
        else
        {
          li[i].count=parseInt(check)-1;
          break
        }
        
      }
    }
    getTotal(li);
    getQuant(li);
    setCart(li);
  }


  function filterData(li)
  { 
    var lis1=[];
    var lis2=[]; 
    for(var i=0;i<li.length;i++)
    {
      if(li[i].category==="men's clothing")
      {
        lis1.push(li[i])
      }
      else if(li[i].category==="women's clothing")
      {
        lis2.push(li[i])
      }
    }
    setWomen(lis2)
    setMen(lis1)
    setLoadingMen(false)
    setLoadingWomen(false)
  }

  useEffect(() => {
    Axios.get('https://fakestoreapi.com/products',
    {
      // console
    }).then((res)=>{
      filterData(res.data);
      setAll(res.data);
    })
  }, []);
  
  const[displayer,setDisplayer]=useState({
                                          home:"block",
                                          cart:"none",
                                          login:"none",              
  })

  function changeDisplay(x)
  {
    if(x==="home")
    {
      setDisplayer({home:"block",cart:"none",login:"none"})
    }
    else if(x==="cart")
    {
      setDisplayer({home:"none",cart:"block",login:"none"})
    }
    else if(x==="login"){
      setDisplayer({login:"block",cart:"none",home:"none"})
    }
  }

  return (
    <>
      <Home all={all} addToCart={addToCart} women={women} men={men} loadingMen={loadingMen} loadingWomen={loadingWomen} displayer={displayer} changeDisplay={changeDisplay}/>
      <Cart quant={quant} total={total} removeCart={removeCart} addToCart={addToCart} cart={cart}all={all}  displayer={displayer} changeDisplay={changeDisplay}/>
      <Login displayer={displayer} changeDisplay={changeDisplay}/>
    </>
    
  );
}

export default Khushi;
