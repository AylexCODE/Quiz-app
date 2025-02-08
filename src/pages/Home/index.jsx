import React, { useState } from 'react';

import HomeStyle from './index.module.css';

import LoadingScreen from '../../components/Loader/LoadingScreen';
import Border from '../../components/Border.module.css';
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
            <div className={HomeStyle.wrapper}>
                <button className={Border.buttonBorder}>
                    Multiple Choice
                    <span>
                        Everyones favorite type of test.
                    </span>
                </button>
                <button className={Border.buttonBorder}>
                    Two Truths and One Lie
                    <span>
                        Identify which one is a lie.
                    </span>
                </button>
                <button className={Border.buttonBorder}>
                    Enumeration
                    <span>
                        Specify the expected number of answers.
                    </span>
                </button>
                <button className={Border.buttonBorder}>
                    True or False
                    <span>
                        Determine whether a statement is correct.
                    </span>
                </button>
            </div>
            {/* {logOutButton} */}
            </>
        ) : (
            <LoadingScreen />
        )}
        </main>
    );
}

export default Home;