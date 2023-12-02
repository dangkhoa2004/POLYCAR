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
function redirectToThongtin() {
    window.location.href = 'loadingthongtin.html';
}
/*SLIDE SHOW*/
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  