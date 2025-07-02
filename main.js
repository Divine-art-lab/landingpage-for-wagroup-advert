let form = document.querySelector('form');
let btn = document.getElementById('add');
function disp() {
  form.style.display = 'block';
}

setTimeout(add, 1000);
console.log(typeof spanNum)


/*let box = document.getElementById('pop');

function popUp() {
  box.style.display = "block";
};
function popOut() {
  box.style.display = "none"
}
setInterval(popUp, 9000);*/
function popOut() {  box?.classList.add('hidden');}setInterval(() => {  popUp();  setTimeout(popOut, 3000);}, 10000);
// Show exit dialog when user is about to leave
document.addEventListener('visibilitychange', function () {  if (document.visibilityState === 'hidden') {    exitBox.classList.remove('hidden');  }});