document.addEventListener('DOMContentLoaded', function () {
  grafico_linea();
  grafico_pastel();
  gastoMensual();

  // Grafico pastel
  // Selecciona todos los elementos con la clase 'pastel'
  const pasteles = document.querySelectorAll('.pastel');

  // Itera sobre cada elemento y agrega un event listener
  pasteles.forEach(pastel => {
    pastel.addEventListener('click', (event) => {
      // Obtiene el valor del atributo data-example usando getAttribute
      const tipo = pastel.getAttribute('data-tipo');

      // Llama a la función grafico_pastel
      grafico_pastel(tipo);
    });
  });

  // Pagos
  document.getElementById('todo_pagos').addEventListener('click', async function () {
    const dinero = await dineroPagos();
    const pagos = (parseFloat(dinero.efectivo_ahorro_pagos) + parseFloat(dinero.banco_ahorro_pagos));

    document.getElementById('pagos').innerText = pagos;
    document.getElementById('pagos_mas').innerText = 'Todo';
  });

  document.getElementById('efectivo_pagos').addEventListener('click', async function () {
    const dinero = await dineroPagos();
    const pagos = (parseFloat(dinero.efectivo_ahorro_pagos));

    document.getElementById('pagos').innerText = pagos;
    document.getElementById('pagos_mas').innerText = 'Efectivo';
  });

  document.getElementById('banco_pagos').addEventListener('click', async function () {
    const dinero = await dineroPagos();
    const pagos = (parseFloat(dinero.banco_ahorro_pagos));

    document.getElementById('pagos').innerText = pagos;
    document.getElementById('pagos_mas').innerText = 'Banco';
  });

  // Disponible

  document.getElementById('disponible_todo').addEventListener('click', async function () {
    const dinero = await dineroPagos();
    const pagos = (parseFloat(dinero.efectivo_disponible) + parseFloat(dinero.banco_disponible));

    document.getElementById('disponible').innerText = pagos;
    document.getElementById('disponible_mas').innerText = 'Todo';
  });

  document.getElementById('disponible_efectivo').addEventListener('click', async function () {
    const dinero = await dineroPagos();
    const pagos = (parseFloat(dinero.efectivo_disponible));

    document.getElementById('disponible').innerText = pagos;
    document.getElementById('disponible_mas').innerText = 'Efectivo';
  });

  document.getElementById('disponible_banco').addEventListener('click', async function () {
    const dinero = await dineroPagos();
    const pagos = (parseFloat(dinero.banco_disponible));

    document.getElementById('disponible').innerText = pagos;
    document.getElementById('disponible_mas').innerText = 'Banco';
  });

  // Escuchar el evento submit del formulario
  document.getElementById('form_movimiento').addEventListener('submit', function (event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();

    // Deshabilitar el botón de enviar
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    // Obtener los datos del formulario
    const formData = new FormData(this);

    // Realizar la solicitud utilizando fetch
    fetch('procesos/movimientos.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        let tipo = data.success ? 'success' : 'danger';

        mostrarAlerta(tipo, data.msg);
        submitButton.disabled = false;

        // limpiar formulario
        this.querySelector('#monto').value = '';
        this.querySelector('#descripcion').value = '';

        if (data.success) {
          actualizarDinero(data.dinero);
        }
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
        submitButton.disabled = false;
      });
  });

  // Escuchar el evento submit del formulario
  document.getElementById('form_salida').addEventListener('submit', function (event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();

    // Deshabilitar el botón de enviar
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    // Obtener los datos del formulario
    const formData = new FormData(this);

    // Realizar la solicitud utilizando fetch
    fetch('procesos/movimientos.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        let tipo = data.success ? 'success' : 'danger';

        mostrarAlerta(tipo, data.msg);
        submitButton.disabled = false;

        // limpiar formulario
        this.querySelector('#monto').value = '';
        this.querySelector('#descripcion').value = '';

        if (data.success) {
          grafico_linea();
          grafico_pastel();
          gastoMensual();
          actualizarDinero(data.dinero);
        }
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
        submitButton.disabled = false;
      });
  });

  // Escuchar el evento submit del formulario
  document.getElementById('form_entrada').addEventListener('submit', function (event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();

    // Deshabilitar el botón de enviar
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    // Obtener los datos del formulario
    const formData = new FormData(this);

    // Realizar la solicitud utilizando fetch
    fetch('procesos/movimientos.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        let tipo = data.success ? 'success' : 'danger';

        mostrarAlerta(tipo, data.msg);
        submitButton.disabled = false;

        // limpiar formulario
        this.querySelector('#monto').value = '';
        this.querySelector('#descripcion').value = '';

        if (data.success) {
          actualizarDinero(data.dinero);
        }
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
        submitButton.disabled = false;
      });
  });

  document.getElementById('form_gasolina').addEventListener('submit', function (event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();

    // Deshabilitar el botón de enviar
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    // Obtener los datos del formulario
    const formData = new FormData(this);

    // Realizar la solicitud utilizando fetch
    fetch('procesos/movimientos.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        let tipo = data.success ? 'success' : 'danger';

        mostrarAlerta(tipo, data.msg);
        submitButton.disabled = false;

        if (data.success) {
          // limpiar formulario
          this.querySelector('#monto').value = '';
          this.querySelector('#kilometros').value = '';
          this.querySelector('#galones').value = '';

          actualizarDinero(data.dinero);
        }
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
        submitButton.disabled = false;
      });
  });
});

function grafico_linea() {
  const data = {
    process: 'gasto_mensual'
  };
  fetchDatos('procesos/graficas.php', data, (error, respuesta) => {
    if (!error) {
      const dataFloat = respuesta.data.map(parseFloat);
      // Obtén una referencia al elemento canvas
      var canvas = document.querySelector('#lineChart');

      // Verifica si ya existe un gráfico en el canvas
      if (canvas) {
        // Si existe, destruye el gráfico existente
        var chartInstance = Chart.getChart(canvas);
        if (chartInstance) {
          chartInstance.destroy();
        }
      }

      // Crea un nuevo gráfico
      new Chart(canvas, {
        type: 'line',
        data: {
          labels: respuesta.label,
          datasets: [{
            label: 'Gasto mensual',
            data: dataFloat,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  });
}

function grafico_pastelasdf() {
  fetchDatos('procesos/graficas.php', { process: 'grafico_pastel' }, (error, respuesta) => {
    if (!error) {
      const dataFloat = respuesta.data.map(parseFloat);
      // Obtén una referencia al elemento canvas
      var canvas = document.querySelector('#pieChart1');

      // Verifica si ya existe un gráfico en el canvas
      if (canvas) {
        // Si existe, destruye el gráfico existente
        var chartInstance = Chart.getChart(canvas);
        if (chartInstance) {
          chartInstance.destroy();
        }
      }

      new ApexCharts(canvas, {
        series: dataFloat,
        chart: {
          height: 350,
          type: 'pie',
          toolbar: {
            show: true
          }
        },
        labels: respuesta.label
      }).render();
    }
  });
}

function grafico_pastel(tipo = 1) {
  fetchDatos('procesos/graficas.php', { process: 'grafico_pastel', tipo: tipo }, (error, respuesta) => {
    if (!error) {
      const dataFloat = respuesta.data.map(parseFloat);
      // Obtén una referencia al elemento canvas
      var canvas = document.querySelector('#pieChart1');

      // Verifica si ya existe un gráfico en el canvas
      if (canvas) {
        // Si existe, destruye el gráfico existente
        if (canvas.chart) {
          canvas.chart.destroy();
        }
      }

      // Crea un nuevo gráfico con ApexCharts
      var chart = new ApexCharts(canvas, {
        series: dataFloat,
        chart: {
          height: 350,
          type: 'pie',
        },
        labels: respuesta.label
      });

      // Asigna el gráfico al elemento canvas para que puedas destruirlo más tarde si es necesario
      canvas.chart = chart;

      // Renderiza el gráfico
      chart.render();

    }
  });
}

function actualizarDinero(dinero) {
  const pagos = (parseFloat(dinero.efectivo_ahorro_pagos) + parseFloat(dinero.banco_ahorro_pagos));
  const disponible = (parseFloat(dinero.efectivo_disponible) + parseFloat(dinero.banco_disponible));

  document.getElementById('pagos').innerText = pagos;
  document.getElementById('disponible').innerText = disponible;
}

async function dineroPagos() {
  // Obtiene los datos del servidor
  return await new Promise((resolve, reject) => {
    fetchDatos('procesos/movimientos.php', { process: 'dinero_pagos' }, (error, respuesta) => {
      if (!error) {
        resolve(respuesta.dinero);
      } else {
        reject(error);
      }
    });
  });
}

function gastoMensual() {
  fetchDatos('procesos/movimientos.php', { process: 'gasto_mensual' }, (error, respuesta) => {
    if (!error) {
      document.getElementById('gasto_mensual').innerText = respuesta.total;
    } else {
      reject(error);
    }
  });
}