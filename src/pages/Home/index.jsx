import {} from './index.css';

import cookieFunctions from '../../features/cookie/cookie_manager';
import { Navigate } from 'react-router-dom';

function removeSavedAccount(){
    cookieFunctions.removeCookie();
    <Navigate to="./pages/Login/index" />
    console.log("Cookie Removed!");
}

function Home(){
    async function isLoggedIn(){
        const savedUser = await cookieFunctions.GetCookie();

        if(!savedUser ){

        }
    }

    return (
        <button onClick={removeSavedAccount} >Logout</button>
    );
}

export default Home;