let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
/*PARALLAX*/
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * -2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * -1.5 + 'px';
});

/*POP-UP*/
// Hàm mở pop-up
function openPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

// Hàm đóng pop-up
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
/*CHUYỂN TRANG*/
function redirectToDichVu() {
    window.location.href = 'loadingdichvu.html';
}
function redirectToTrangChu() {
    window.location.href = 'loadingtrangchu.html';
}
function redirectToContact() {
    window.location.href = 'loadingcontact.html';
}