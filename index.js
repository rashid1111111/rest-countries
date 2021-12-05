const elDarkMode = document.querySelector(".header-dark-mode");
elDarkMode.addEventListener('click', function(){
    document.body.classList.add('dark-mode');
});
elDarkMode.addEventListener('dblclick', function(){
    document.body.classList.remove('dark-mode');
});