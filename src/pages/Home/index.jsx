import React, { useState } from 'react';

import './index.css';

import LoadingScreen from '../../components/Loader/LoadingScreen';
import Nav from '../../components/HeaderNav';

import cookieFunctions from '../../features/cookie/cookie_manager';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';

function Home(){
    const [isLoading, setIsLoading] = useState(true);

    const userInfo = useLocation();
    const navigate = useNavigate();
    function removeSavedAccount(){
        cookieFunctions.removeCookie();
        console.log("Cookie Removed!");
    }
    
    async function isLoggedIn(){
        const savedUser = await cookieFunctions.GetCookie();
        
        setTimeout(() => {
            if(!savedUser){
                if(userInfo.state){
                    setIsLoading(false);
                }else{
                    navigate("/Login", { replace: true, state: "FromHome" });
                }
            }else{
                setIsLoading(false);
            }
        }, 2000);
    }

    isLoggedIn();

    const logOutButton = (
        <>
        <button onClick={removeSavedAccount} ><Link to="/Login" replace>Logout</Link></button>
        <Outlet />
        </>
    );

    return (
        <main>
        {isLoading === false ? (
            <>
            <Nav />
            <div className="loadingScreen"></div>
            {logOutButton}
            </>
        ) : (
            <LoadingScreen />
        )}
        </main>
    );
}

export default Home;