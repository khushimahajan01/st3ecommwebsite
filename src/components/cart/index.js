import './index.css';
import add from './../add.svg';
import sub from './../sub.svg';
import Navbar from './../navbar';
import { useState } from 'react';

const Cart=(props)=>{



  


  return (
    <>
    <div className="home__outer" style={{display:props.displayer.cart}}>
       
            <Navbar displayer={props.displayer} changeDisplay={props.changeDisplay}/>
            <div className='cart__inner_display'>
              <div className='cart__inner_display_heading'>
                Cart🛍
              </div>
              <div className='cart__inner'>
                <div className='cart__left'>
                  {
                    props.cart.map((ele)=>{
                      
                      return(
                        <div class="cart__card">
                          <div class="cart__img">
                            <img src={ele.image} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                          </div>
                          <div class="cart__name">
                            {ele.title}
                          </div>
                          <div class="cart__rating">
                            Price : $ {ele.price}
                          </div>
                          <div class="cart__rating">
                            Rating : {ele.rate}
                          </div>
                          <div class="cart__count">
                            <div class="cart__count__dec" onClick={()=>{props.removeCart(ele.id)}}>
                              <img src={sub} style={{width:"100%",height:"100%",borderRadius:"50%"}} />
                            </div>
                            <div class="cart__count__cout">
                                {ele.count}
                            </div>
                            <div class="cart__count__dec" onClick={()=>{props.addToCart(ele.id,0)}} >
                              <img src={add} style={{width:"100%",height:"100%",borderRadius:"50%"}} />
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                  <div className='cart__right'>
                    <div class="cart__heading">
                          Quantity
                      </div>
                      <div class="cart__right__top" id="total_qunat">
                        {props.quant}
                      </div>
                      <div class="cart__heading">
                          Total Amount
                      </div>
                      <div class="cart__right__top" id="total_id">
                        {props.total}
                      </div>
                      <div class="cart__checkout">
                          Checkout
                      </div>
                    </div>
                </div>
                
            </div>
       
    </div>
    </>
  );
}

export default Cart;