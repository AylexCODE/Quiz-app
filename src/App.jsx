import {} from './features/themes/theme.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageNotFound from './pages/Error/pageNotFound';
import Signup from './pages/Signup/index';
import Login from './pages/Login/index';
import Home from './pages/Home/index';

function App(){
    return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound className="background" /> } />
        <Route path="/" element={<Home className="background" />} />
        <Route path="/Login" element={<Login className="background" />} />
        <Route path="/Signup" element={<Signup className="background" />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;