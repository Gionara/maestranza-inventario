let usuario = "";

function iniciar() {
  usuario = document.getElementById("rol").value;
  if (usuario) {
    document.getElementById("menu").style.display = "block";
    document.getElementById("login").style.display = "none";
    cargar("dashboard");
  }
}

function cargar(modulo) {
  const contenido = document.getElementById("contenido");
  if (modulo === "dashboard") {
    contenido.innerHTML = `
      <h2>Dashboard</h2>
      <canvas id="grafico"></canvas>
    `;
    setTimeout(() => {
      new Chart(document.getElementById("grafico"), {
        type: 'bar',
        data: {
          labels: ['Filtros', 'Tornillos', 'Lubricantes', 'Kits'],
          datasets: [{
            label: 'Stock actual',
            data: [40, 120, 60, 30],
            backgroundColor: ['#3498db','#2ecc71','#f1c40f','#e74c3c']
          }]
        },
        options: { responsive: true }
      });
    }, 100);
  }
  else if (modulo === "productos") {
    contenido.innerHTML = `
      <h2>Gestión de Productos</h2>
      <form onsubmit="event.preventDefault(); mostrarToast('Producto registrado con éxito')">
        <label>Nombre:</label><input required>
        <label>Serie:</label><input required>
        <label>Proveedor:</label><input>
        <button type="submit">Registrar</button>
      </form>
    `;
  }
  else if (modulo === "alertas") {
    contenido.innerHTML = `
      <h2>Alertas</h2>
      <div class="alerta">Stock crítico: Filtro de aire</div>
      <div class="alerta" style="background:#f1c40f">Producto próximo a vencer: Lubricante</div>
    `;
    new Audio('https://www.soundjay.com/buttons/sounds/beep-07.mp3').play();
  }
  else if (modulo === "movimientos") {
    contenido.innerHTML = `
      <h2>Movimientos</h2>
      <p>Entrada de 50 Filtros (Compra)</p>
      <p>Salida de 10 Lubricantes (Proyecto X)</p>
    `;
  }
  else if (modulo === "proveedores") {
    contenido.innerHTML = `
      <h2>Proveedores</h2>
      <ul><li>PetroLube S.A. - ventas@petrolube.cl</li></ul>
    `;
  }
  else if (modulo === "kits") {
    contenido.innerHTML = `
      <h2>Kits</h2>
      <p>Kit Generador Eléctrico: incluye 1 Motor, 2 Filtros, 1 Batería</p>
    `;
  }
  else if (modulo === "reportes") {
    contenido.innerHTML = `
      <h2>Reportes</h2>
      <button onclick="mostrarToast('PDF exportado')">Exportar PDF</button>
      <button onclick="mostrarToast('Excel exportado')">Exportar Excel</button>
    `;
  }
  else if (modulo === "usuarios") {
    contenido.innerHTML = `
      <h2>Perfiles</h2>
      <p>Usuario actual: ${usuario}</p>
    `;
  }
  else if (modulo === "respaldo") {
    contenido.innerHTML = `
      <h2>Respaldo</h2>
      <button onclick="mostrarToast('Respaldo completado')">Respaldar ahora</button>
    `;
    setTimeout(() => mostrarToast('Respaldo automático ejecutado'), 10000);
  }
  else if (modulo === "compras") {
    contenido.innerHTML = `
      <h2>Compras Automáticas</h2>
      <p>Orden generada: Lubricantes x 100 unidades - Estado: Pendiente</p>
    `;
  }
}

function mostrarToast(mensaje) {
  const toast = document.getElementById("toast");
  toast.textContent = mensaje;
  toast.style.display = "block";
  setTimeout(() => toast.style.display = "none", 5000);
}