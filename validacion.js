


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

   
    const nombreError = document.getElementById('nombreError');
    const emailError = document.getElementById('emailError');
    const asuntoError = document.getElementById('asuntoError');
    const mensajeError = document.getElementById('mensajeError');

    let valid = true;

  
    nombreError.textContent = '';
    emailError.textContent = '';
    asuntoError.textContent = '';
    mensajeError.textContent = '';

   
    if (nombre.trim() === '') {
        nombreError.textContent = 'El nombre no debe estar en blanco.';
        valid = false;
    } else if (nombre.length > 50) {
        nombreError.textContent = 'El nombre no debe exceder los 50 caracteres.';
        valid = false;
    }

   
    if (email.trim() === '') {
        emailError.textContent = 'El correo electrónico no debe estar en blanco.';
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = 'Por favor, ingrese un correo electrónico válido.';
        valid = false;
    }

   
    if (asunto.trim() === '') {
        asuntoError.textContent = 'El asunto no debe estar en blanco.';
        valid = false;
    } else if (asunto.length > 50) {
        asuntoError.textContent = 'El asunto no debe exceder los 50 caracteres.';
        valid = false;
    }

  
    if (mensaje.trim() === '') {
        mensajeError.textContent = 'El mensaje no debe estar en blanco.';
        valid = false;
    } else if (mensaje.length > 300) {
        mensajeError.textContent = 'El mensaje no debe exceder los 300 caracteres.';
        valid = false;
    }

    // Si el formulario es válido, enviarlo
    if (valid) {
        this.submit();
    }
});
function verificarCampos() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    const enviarBotao = document.getElementById('enviarBotao');

  
    const todosLlenos = nombre !== '' && email !== '' && asunto !== '' && mensaje !== '';


    enviarBotao.disabled = !todosLlenos;
}

// Agregar event listeners a los campos para verificar cuando cambian
document.getElementById('nombre').addEventListener('input', verificarCampos);
document.getElementById('email').addEventListener('input', verificarCampos);
document.getElementById('asunto').addEventListener('input', verificarCampos);
document.getElementById('mensaje').addEventListener('input', verificarCampos);
