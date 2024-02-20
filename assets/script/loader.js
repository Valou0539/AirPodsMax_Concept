const loader = document.querySelector('.loader-container');
loader.style.display = "";

document.documentElement.style.overflowY = "hidden";

window.onload = function ()  {
    document.documentElement.style.overflowY = "";
    document.body.style.display = "none"
    loader.style.display = "none";
    setTimeout(() => document.body.style.display = "block", 20);
};