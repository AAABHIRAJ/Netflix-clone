import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './screens/firebase';
import { useDispatch, useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from 'react';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './components/Profile';
import Videoplayer from './components/Videoplayer';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log("USER >>>", user);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch]);
  return (
    
    <div className="App">
      <Router>
        {!user ? (<LoginScreen />) : (
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/videoplayer" element={<Videoplayer />} />

        </Routes>
      )} 
      </Router>  
    </div>
    
  );
}

export default App;
