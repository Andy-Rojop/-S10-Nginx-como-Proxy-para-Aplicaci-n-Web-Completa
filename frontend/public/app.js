const out = document.getElementById('output');
const btnHello = document.getElementById('btnHello');
const btnEcho = document.getElementById('btnEcho');
const payloadEl = document.getElementById('payload');

// Función para mostrar mensajes de estado o error
function mostrarMensaje(mensaje, tipo = 'info') {
  const colores = {
    info: '#0d6efd',
    success: '#198754',
    error: '#dc3545'
  };
  out.innerHTML = `<span style="color:${colores[tipo]}; font-weight:bold;">${mensaje}</span>`;
}

// Acción: Enviar saludo al servidor
btnHello.addEventListener('click', async () => {
  mostrarMensaje('Enviando saludo...');
  try {
    const respuesta = await fetch('/api/hello');
    const datos = await respuesta.json();
    out.textContent = JSON.stringify(datos, null, 2);
  } catch (error) {
    mostrarMensaje('Error al conectar con el servidor: ' + error.message, 'error');
  }
});

// Acción: Probar envío de mensaje
btnEcho.addEventListener('click', async () => {
  mostrarMensaje('Enviando mensaje...');
  try {
    const datos = JSON.parse(payloadEl.value || '{}');
    const respuesta = await fetch('/api/echo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
    const resultado = await respuesta.json();
    out.textContent = JSON.stringify(resultado, null, 2);
  } catch (error) {
    mostrarMensaje('Error al enviar mensaje: ' + error.message, 'error');
  }
});
