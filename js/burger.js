function toggleActiveClass() {
    var button = document.querySelector('.burger-menu');
    var nav = document.querySelector('.header__wrap');
    button.classList.toggle('burger-menu--active');
    nav.classList.toggle('header__wrap--mobile-open');
}
// function toggleActiveClass(event) {
//     var button = document.querySelector('.burger-menu');
//     var nav = document.querySelector('.header__wrap');
//     var targetElement = event.target;

//     // Перевірка, чи клікнуто не на кнопку "burger-menu" або на елемент <nav>
//     if (!button.contains(targetElement) && !nav.contains(targetElement)) {
//         button.classList.remove('burger-menu--active');
//         nav.classList.remove('header__wrap--mobile-open');
//     } else {
//         button.classList.toggle('burger-menu--active');
//         nav.classList.toggle('header__wrap--mobile-open');
//     }
// }

// // Додаємо обробник події кліку до всього документа
// document.addEventListener('click', toggleActiveClass);