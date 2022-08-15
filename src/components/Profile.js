import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Navbar from './Navbar';
import "./Profile.css";
import { signOut } from "firebase/auth";
import { auth } from "../screens/firebase";

function Profile() {
    const user = useSelector(selectUser);

    return ( 
    <div className='profile'>
          <Navbar />
          <div className='profile__body'>
              <h1>Edit Profile</h1>
              <div className='profile__specs'>
                  <img 
                      className='profile__logo'
                      src='https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png'
                      alt='Profile__Logo'
                  />
                  <div className='profile__specsRight'>
                      <p className='profile__email'>{user.email}</p>
                      <h2 className='profile__currentPlan'>Plans (Current Plan...)</h2>
                      <h4 className='profile__renewal'>Renewal date: 15/08/2022</h4>
                      <div className='profile__planDetails'>
                          <div className='custom__plans'>
                              <div className='custom__plan'>
                                  <strong>Netflix Standard</strong>
                                  <p>480p</p>
                              </div>
                              <button type='submit'>Subscribe</button>
                          </div>
                          <div className='custom__plans'>
                              <div className='custom__plan'>
                                  <strong>Netflix Basic</strong>
                                  <p>480p</p>
                              </div>
                              <button type='submit'>Subscribe</button>
                          </div>
                          <div className='custom__plans'>
                              <div className='custom__plan'>
                                  <strong>Netflix Premium</strong>
                                  <p>1080p</p>
                              </div>
                              <button type='submit'>Subscribe</button>
                          </div>                       
                      </div>
                        <button onClick={() => {signOut(auth)}} type='submit'>Sign out</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Profile;
