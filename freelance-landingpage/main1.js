const KIT_FORM_ID = '9852447';
const KIT_API_KEY = 'q0Tzq1tOIyUfxfKl0ZVMtQ';

async function sendToKit(name, email) {
  try {
    await fetch(`https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: KIT_API_KEY,
        email: email,
        first_name: name
      })
    });
  } catch (err) {
    console.error('Kit error:', err);
  }
}

async function handleSubmit() {
  const nameEl  = document.getElementById('fname');
  const emailEl = document.getElementById('femail');
  const name    = nameEl.value.trim();
  const email   = emailEl.value.trim();

  if (!name)  { shake(nameEl);  nameEl.focus();  return; }
  if (!email || !email.includes('@') || !email.includes('.')) {
    shake(emailEl); emailEl.focus(); return;
  }

  // Send to Kit in the background
  await sendToKit(name, email);

  // Show thank-you
  document.getElementById('signup-form').style.display = 'none';
  const ty = document.getElementById('thank-you');
  ty.style.display = 'block';
  document.getElementById('ty-name').textContent = `You're in, ${name.split(' ')[0]}!`;
}

function shake(el) {
  el.style.borderColor = '#E53E3E';
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = 'shake 0.35s ease';
  setTimeout(() => { el.style.borderColor = ''; el.style.animation = ''; }, 600);
}

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));