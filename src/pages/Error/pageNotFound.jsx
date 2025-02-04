import './pageNotFound.css';

import { useNavigate } from 'react-router-dom';

function ErrorPage(){
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/", { replace: true });
    }, 5000);

    return (
        <main className="pageNotFoundError">
            <p><span className="errorText">404</span>Error Page Not Found!</p>
        </main>
    );
}

export default ErrorPage;