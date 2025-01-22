import Cookies from "js-cookie";

const cookieFunctions = {
    async setCookie(){
        Cookies.set('QuizAppAccount', 'lex:1234', { expires: 7, path: '/'});
    },
    async GetCookie() {
        return Cookies.get('QuizAppAccount');
    },
    async removeCookie(){
        Cookies.remove('QuizAppAccount', { path: '/'});
    }
}

export default cookieFunctions;