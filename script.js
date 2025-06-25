
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
      contenido.innerHTML = `
        <h2>Dashboard</h2>
        <div class="alerta aviso">3 productos con stock bajo</div>
        <div class="alerta critico">1 producto vencido</div>
        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
          <div style="flex: 1; min-width: 300px;">
            <canvas id="graficoStock" height="200"></canvas>
          </div>
          <div style="flex: 1; min-width: 300px;">
            <canvas id="graficoConsumo" height="200"></canvas>
          </div>
        </div>
      `;
      setTimeout(() => {
        new Chart(document.getElementById('graficoStock'), {
          type: 'bar',
          data: {
            labels: ['Lubricantes', 'Repuestos', 'Herramientas'],
            datasets: [{
              label: 'Stock por categoría',
              data: [100, 50, 75],
              backgroundColor: ['#3498db', '#2ecc71', '#f1c40f']
            }]
          },
          options: { responsive: true }
        });
        new Chart(document.getElementById('graficoConsumo'), {
          type: 'line',
          data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [{
              label: 'Consumo mensual (unidades)',
              data: [40, 60, 35, 70, 55, 80],
              fill: false,
              borderColor: '#e74c3c',
              tension: 0.1
            }]
          },
          options: { responsive: true }
        });
      }, 100);
      break;

    case 'movimientos':
      contenido.innerHTML = `
        <h2>Movimientos de Inventario</h2>
        <button onclick="mostrarFormularioMovimiento()">➕ Registrar Movimiento</button>
        <div id="formMovimiento" style="display:none; margin-top: 20px;">
          <form onsubmit="event.preventDefault(); mostrarToast('Movimiento registrado'); cargar('movimientos');">
            <label>Fecha:</label><input type="date" required>
            <label>Tipo:</label>
            <select required><option>Entrada</option><option>Salida</option><option>Devolución</option><option>Transferencia</option></select>
            <label>Producto:</label><input type="text" required>
            <label>Cantidad:</label><input type="number" required>
            <label>Observación:</label><textarea></textarea>
            <button type="submit">Guardar</button>
          </form>
        </div>
        <table><thead><tr><th>Fecha</th><th>Tipo</th><th>Producto</th><th>Cantidad</th><th>Observación</th></tr></thead>
        <tbody><tr><td>2025-06-23</td><td>Entrada</td><td>Filtro</td><td>10</td><td>Compra regular</td></tr></tbody>
        </table>
      `;
      break;

    case 'kits':
      contenido.innerHTML = `
        <h2>Administración de Kits</h2>
        <button onclick="mostrarFormularioKit()">➕ Crear Kit</button>
        <div id="formKit" style="display:none; margin-top: 20px;">
          <form onsubmit="event.preventDefault(); mostrarToast('Kit creado'); cargar('kits');">
            <label>Nombre del Kit:</label><input type="text" required>
            <label>Componentes:</label><textarea placeholder="Ej: Tornillo x2, Llave x1" required></textarea>
            <button type="submit">Guardar Kit</button>
          </form>
        </div>
        <ul><li>Kit A: Filtro + Aceite</li><li>Kit B: Llave + Tornillos</li></ul>
      `;
      break;

    case 'proveedores':
      contenido.innerHTML = `
        <h2>Proveedores</h2>
        <button onclick="mostrarFormularioProveedor()">➕ Añadir Proveedor</button>
        <div id="formProveedor" style="display:none; margin-top: 20px;">
          <form onsubmit="event.preventDefault(); mostrarToast('Proveedor registrado'); cargar('proveedores');">
            <label>Nombre:</label><input type="text" required>
            <label>Contacto:</label><input type="text">
            <label>Email:</label><input type="email">
            <label>Teléfono:</label><input type="tel">
            <button type="submit">Guardar</button>
          </form>
        </div>
        <table><thead><tr><th>Nombre</th><th>Contacto</th><th>Email</th></tr></thead>
        <tbody><tr><td>PetroLube S.A.</td><td>Carla</td><td>ventas@petrolube.cl</td></tr></tbody></table>
      `;
      break;

    case 'reportes':
      contenido.innerHTML = `
        <h2>Reportes Personalizados</h2>
        <form onsubmit="event.preventDefault(); mostrarToast('Reporte generado');">
          <label>Rango de fechas:</label><input type="date"> a <input type="date"><br>
          <label>Categoría:</label>
          <select><option>Todas</option><option>Lubricante</option><option>Repuesto</option></select>
          <label>Ubicación:</label><input type="text" placeholder="Ej: Bodega Central">
          <button type="submit">Generar Reporte</button>
        </form>
      `;
      break;

    case 'usuarios':
      contenido.innerHTML = `
        <h2>Gestión de Usuarios</h2>
        <button onclick="mostrarFormularioUsuario()">➕ Añadir Usuario</button>
        <div id="formUsuario" style="display:none; margin-top: 20px;">
          <form onsubmit="event.preventDefault(); mostrarToast('Usuario creado'); cargar('usuarios');">
            <label>Nombre de usuario:</label><input type="text" required>
            <label>Rol:</label>
            <select><option>Administrador</option><option>Bodega</option><option>Auditor</option></select>
            <button type="submit">Registrar</button>
          </form>
        </div>
      `;
      break;

    case 'respaldo':
      contenido.innerHTML = `
        <h2>Respaldos del Sistema</h2>
        <p>Último respaldo: 2025-06-23 14:00</p>
        <ul><li>23/06/2025 - 14:00</li><li>22/06/2025 - 11:45</li><li>21/06/2025 - 17:30</li></ul>
        <button onclick="mostrarToast('Respaldo generado')">💾 Realizar respaldo</button>
      `;
      break;

    case 'compras':
      contenido.innerHTML = `
        <h2>Órdenes de Compra</h2>
        <table><thead><tr><th>Producto</th><th>Cantidad</th><th>Estado</th></tr></thead>
        <tbody><tr><td>Filtro de aire</td><td>50</td><td>Pendiente</td></tr></tbody></table>
      `;
      break;
  }
}

function mostrarFormularioMovimiento() {
  document.getElementById("formMovimiento").style.display = "block";
}
function mostrarFormularioKit() {
  document.getElementById("formKit").style.display = "block";
}
function mostrarFormularioProveedor() {
  document.getElementById("formProveedor").style.display = "block";
}
function mostrarFormularioUsuario() {
  document.getElementById("formUsuario").style.display = "block";
}
