// Прелоадер
document.body.onload = function() {
    setTimeout( function() {
        let preloader = document.querySelector(".preloader");
        if( !preloader.classList.contains("done"))
        {
            preloader.classList.add("done")
        }
    }, 1000)
}


// Меню Регистрации и Логина
const reg = document.querySelector("#reg");
const log = document.querySelector("#log");
const regMenu = document.querySelector(".reg-menu");
const logMenu = document.querySelector(".log-menu");
const regClose = document.querySelector(".reg-btn");
const logClose = document.querySelector(".log-btn");
const diona = document.querySelector(".reg-img")
const hutao = document.querySelector(".log-img")

reg.addEventListener("click", function() {
    regMenu.classList.add("active");
    logMenu.classList.remove("active");
    diona.classList.add("active")
    hutao.classList.remove("active")
})

regClose.addEventListener("click", function() {
    regMenu.classList.remove("active");
    diona.classList.remove("active")
})

log.addEventListener("click", function() {
    logMenu.classList.add("active");
    regMenu.classList.remove("active");
    diona.classList.remove("active");
    hutao.classList.add("active")
})

logClose.addEventListener("click", function() {
    logMenu.classList.remove("active");
    hutao.classList.remove("active")
})


// Меню каталога
const headButton = document.querySelector(".head-button");
const headMenu = document.querySelector(".catalog");

headButton.addEventListener("click", function(){
    headButton.classList.toggle("active");
    headMenu.classList.toggle("active");
})