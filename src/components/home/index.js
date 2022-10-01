import './index.css';

import Navbar from './../navbar';
import React, { useState,useEffect } from 'react';

import instagramlogo from './../image/Instagram-Logo.png';
import twitterlogo from './../image/twitterlogo.jpg';
import facebooklogo from './../image/Facebook-logo.png';
import LoadingScreen from './../loadingScreen/index';

const Home=(props)=>{

     const[infodisplayer,setInfoDisplayerId]=useState()
     const[count,setCount]=useState(0)

     
     
  



  return (
    <>
    <div className="home__outer" style={{display:props.displayer.home}}>
        <div className="home__inner">
            <Navbar displayer={props.displayer} changeDisplay={props.changeDisplay}/>
            <div className="home__inner__display">
                <div className="home__inner__display__heading">
                    Women☕
                </div>
                <div className="home__inner__display__content">
                  {
                    props.loadingWomen ? (
                        <div className='loading__outer'>
                            <LoadingScreen/>    
                        </div>
                        
                    ):(
                    props.women.map((ele)=>{
                      const{id,image,description,rating,price,title}=ele;
                      if(infodisplayer===id)
                      {
                        return(
                            <div className="card_outer">
                              <div className="card_image_one">
                                <img src={image} style={{width:"100%",height:"100%"}}/>
                              </div> 
                              <div className="title">
                                {title}
                              </div>
                              <div className="card_price">
                                Price: $ {price}
                              </div>
                              <div className="info_add_cart">
                                <div className="card_info" onClick={()=>{setInfoDisplayerId(id)}}>Info</div>
                                <div className="cart_but" onClick={()=>{props.addToCart(id,1)}}>Add to Cart</div>
                              </div>
                              <div className='info_text' style={{display:infodisplayer}}>

                                
                                <div className='list_details'>
                                  {description}
                                </div>
                                
                              </div>
                                
                            </div>
                        )
                      }
                      else{
                        return(
                          <div className="card_outer">
                            <div className="card_image_one">
                              <img src={image} style={{width:"100%",height:"100%"}}/>
                            </div> 
                            <div className="title">
                              {title}
                            </div>
                            <div className="card_price">
                              Price: $ {price}
                            </div>
                            <div className="info_add_cart">
                              <div className="card_info" onClick={()=>{setInfoDisplayerId(id)}}>Info</div>
                              <div className="cart_but"  onClick={()=>{props.addToCart(id,1)}}>Add to Cart</div>
                            </div>
                            <div className='info_text' style={{display:infodisplayer}}>
                              
                              
                              
                            </div>
                              
                          </div>
                        )
                      }
                      
                    })
                    )
                  }              
                </div>
                <div className='home__inner__display__heading2'>
                  Men☕
                </div>
                <div className="home__inner__display__content2">
                  {
                    props.loadingMen ? (
                        <div className='loading__outer'>
                            <LoadingScreen/>    
                        </div>
                        
                    ):(
                    props.men.map((ele)=>{
                      const{id,image,description,rating,price,title}=ele;
                      if(infodisplayer===id)
                      {
                        return(
                            <div className="card_outer">
                              <div className="card_image_one">
                                <img src={image} style={{width:"100%",height:"100%"}}/>
                              </div> 
                              <div className="title">
                                {title}
                              </div>
                              <div className="card_price">
                                Price: $ {price}
                              </div>
                              <div className="info_add_cart">
                                <div className="card_info" onClick={()=>{setInfoDisplayerId(id)}}>Info</div>
                                <div className="cart_but" onClick={()=>{props.addToCart(id,1)}}>Add to Cart</div>
                              </div>
                              <div className='info_text' style={{display:infodisplayer}}>

                                
                                <div className='list_details'>
                                  {description}
                                </div>
                                
                              </div>
                                
                            </div>
                        )
                      }
                      else{
                        return(
                          <div className="card_outer">
                            <div className="card_image_one">
                              <img src={image} style={{width:"100%",height:"100%"}}/>
                            </div> 
                            <div className="title">
                              {title}
                            </div>
                            <div className="card_price">
                              Price: $ {price}
                            </div>
                            <div className="info_add_cart">
                              <div className="card_info" onClick={()=>{setInfoDisplayerId(id)}}>Info</div>
                              <div className="cart_but" onClick={()=>{props.addToCart(id,1)}}>Add to Cart</div>
                            </div>
                            <div className='info_text' style={{display:infodisplayer}}>
                              
                              
                              
                            </div>
                              
                          </div>
                        )
                      }
                      
                    })
                    )
                  }
                </div>
               
            </div>
            
        </div>
        <div className='footer_basic'>
        <footer>
            <div class="social">
              <img src={instagramlogo} className='instalogo'></img>
              <img src={twitterlogo} className='twitterlogo'></img>
              <img src={facebooklogo} className='facebooklogo'></img>
              
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Fashion Street © 2022</p>
        </footer>
        </div>
        
    </div>
    
    </>
  );
}

export default Home;