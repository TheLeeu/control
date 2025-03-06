const TRANSACCIONES = 'transaccionesArray';
const fechaInput = document.getElementById('fecha');

function getTransaccionesStorage() {
  // Verificar si la clave existe en localStorage
  let transaccionesStorage = localStorage.getItem(TRANSACCIONES);

  if (!transaccionesStorage) {
    transaccionesStorage = [];
  } else {
    transaccionesStorage = JSON.parse(transaccionesStorage);
  }

  return transaccionesStorage;
}

function setTransaccionesStorage(transaccionArray) {
  let transacciones = getTransaccionesStorage();

  transacciones.push(transaccionArray);

  transacciones = JSON.stringify(transacciones);

  localStorage.setItem(TRANSACCIONES, transacciones);
}

document.addEventListener('DOMContentLoaded', function () {

  // Referencias a los inputs de configuración
  const botTokenInput = document.getElementById('bot_token');
  const chatIdInput = document.getElementById('chat_id');

  // Cargar botToken y chatId desde localStorage (si existen)
  const storedBotToken = localStorage.getItem('botToken');
  const storedChatId = localStorage.getItem('chatId');

  if (storedBotToken) {
    botTokenInput.value = storedBotToken; // Mostrar token guardado
  }

  if (storedChatId) {
    chatIdInput.value = storedChatId; // Mostrar chatId guardado
  }

  // Guardar configuración al enviar el formulario
  document.getElementById('config_form').addEventListener('submit', function (event) {
    event.preventDefault();

    const botToken = botTokenInput.value;
    const chatId = chatIdInput.value;

    // Guardar en localStorage
    localStorage.setItem('botToken', botToken);
    localStorage.setItem('chatId', chatId);

    alert('Configuración guardada');
  });

  // Obtener el contenedor con id 'form_salida'
  const formSalida = document.getElementById('form_salida');
  const formMovimiento = document.getElementById('form_movimiento');
  const formGasolina = document.getElementById('form_gasolina');
  const formEntrada = document.getElementById('form_entrada');

  // Categorias de salida
  let textString = `[{"id_categoria":"19","nombre":"Agua","id_movimiento":"3"},{"id_categoria":"4","nombre":"Amor","id_movimiento":"3"},{"id_categoria":"3","nombre":"Comida casa","id_movimiento":"3"},{"id_categoria":"15","nombre":"Comida fuera","id_movimiento":"3"},{"id_categoria":"7","nombre":"Estudio","id_movimiento":"3"},{"id_categoria":"16","nombre":"Gasolina","id_movimiento":"3"},{"id_categoria":"14","nombre":"Golosinas","id_movimiento":"3"},{"id_categoria":"1","nombre":"Internet","id_movimiento":"3"},{"id_categoria":"8","nombre":"jabones y limpieza","id_movimiento":"3"},{"id_categoria":"2","nombre":"Luz","id_movimiento":"3"},{"id_categoria":"10","nombre":"movimiento salida","id_movimiento":"3"},{"id_categoria":"6","nombre":"Personal","id_movimiento":"3"},{"id_categoria":"17","nombre":"repuestos y mantenimientos","id_movimiento":"3"},{"id_categoria":"18","nombre":"Ropa","id_movimiento":"3"},{"id_categoria":"11","nombre":"Transporte","id_movimiento":"3"}]`;

  // Parsear el string JSON a un array de objetos
  let parsedData = JSON.parse(textString);

  // Buscar el elemento con id 'categoria' dentro de 'form_salida'
  const categoriaElement = formSalida.querySelector('#categoria');

  // Crear opciones para el select
  parsedData.forEach(optionData => {
    const option = document.createElement('option');
    option.value = optionData.id_categoria;  // Asignar el id como valor de la opción
    option.textContent = optionData.nombre;  // Asignar el texto a mostrar
    categoriaElement.appendChild(option);  // Añadir la opción al select
  });

  // Categoria de entrada
  textString = `[{"id_categoria":"5","nombre":"mama","id_movimiento":"2"},{"id_categoria":"9","nombre":"movimiento entrada","id_movimiento":"2"},{"id_categoria":"13","nombre":"otro ingreso","id_movimiento":"2"},{"id_categoria":"12","nombre":"trabajo","id_movimiento":"2"}]`;

  // Parsear el string JSON a un array de objetos
  parsedData = JSON.parse(textString);

  // Buscar el elemento con id 'categoria' dentro de 'form_salida'
  const categoriaEntradaElement = formEntrada.querySelector('#categoria');

  // Crear opciones para el select
  parsedData.forEach(optionData => {
    const option = document.createElement('option');
    option.value = optionData.id_categoria;  // Asignar el id como valor de la opción
    option.textContent = optionData.nombre;  // Asignar el texto a mostrar
    categoriaEntradaElement.appendChild(option);  // Añadir la opción al select
  });

  // Lugar
  textString = `[{"id_lugar":"3","lugar":"Efectivo"},{"id_lugar":"4","lugar":"Chivo Wallet"},{"id_lugar":"2","lugar":"Banco"}]`;

  // Parsear el string JSON a un array de objetos
  parsedData = JSON.parse(textString);

  // Buscar el elemento con id 'categoria' dentro de 'form_salida'
  const lugarElement = formSalida.querySelector('#lugar');
  const lugarEntradaElement = formEntrada.querySelector('#lugar');
  const lugarGasolinaElement = formGasolina.querySelector('#lugar');
  const lugarOrigenMovimientoElement = formMovimiento.querySelector('#lugar_origen');
  const lugarDestinoMovimientoElement = formMovimiento.querySelector('#lugar_destino');

  // Crear opciones para el select
  parsedData.forEach(optionData => {
    // Para 'lugar' en 'form_salida'
    const option1 = document.createElement('option');
    option1.value = optionData.id_lugar;
    option1.textContent = optionData.lugar;
    lugarElement.appendChild(option1);

    // Para 'lugar_origen' en 'form_movimiento'
    const option2 = document.createElement('option');
    option2.value = optionData.id_lugar;
    option2.textContent = optionData.lugar;
    lugarOrigenMovimientoElement.appendChild(option2);

    // Para 'lugar_destino' en 'form_movimiento'
    const option3 = document.createElement('option');
    option3.value = optionData.id_lugar;
    option3.textContent = optionData.lugar;
    lugarDestinoMovimientoElement.appendChild(option3);

    const option4 = document.createElement('option');
    option4.value = optionData.id_lugar;
    option4.textContent = optionData.lugar;
    lugarGasolinaElement.appendChild(option4);

    const option5 = document.createElement('option');
    option5.value = optionData.id_lugar;
    option5.textContent = optionData.lugar;
    lugarEntradaElement.appendChild(option5);
  });

  // Dinero
  textString = `[{"id_dinero":"1","estado":"Ahorro"},{"id_dinero":"4","estado":"ahorro_pagos"},{"id_dinero":"3","estado":"Ajeno"},{"id_dinero":"2","estado":"Disponible"}]`;

  // Parsear el string JSON a un array de objetos
  parsedData = JSON.parse(textString);

  // Buscar el elemento con id 'categoria' dentro de 'form_salida'
  const dineroElement = formSalida.querySelector('#dinero');
  const dineroEntradaElement = formEntrada.querySelector('#dinero');
  const dineroGasolinaElement = formGasolina.querySelector('#dinero');
  const dineroOrigenElement = formMovimiento.querySelector('#dinero_origen');
  const dineroDestinoElement = formMovimiento.querySelector('#dinero_destino');

  // Crear opciones para el select
  parsedData.forEach(optionData => {
    // Para 'dinero' en 'form_salida'
    const option1 = document.createElement('option');
    option1.value = optionData.id_dinero;
    option1.textContent = optionData.estado;
    dineroElement.appendChild(option1);

    // Para 'dinero_origen' en 'form_movimiento'
    const option2 = document.createElement('option');
    option2.value = optionData.id_dinero;
    option2.textContent = optionData.estado;
    dineroOrigenElement.appendChild(option2);

    // Para 'dinero_destino' en 'form_movimiento'
    const option3 = document.createElement('option');
    option3.value = optionData.id_dinero;
    option3.textContent = optionData.estado;
    dineroDestinoElement.appendChild(option3);

    const option4 = document.createElement('option');
    option4.value = optionData.id_dinero;
    option4.textContent = optionData.estado;
    dineroGasolinaElement.appendChild(option4);

    const option5 = document.createElement('option');
    option5.value = optionData.id_dinero;
    option5.textContent = optionData.estado;
    dineroEntradaElement.appendChild(option5);
  });

  document.getElementById('enviarBtn').addEventListener('click', async function (event) {
    const submitBtn = document.getElementById('enviarBtn'); // Seleccionar el botón de submit desde el formulario

    // Llamar a la función asincrónica
    let mensaje = getTransaccionesStorage();

    if (mensaje.length == 0) {
      alert('No hay transacciones');
      return;
    }

    // Deshabilitar el botón de submit y mostrar el spinner
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Enviando...
    `;

    try {
      mensaje = JSON.stringify(mensaje);

      await enviarMensaje(mensaje);

      // reiniciar las transacciones
      localStorage.setItem(TRANSACCIONES, '[]');

      // Recargar la página después de que el mensaje se haya enviado
      window.location.reload();
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      // Volver a habilitar el botón si algo falla
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Enviar';
    }
  });

  document.getElementById('form_entrada').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    const form = document.getElementById('form_entrada');
    const submitBtn = form.querySelector('[type="submit"]'); // Seleccionar el botón de submit desde el formulario

    // Deshabilitar el botón de submit y mostrar el spinner
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Enviando...
    `;

    // Capturar los valores de los campos
    const monto = form.querySelector('#monto').value;
    const descripcion = form.querySelector('#descripcion').value;
    const categoria = form.querySelector('#categoria').value;
    const lugar = form.querySelector('#lugar').value;
    const dinero = form.querySelector('#dinero').value;
    const fecha = fechaInput.value;

    // Formatear el mensaje en el formato solicitado
    const mensaje = `${monto};${descripcion};${categoria};${dinero};${lugar}`;

    const transaccion = {
      monto: monto,
      descripcion: descripcion,
      categoria: categoria,
      dinero: dinero,
      lugar: lugar,
      fecha: fecha,
    };

    setTransaccionesStorage(transaccion);
    window.location.reload();

    // try {
    //   // Llamar a la función asincrónica
    //   await enviarMensaje(mensaje);

    //   // Recargar la página después de que el mensaje se haya enviado
    //   window.location.reload();
    // } catch (error) {
    //   console.error('Error al enviar el mensaje:', error);
    //   // Volver a habilitar el botón si algo falla
    //   submitBtn.disabled = false;
    //   submitBtn.innerHTML = 'Enviar';
    // }
  });

  document.getElementById('form_salida').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    const form = document.getElementById('form_salida');
    const submitBtn = form.querySelector('[type="submit"]'); // Seleccionar el botón de submit desde el formulario

    // Deshabilitar el botón de submit y mostrar el spinner
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Enviando...
    `;

    // Capturar los valores de los campos
    const monto = form.querySelector('#monto').value;
    const descripcion = form.querySelector('#descripcion').value;
    const categoria = form.querySelector('#categoria').value;
    const lugar = form.querySelector('#lugar').value;
    const dinero = form.querySelector('#dinero').value;
    const fecha = fechaInput.value;

    // Formatear el mensaje en el formato solicitado
    const mensaje = `${monto};${descripcion};${categoria};${dinero};${lugar}`;

    const transaccion = {
      monto: monto,
      descripcion: descripcion,
      categoria: categoria,
      dinero: dinero,
      lugar: lugar,
      fecha: fecha,
    };

    setTransaccionesStorage(transaccion);
    window.location.reload();

    // try {
    //   // Llamar a la función asincrónica
    //   await enviarMensaje(mensaje);

    //   // Recargar la página después de que el mensaje se haya enviado
    //   window.location.reload();
    // } catch (error) {
    //   console.error('Error al enviar el mensaje:', error);
    //   // Volver a habilitar el botón si algo falla
    //   submitBtn.disabled = false;
    //   submitBtn.innerHTML = 'Enviar';
    // }
  });

  document.getElementById('form_movimiento').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    const form = document.getElementById('form_movimiento');
    const submitBtn = form.querySelector('[type="submit"]'); // Seleccionar el botón de submit desde el formulario

    // Deshabilitar el botón de submit y mostrar el spinner
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Enviando...
    `;

    // Capturar los valores de los campos
    const monto = form.querySelector('#monto').value;
    const descripcion = form.querySelector('#descripcion').value;
    const dinero_origen = form.querySelector('#dinero_origen').value;
    const lugar_origen = form.querySelector('#lugar_origen').value;
    const dinero_destino = form.querySelector('#dinero_destino').value;
    const lugar_destino = form.querySelector('#lugar_destino').value;
    // Formatear el mensaje en el formato solicitado salida
    const mensaje = `${monto};${descripcion};10;${dinero_origen};${lugar_origen}`;
    // entrada
    const mensaje2 = `${monto};${descripcion};9;${dinero_destino};${lugar_destino}`;
    const fecha = fechaInput.value;

    setTransaccionesStorage({
      monto: monto,
      descripcion: descripcion,
      categoria: 10,
      dinero: dinero_origen,
      lugar: lugar_origen,
      fecha: fecha,
    });

    setTransaccionesStorage({
      monto: monto,
      descripcion: descripcion,
      categoria: 9,
      dinero: dinero_destino,
      lugar: lugar_destino,
      fecha: fecha,
    });
    window.location.reload();

    // try {
    //   // Llamar a la función asincrónica
    //   await enviarMensaje(mensaje);
    //   await enviarMensaje(mensaje2);

    //   // Recargar la página después de que el mensaje se haya enviado
    //   window.location.reload();
    // } catch (error) {
    //   console.error('Error al enviar el mensaje:', error);
    //   // Volver a habilitar el botón si algo falla
    //   submitBtn.disabled = false;
    //   submitBtn.innerHTML = 'Enviar';
    // }
  });

  document.getElementById('form_gasolina').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    const form = document.getElementById('form_gasolina');
    const submitBtn = form.querySelector('[type="submit"]'); // Seleccionar el botón de submit desde el formulario

    // Deshabilitar el botón de submit y mostrar el spinner
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Enviando...
    `;

    // Capturar los valores de los campos
    const monto = form.querySelector('#monto').value;
    const descripcion = 'gasolina';
    const categoria = 16;
    const lugar = form.querySelector('#lugar').value;
    const dinero = form.querySelector('#dinero').value;
    const kilometros = form.querySelector('#kilometros').value;
    const galones = form.querySelector('#galones').value;

    const calculo = kilometros / galones;

    try {
      await enviarMensaje(`k/g: ${calculo}`);

      // Formatear el mensaje en el formato solicitado
      // const mensaje = `gasolina|${kilometros};${galones};${monto};${descripcion};${categoria};${dinero};${lugar}`;

      const transaccion = {
        gasolina: true,
        kilometros: kilometros,
        galones: galones,
        monto: monto,
        descripcion: descripcion,
        categoria: categoria,
        dinero: dinero,
        lugar: lugar,
        fecha: fecha,
      };
  
      setTransaccionesStorage(transaccion);
      window.location.reload();

      // Recargar la página después de que el mensaje se haya enviado
      window.location.reload();
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      // Volver a habilitar el botón si algo falla
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Enviar';
    }
  });

});

// Función asincrónica para enviar el mensaje a la API de Telegram
async function enviarMensaje(mensaje) {
  const botToken = localStorage.getItem('botToken');  // Obtener botToken de localStorage
  const chatId = localStorage.getItem('chatId');      // Obtener chatId de localStorage

  if (!botToken || !chatId) {
    alert('Por favor, configure el bot token y el chat ID primero.');
    return;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: mensaje
      })
    });

    if (!response.ok) {
      throw new Error('Error al enviar el mensaje a Telegram');
    }

    const data = await response.json();
    console.log('Mensaje enviado con éxito:', data);
  } catch (error) {
    alert('Error al enviar el mensaje:', error);
  }
}