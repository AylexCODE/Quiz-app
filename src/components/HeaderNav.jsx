import './HeaderNavStyle.css';

import { useNavigate } from 'react-router-dom';
import cookieFunctions from '../features/cookie/cookie_manager';

import QuizAppLogo from '../assets/icons/QuizAppLogo';
import Border from './Border.module.css';

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
                <QuizAppLogo />
            </span>
            <span>
                <input type="checkbox" id="userInitial" onChange={(e) => {console.log("E")}}/>
                <label className={Border.buttonBorder +" initialName"} htmlFor="userInitial">{props.name_initial}</label>
            </span>
        </nav>
    );
}

export default Nav;
