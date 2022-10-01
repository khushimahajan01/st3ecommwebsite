import './index.css';
import background from "./../image/loginbg.png"
import React, { useState } from 'react';


const Login=(props)=>{
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');

    function validated(){
        //  if(email.value.length < 9){
        //     email.style.border = "1px solid red";

        //     setEmail("block")
        // }
        // if (password.value.length){
        //     password.style.border = "1px solid red";

        //     setPassword("block")
        // }
         
        // if(email.value==="abcd@gmail.com" && password.value==="1234567"){
        //     setEmail("none")
        // }
        // else{
        //    alert("incorrect credentails")
        // }

        
        
      

    }


    
    
    return(
        <>
        <div className='login_outer' style={{display:props.displayer.login}}>
            <div className='login_inner'>
            <div style={{ backgroundImage: `url(${background})` }} className='login_bg'></div>
           
            <form className='container'>
                <h3>Please enter your details!</h3>
                <h1>Login</h1>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required
                value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required
                value={password} onChange={(e) => setPassword(e.target.value)}></input>


                <div className='btn_bg'>
                <button type="submit" class="btn" onClick={validated}><span>Login</span></button>
                </div>
                
                <div className='btn2_bg'> 
                <button type ="password" class="btn2">Forgot Password</button>
                
                </div>
                <div className='btn2_bg'> 
                    <div class="btn2" onClick={()=>{props.changeDisplay("home")}}>HOME</div>
                </div>
            </form>
            
        </div>
            


        </div>
        </>
    );
}
export default Login;