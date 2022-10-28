let navbar = document.querySelector('.nav');

document.querySelector('#menu-btn').onclick = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.toggle('active');
}