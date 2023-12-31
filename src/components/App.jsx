import React, { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../actions/user";
import Disk from "./disk/Disk";
function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <div className='app'>
          <Navbar/>
          <div className="wrap">

            {/* {!isAuth &&
                    <Routes>
                        <Route path="/registration" Component={Registration}/>
                        <Route path="/login" Component={Login}/>
                    </Routes> */}
            
             {!isAuth ?
              <Routes>

                <Route path="/registration" Component={Registration}/>
                <Route path="/login" Component={Login}/>
                <Route 
                  path="*"
                  element={<Navigate to="/login" replace/>}
                />

              </Routes>
              :
                <Routes>

                  <Route exact path="/" Component={Disk}/>
                  <Route 
                  path="*"
                  element={<Navigate to="/" replace/>}
                />

                </Routes>
            }

            
          </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
