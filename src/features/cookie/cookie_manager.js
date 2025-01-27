import Cookies from "js-cookie";

const cookieFunctions = {
    async setCookie(username, password){
        Cookies.set('QuizAppAccount', `${username}:${password}`, { expires: 7, path: '/'});
    },
    async GetCookie() {
        return Cookies.get('QuizAppAccount');
    },
    async removeCookie(){
        Cookies.remove('QuizAppAccount', { path: '/'});
    }
}

export default cookieFunctions;