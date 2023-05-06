const currentUrl = window.location.hostname;

if (currentUrl === 'm.vk.com') {
    window.onload = function () {
        const recomendEl = document.querySelector('a[data-log-link="/feed?section=recommended"]');
        const feedElMobile = document.querySelector('a[data-log-link="/feed"]');
        recomendEl.setAttribute('href', '/mail');
        feedElMobile.setAttribute('href', '/mail');
    }
}
if (currentUrl === 'vk.com') {
    window.onload = function () {
        var feedElDesktop = document.getElementById("l_nwsf").querySelector('a');
        var clipsElDesktop = document.getElementById("l_svd").querySelector('a');
        feedElDesktop.setAttribute('href', '/im');
        clipsElDesktop.setAttribute('href', '/im');
        console.log(feedElDesktop, clipsElDesktop);
    };
}
if (window.location.pathname === '/feed') {
    window.location.href = "https://vk.com/im";
}
if (window.location.pathname === '/clips') {
    window.location.href = "https://vk.com/im";
}
if (window.location.pathname === '/feed?section=recommended') {
    window.location.href = "https://vk.com/im";
}
