
function mostrarToast(mensaje) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = mensaje;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 5000);
}

function cargar(pantalla) {
  const contenido = document.getElementById('contenido');

  switch (pantalla) {
    case 'dashboard':
      contenido.innerHTML = \`
        <h2>Dashboard de Inicio</h2>
        <div class="alerta aviso">3 productos con stock bajo</div>
        <div class="alerta critico">1 producto vencido</div>
        <canvas id="graficoStock" width="400" height="200"></canvas>
      \`;
      setTimeout(() => {
        new Chart(document.getElementById('graficoStock'), {
          type: 'bar',
          data: {
            labels: ['Tornillos', 'Filtros', 'Lubricantes', 'Rodamientos'],
            datasets: [{
              label: 'Stock disponible',
              data: [120, 60, 15, 30],
              backgroundColor: ['#3498db', '#e67e22', '#e74c3c', '#2ecc71']
            }]
          },
          options: { responsive: true }
        });
      }, 100);
      break;

    case 'productos':
      contenido.innerHTML = \`
        <h2>Gestión de Productos</h2>
        <h3>Registrar Producto</h3>
        <form onsubmit="event.preventDefault(); mostrarToast('Producto registrado con éxito'); cargar('productos');">
          <label>Nombre del producto:</label><input type="text" required>
          <label>Número de serie:</label><input type="text" required>
          <label>Categoría:</label>
          <select><option>Lubricante</option><option>Herramienta</option><option>Repuesto</option></select>
          <label>Ubicación:</label><input type="text" required>
          <label>Proveedor:</label><input type="text" required>
          <label>Precio de compra:</label><input type="number" required>
          <label>Descripción:</label><textarea rows="3"></textarea>
          <button type="submit">Registrar Producto</button>
        </form>
        <h3 style="margin-top:40px;">Inventario Actual</h3>
        <label>Filtrar por categoría:</label>
        <select id="filtroCategoria" onchange="filtrarProductos()">
          <option value="todos">Todos</option>
          <option value="Lubricante">Lubricante</option>
          <option value="Herramienta">Herramienta</option>
          <option value="Repuesto">Repuesto</option>
        </select>
        <table id="tablaInventario">
          <thead>
            <tr><th>Nombre</th><th>Categoría</th><th>Stock</th><th>Estado</th><th>Ubicación</th></tr>
          </thead>
          <tbody>
            <tr data-cat="Lubricante"><td>Aceite 5W-30</td><td>Lubricante</td><td>6</td><td>Crítico</td><td>Bodega Central</td></tr>
            <tr data-cat="Herramienta"><td>Llave Inglesa</td><td>Herramienta</td><td>25</td><td>Normal</td><td>Estante B2</td></tr>
            <tr data-cat="Repuesto"><td>Filtro de aire</td><td>Repuesto</td><td>4</td><td>Crítico</td><td>Bodega Norte</td></tr>
          </tbody>
        </table>
        <button onclick="mostrarToast('Inventario exportado correctamente')">📁 Exportar Inventario</button>
      \`;
      break;

    case 'movimientos':
      contenido.innerHTML = \`
        <h2>Movimientos de Inventario</h2>
        <table>
          <thead><tr><th>Fecha</th><th>Tipo</th><th>Producto</th><th>Cantidad</th><th>Observación</th></tr></thead>
          <tbody>
            <tr><td>2025-06-21</td><td>Entrada</td><td>Aceite 5W-30</td><td>20</td><td>Compra mensual</td></tr>
            <tr><td>2025-06-22</td><td>Salida</td><td>Filtro de aire</td><td>5</td><td>Uso en Planta</td></tr>
          </tbody>
        </table>
      \`;
      break;

    case 'alertas':
      contenido.innerHTML = \`
        <h2>Alertas de Stock y Vencimientos</h2>
        <div class="alerta critico">⚠️ Filtro de aire tiene solo 4 unidades</div>
        <div class="alerta aviso">⏳ Lubricante 5W-30 vence en 5 días</div>
      \`;
      break;

    case 'proveedores':
      contenido.innerHTML = \`
        <h2>Gestión de Proveedores</h2>
        <table>
          <thead><tr><th>Nombre</th><th>Contacto</th><th>Teléfono</th><th>Email</th></tr></thead>
          <tbody>
            <tr><td>PetroLube S.A.</td><td>Carla Mella</td><td>+56 9 1234 5678</td><td>ventas@petrolube.cl</td></tr>
          </tbody>
        </table>
      \`;
      break;

    case 'reportes':
      contenido.innerHTML = \`
        <h2>Reportes Personalizados</h2>
        <p>Filtre por fechas, categoría, o ubicación para generar reportes.</p>
        <button onclick="mostrarToast('Reporte exportado en PDF')">📄 Exportar PDF</button>
        <button onclick="mostrarToast('Reporte exportado en Excel')">📊 Exportar Excel</button>
      \`;
      break;

    case 'kits':
      contenido.innerHTML = \`
        <h2>Administración de Kits</h2>
        <p>Kit 1: Lubricante + Filtro</p>
        <p>Kit 2: Llave Inglesa + Tornillo M10</p>
      \`;
      break;

    case 'usuarios':
      contenido.innerHTML = \`
        <h2>Gestión de Perfiles y Permisos</h2>
        <p>Administrador: Acceso total</p>
        <p>Usuario Bodega: Solo Productos y Movimientos</p>
      \`;
      break;

    case 'respaldo':
      contenido.innerHTML = \`
        <h2>Respaldo y Restauración</h2>
        <button onclick="mostrarToast('Respaldo generado correctamente')">💾 Generar respaldo</button>
        <p>Último respaldo: 2025-06-23 14:00</p>
      \`;
      break;

    case 'compras':
      contenido.innerHTML = \`
        <h2>Órdenes de Compra</h2>
        <p>Generadas automáticamente al alcanzar stock mínimo.</p>
        <table>
          <thead><tr><th>Producto</th><th>Cantidad</th><th>Estado</th></tr></thead>
          <tbody>
            <tr><td>Aceite 5W-30</td><td>50</td><td>Pendiente</td></tr>
          </tbody>
        </table>
      \`;
      break;
  }
}

function filtrarProductos() {
  const categoria = document.getElementById("filtroCategoria").value;
  const filas = document.querySelectorAll("#tablaInventario tbody tr");
  filas.forEach(fila => {
    if (categoria === "todos" || fila.dataset.cat === categoria) {
      fila.style.display = "";
    } else {
      fila.style.display = "none";
    }
  });
}
