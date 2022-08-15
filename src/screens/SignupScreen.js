import React, { useRef } from 'react';
import "./SignupScreen.css";
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(
            auth, 
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
                console.log(authUser);
            }
        ).catch((error) => {
            alert(error.message);
        })
    }

    const register = () => {

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
                console.log(authUser);
        }).catch(
            (error) =>{ alert(error.message)}
        )

    }

    return (
      

      <div className='signupscreen'>
          <div className='signupscreen__body'>
             
              <form>
                  <h1>Sign In</h1>
                  <input ref={emailRef} type="email" placeholder="Email or phone number" />
                  <input ref={passwordRef} type="password" placeholder="Password" />
                  <button onClick={signIn} type="submit" >Sign In</button>
                  <div className="form__info">
                      <div className='form__infoCheckbox'>
                            <input type="checkbox" />
                          <span>Remember me</span>
                     </div>
                      <p>Need help?</p>
                  </div>

                  <p>New to Netflix?  <span onClick={register} className='signupscreen__link'>Sign up now.</span>
                      
                    </p>
                </form>

          </div>

    </div>
  )
}

export default SignupScreen;
