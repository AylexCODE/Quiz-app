import './HeaderNavStyle.css';

import { Link, useNavigate } from 'react-router-dom';
import cookieFunctions from '../features/cookie/cookie_manager';

import QuizAppLogo from '../assets/icons/QuizAppLogo';

function Nav(props){
    const navigate = useNavigate();

    async function logOut(){
        try {
            await cookieFunctions.removeCookie();
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
                <p><QuizAppLogo /></p>
            </span>
            <span>
                <p>{props.name_initial}</p>
            </span>
        </nav>
    );
}

export default Nav;
