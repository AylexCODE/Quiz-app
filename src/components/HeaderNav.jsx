import './HeaderNavStyle.css';
import MenuBurgerBar from '../vendor/components/MenuBar'

import { Link, useNavigate } from 'react-router-dom';

import cookieFunctions from '../features/cookie/cookie_manager';

function Nav(){
    const navigate = useNavigate();

    async function logOut(){
        try {
            await cookieFunction.removeCookie();
        } catch(noCookie){}
        navigate("/", { replace: true });
    }

    const LogOutButton = (
        <>
        <button onClick={logOut}>Logout</button>
        </>
    )

    return (
        <nav>
            <span>
                <p>Logo</p>
            </span>
            <span>
                <MenuBurgerBar />
                {LogOutButton}
            </span>
        </nav>
    );
}

export default Nav;
