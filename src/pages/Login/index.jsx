import {} from './index.css';
import BrowserTheme from '../../features/theme';

const loginButton = (
    <p>Login</p>
)

const signupButton = (
    <p>Signup</p>
)

function Login(){
    return (
        <main>
            <span class="toggleThemeSwitch">
                <BrowserTheme />
            </span>
            {loginButton}
            {signupButton}
        </main>
    )
}

export default Login;