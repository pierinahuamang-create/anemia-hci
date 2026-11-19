const form = document.getElementById('form-contacto');
const correo = document.getElementById('correo');
const msg = document.getElementById('msg-correo');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!correo.validity.valid) {
    correo.classList.add('campo-error');
    correo.setAttribute('aria-invalid', 'true');
    msg.className = 'mensaje es-error';
    msg.textContent = 'Escribe un correo válido, por ejemplo: nombre@correo.com';
    correo.focus();
  } else {
    correo.classList.remove('campo-error');
    correo.removeAttribute('aria-invalid');
    msg.className = 'mensaje es-exito';
    msg.textContent = '¡Listo! Te enviaremos consejos.';
  }
});