const currentUrl = window.location.hostname;

if (currentUrl === 'm.vk.com') {
    window.onload = function () {
        document.querySelector('a[data-log-link="/feed?section=recommended"]').remove();
        document.querySelector('a[data-log-link="/feed"]').remove();
    }
}
if (currentUrl === 'vk.com') {
    window.onload = function () {
        document.getElementById("l_nwsf").remove();
        document.getElementById("l_svd").remove();
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
