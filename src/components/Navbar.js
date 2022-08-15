import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";



function Navbar() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])

  return (
    <div className= {`navbar ${show && 'navbar__black'}`}>
      <div className='navbar__img'>
              <img 
                  onClick={() => navigate("/")}
                  className='netflix__logo'
                  src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                  alt=''
              />
              <img
                  onClick={() => navigate("/profile")}  
                  className='avatar__logo'
                  src='https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png'
                  alt=''
              />
      </div>
    </div>
  )
}

export default Navbar
