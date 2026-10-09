const form = document.querySelector("#leadForm");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const contact = document.querySelector("#contact").value.trim();

  if (!name || !contact) {
    formMessage.textContent = "Please fill in both fields.";
    return;
  }

  // Replace this with your real lead-capture/delivery logic.
  formMessage.textContent = `Thanks, ${name}! Your guide is ready to be delivered.`;
  form.reset();
});
