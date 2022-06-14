
import * as React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";


import { LoginScreen } from '../login/LoginScreen';
import { Dashboard } from "./Dashboard";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";




export const AppRouter = () => {
  return (
    
    <BrowserRouter>   
    <Routes>
    
    <Route path="/login" element = {
      <PublicRoute>
        <LoginScreen/>
      </PublicRoute>
    } />

     <Route path="/*" element={      
      
      <PrivateRoutes>
            <Dashboard/>
      </PrivateRoutes>

     } />
    </Routes>
    </BrowserRouter>  

  )
}

