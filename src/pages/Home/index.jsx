import React, { useState } from 'react';

import './index.css';

import LoadingScreen from '../../components/Loader/LoadingScreen';

import cookieFunctions from '../../features/cookie/cookie_manager';
import { Outlet, useNavigate, Link} from 'react-router-dom';

function Home(){
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    function removeSavedAccount(){
        cookieFunctions.removeCookie();
        console.log("Cookie Removed!");
    }
    
    async function isLoggedIn(){
        const savedUser = await cookieFunctions.GetCookie();
        
        if(!savedUser){
            navigate("/Login", { replace: true });
        }else{
            setIsLoading(false);
        }
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