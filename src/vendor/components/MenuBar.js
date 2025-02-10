import MenuBarStyle from './MenuBar.module.css';

function MenuBurgerBar(){
    // by Jason21403019
    return ( 
        <div className={MenuBarStyle.hamburgers}>
        <label className={MenuBarStyle.hamburger}>
            <input type="checkbox" />
            <span className={MenuBarStyle.bar}></span>
            <span className={MenuBarStyle.bar}></span>
            <span className={MenuBarStyle.bar}></span>
        </label>
        </div>
    )
}

export default MenuBurgerBar;