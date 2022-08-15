import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./LoginScreen.css";
import SignupScreen from './SignupScreen';


function LoginScreen() {
    const [signin, setSignin] = useState(false);
    const [hidebutton, setHidebutton] = useState(false);

    const handleGetStarted = () => {
        setSignin(true);
        setHidebutton(true);
    }

    return (
        
        <div className='loginscreen'>
            
                
                    
            <div className='loginscreen__background'>
                <Link to="/">
                    <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png'
                    className='loginscreen__logo'
                    />
                </Link>
                    
                {!hidebutton && <button onClick={handleGetStarted} type='submit'>Sign In</button>}
                
                <div className='loginscreen__height' />
          
          </div>
          
            <div className='loginscreen__body'>
                
                {signin ? <SignupScreen /> :
                    <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <form className='loginscreen__bodyform'>
                            <input type="email" placeholder="Email address" />  
                            <button onClick={handleGetStarted}  type='submit'>Get Started</button>
                        </form>  
                    </>
                }
                    
                       
                   
            

            
          </div>
                    
                
         
          
    </div>
      
  )
}

export default LoginScreen;
