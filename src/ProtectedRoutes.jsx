import { useEffect, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
const ProtectedRoutes=({isLogin,setIsLogin})=>{
    const location=useLocation();

    
    useEffect(()=>{
        const token=localStorage.getItem('token');
        if(token!==null){
            setIsLogin(true)
        }else{
            setIsLogin(false);
        }

    },[isLogin]);
   
if(!isLogin){
return <Navigate to="/login" state={{from:location}}/>


}

return <Outlet/>

}
export default ProtectedRoutes;