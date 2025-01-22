import {} from './features/themes/theme.css';

import cookieFunctions from './features/cookie/cookie_manager';

import Signup from './pages/Signup';
import Login from './pages/Login/index';
import Home from './pages/Home';

const username = await cookieFunctions.GetCookie();

function App(){
    if(username){
        return (
            <Home className="background" />
        )
    }else{
        return (
            <Login className="background" />
        );
    }
}

export default App;