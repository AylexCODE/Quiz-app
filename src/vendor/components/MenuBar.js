import MenuBarStyle from './MenuBar.module.css';

function MenuBurgerBar(){
    // by Jason21403019
    return ( 
        <div class={MenuBarStyle.hamburgers}>
        <label class={MenuBarStyle.hamburger}>
            <input type="checkbox" />
            <span class={MenuBarStyle.bar}></span>
            <span class={MenuBarStyle.bar}></span>
            <span class={MenuBarStyle.bar}></span>
        </label>
        </div>
    )
}

export default MenuBurgerBar;