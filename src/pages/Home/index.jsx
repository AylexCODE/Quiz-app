import {} from './index.css';

import cookieFunctions from '../../features/cookie/cookie_manager';
import { Outlet, useNavigate, Link} from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
    function removeSavedAccount(){
        cookieFunctions.removeCookie();
        console.log("Cookie Removed!");
    }
    
    async function isLoggedIn(){
        const savedUser = await cookieFunctions.GetCookie();
        
        if(!savedUser){
            navigate("./Login");
        }
    }

    isLoggedIn();

    const logOutButton = (
        <>
        <button onClick={removeSavedAccount} ><Link to="./Login">Logout</Link></button>
        <Outlet />
        </>
    );

    return (
        <main>
            <div className="loadingScreen"></div>
            {logOutButton}
        </main>
    );
}

export default Home;