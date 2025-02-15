import React, { useState } from 'react';

import HomeStyle from './index.module.css';

import LoadingScreen from '../../components/Loader/LoadingScreen';
import Border from '../../components/Border.module.css';
import Nav from '../../components/HeaderNav';
import MultipleChoiceIcon from '../../assets/icons/MultipleChoice';
import TruthAndLieIcon from '../../assets/icons/TruthAndLie';
import EnumerationIcon from '../../assets/icons/Enumeration';
import TrueOrFalseIcon from '../../assets/icons/TrueOrFalse';

import cookieFunctions from '../../features/cookie/cookie_manager';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';

function removeSavedAccount(){
    cookieFunctions.removeCookie();
    console.log("Cookie Removed!");
}

function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState("");

    const userInfo = useLocation();
    const navigate = useNavigate();
    
    async function isLoggedIn(){
        let savedUser = await cookieFunctions.GetCookie();
        
        setTimeout(() => {
            if(!savedUser){
                savedUser = userInfo.state;
                if(savedUser){
                    setCurrentUser(savedUser[0]);
                    setIsLoading(false);
                }else{
                    navigate("/Login", { replace: true, state: "FromHome" });
                }
            }else{
                setCurrentUser(savedUser[0]);
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
            <Nav name_initial={currentUser} />
            <div className={HomeStyle.wrapper}>
                <button className={Border.buttonBorder} onClick={() => navigate("/MultipleChoices", { replace: true })}>
                    <MultipleChoiceIcon />
                    <p>Multiple Choice</p>
                    <span>
                        Everyones favorite type of test.
                    </span>
                </button>
                <button className={Border.buttonBorder} onClick={() => navigate("/TruthAndLie", { replace: true })}>
                    <TruthAndLieIcon />
                    <p>2 Truths 1 Lie</p>
                    <span>
                        Identify which one is a lie.
                    </span>
                </button>
                <button className={Border.buttonBorder} onClick={() => navigate("/Enumeration", { replace: true })}>
                    <EnumerationIcon />
                    <p>Enumeration</p>
                    <span>
                        Specify the expected number of answers.
                    </span>
                </button>
                <button className={Border.buttonBorder} onClick={() => navigate("/TrueOrFalse", { replace: true })}>
                    <TrueOrFalseIcon />
                    <p>True or False</p>
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
