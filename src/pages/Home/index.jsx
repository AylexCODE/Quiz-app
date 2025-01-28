import {} from './index.css';

import cookieFunctions from '../../features/cookie/cookie_manager';
import { Outlet, Navigate, Link} from 'react-router-dom';

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
        <>
        <button onClick={removeSavedAccount} ><Link to="./pages/Login/index" >Logout</Link></button>
        <Outlet />
        </>
    );
}

export default Home;