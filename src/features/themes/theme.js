import ToggleTheme from "../../vendor/components/ThemeSwitch";


function BrowserTheme(){
    const storedTheme = localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.querySelector("body").setAttribute('data-theme', storedTheme);
    
    let currentTheme = storedTheme === 'dark' ? true : false;
    return (
        <ToggleTheme isDark={currentTheme} />
    )
}

export default BrowserTheme;