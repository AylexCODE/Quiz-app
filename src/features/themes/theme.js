import ToggleTheme from "../../vendor/components/ThemeSwitch";

const storedTheme = localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.querySelector("body").setAttribute('data-theme', storedTheme);

let currentTheme = storedTheme === 'dark' ? true : false;

function BrowserTheme(){
    return (
        <ToggleTheme isDark={currentTheme} />
    )
}

export default BrowserTheme;