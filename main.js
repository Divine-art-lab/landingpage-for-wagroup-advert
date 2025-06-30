let form = document.querySelector('form');
let btn = document.getElementById('add');
function disp() {
  form.style.display = 'block';
}
document.addEventListener("onbeforedeactivate", () => {
  alert('leaving?');
});