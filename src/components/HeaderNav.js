import './HeaderNav.css';
import MenuBurgerBar from '../vendor/components/MenuBar'

function Nav(){
    return (
        <nav>
            <span>
                <p>Logo</p>
            </span>
            <span>
                <MenuBurgerBar />
            </span>
        </nav>
    );
}

export default Nav;