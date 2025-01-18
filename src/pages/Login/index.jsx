import {} from './index.css';

const loginButton = (
    <p>Login</p>
)

const signupButton = (
    <p>Signup</p>
)

function Login(){
    return (
        <main>
            {loginButton}
            {signupButton}
        </main>
    )
}

export default Login;