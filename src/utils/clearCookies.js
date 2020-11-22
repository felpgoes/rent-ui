export const clearListCookies = () => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const spcook = cookies[i].split('=');
        deleteCookie(spcook[0]);
    }
    function deleteCookie(cookiename) {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        const expires = `;expires=${d}`;
        const name = cookiename;
        const value = '';
        document.cookie = `${name}=${value}${expires}; path=/acc/html`;
    }
};
