// Menú hamburguesa
const hamburguesa = document.querySelector('.hamburguesa');
const navLinks = document.querySelector('.nav-links');

hamburguesa.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Validación del formulario
const form = document.getElementById('formulario-contacto');
const mensajeError = document.getElementById('mensaje-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const mensaje = form.mensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    mensajeError.textContent = 'Por favor, completa todos los campos.';
    return;
  }

  mensajeError.textContent = 'Formulario enviado correctamente ✅';
  form.reset();
});

// Slider automático para imágenes en productos
const sliders = document.querySelectorAll('.slider');
sliders.forEach(slider => {
  const images = slider.querySelectorAll('img');
  let current = 0;

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 3000);
});
