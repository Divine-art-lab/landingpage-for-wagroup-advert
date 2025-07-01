let form = document.querySelector('form');
let btn = document.getElementById('add');
function disp() {
  form.style.display = 'block';
}
window.addEventListener("onbeforeunload", () => {
  alert('leaving?');
});

let span = document.querySelector('span');
spanNum = Number(span);
function add(spanNum) {
  spanNum++;
}
setTimeout(add, 1000);
console.log(typeof spanNum)


let box = document.getElementById('pop');

function popUp() {
  box.style.display = "block";
};
function popOut() {
  box.style.display = "none"
}
setTimeout(popUp, 2000);