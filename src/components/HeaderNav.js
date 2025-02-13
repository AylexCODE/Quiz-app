import './HeaderNav.css';
import MenuBurgerBar from '../vendor/components/MenuBar'

import { Link, useNavigate } from 'react-router-dom';

import cookieFunctions from './features/cookie/cookie_manager';

function Nav(){
    const navigate = useNavigate();

    async function logOut(){
        await cookieFunction.removeCookie();

        navigate("/Login", { replace: true });
    }

    return (
        <nav>
            <span>
                <p>Logo</p>
            </span>
            <span>
                <MenuBurgerBar />
                <button onClick={logOut}>Logout</button>
            </span>
        </nav>
    );
}

export default Nav;
