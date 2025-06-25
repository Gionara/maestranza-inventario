
// script_maestranza_final_corregido.js
// Navegación 100% funcional con todos los módulos y datos simulados

function mostrarToast(mensaje) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = mensaje;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 5000);
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

function cargar(pantalla) {
  const contenido = document.getElementById('contenido');
  if (!contenido) return;
// script.js completo para Maestranzas Unidos S.A.
// Incluye: Dashboard, Productos, Movimientos, Alertas, Proveedores, Reportes, Kits, Usuarios, Respaldo, Compras
// Datos simulados: 20 productos, 15 movimientos, 5 alertas, 4 proveedores, 4 kits, 10 respaldos, 6 órdenes, 5 usuarios

function mostrarToast(mensaje) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = mensaje;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 5000);
}
}
function cargar(pantalla) {
  const contenido = document.getElementById('contenido');
  if (!contenido) return;

  if (pantalla === 'dashboard') {
    contenido.innerHTML = `
      <h2>Dashboard</h2>
      <div class="alerta aviso">📉 6 productos con stock bajo</div>
      <div class="alerta critico">⏳ 3 productos próximos a vencer</div>
      <div style="display: flex; flex-wrap: wrap; gap: 20px;">
        <div style="flex: 1; min-width: 300px; max-width: 500px; height-min: 300px; justify-self: stretch;  "><canvas id="graf1"></canvas></div>
        <div style="flex: 1; min-width: 300px; max-width: 500px; height-min: 300px; justify-self: stretch; "><canvas id="graf2"></canvas></div>
        <div style="flex: 1; min-width: 300px; max-width: 500px; height-min: 300px; justify-self: stretch; "><canvas id="graf3"></canvas></div>
        <div style="flex: 1; min-width: 300px; max-width: 500px; height-min: 300px; justify-self: stretch; "><canvas id="graf4"></canvas></div>
      </div>`;
    setTimeout(() => {
      new Chart(document.getElementById('graf1'), {
        type: 'bar',
        data: {
          labels: ['Lubricantes', 'Repuestos', 'Herramientas', 'Consumibles'],
          datasets: [{
            label: 'Stock por categoría',
            data: [120, 90, 45, 70],
            backgroundColor: ['#3498db', '#e67e22', '#2ecc71', '#9b59b6']
          }]
        }
      });
      new Chart(document.getElementById('graf2'), {
        type: 'line',
        data: {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
          datasets: [{
            label: 'Consumo mensual (u.)',
            data: [50, 65, 70, 40, 85, 60],
            borderColor: '#e74c3c',
            fill: false
          }]
        }
      });
      new Chart(document.getElementById('graf3'), {
        type: 'radar',
        data: {
          labels: ['Lubricantes', 'Repuestos', 'Herramientas', 'Consumibles'],
          datasets: [{
            label: 'Consumo por categoría',
            data: [40, 70, 30, 55],
            backgroundColor: 'rgba(241, 196, 15, 0.3)',
            borderColor: '#f39c12'
          }]
        }
      });
      new Chart(document.getElementById('graf4'), {
        type: 'doughnut',
        data: {
          labels: ['Bodega Central', 'Sucursal Norte', 'Sucursal Sur'],
          datasets: [{
            data: [140, 80, 55],
            backgroundColor: ['#1abc9c', '#2980b9', '#c0392b']
          }]
        }
      });
    }, 200);
  }

  else if (pantalla === 'inventario') {
    contenido.innerHTML = `
       <h3 style="margin-top:40px;">Inventario Actual</h3>
      <label>Filtrar por categoría:</label>
      <select id="filtroCategoria" onchange="filtrarProductos()">
        <option value="todos">Todos</option>
        <option value="Lubricante">Lubricante</option>
        <option value="Herramienta">Herramienta</option>
        <option value="Repuesto">Repuesto</option>
        <option value="Consumible">Consumible</option>
      </select>
      <table id="tablaInventario">
        <thead>
          <tr><th>Nombre</th><th>Categoría</th><th>Stock</th><th>Estado</th><th>Ubicación</th></tr>
        </thead>
        <tbody>
          <tr data-cat="Lubricante"><td>Aceite 5W-30</td><td>Lubricante</td><td>6</td><td>Crítico</td><td>Bodega Central</td></tr>
          <tr data-cat="Herramienta"><td>Llave Inglesa</td><td>Herramienta</td><td>25</td><td>Normal</td><td>Estante B2</td></tr>
          <tr data-cat="Repuesto"><td>Filtro de aire</td><td>Repuesto</td><td>4</td><td>Crítico</td><td>Bodega Norte</td></tr>
          <tr data-cat="Consumible"><td>Guantes Desechables</td><td>Consumible</td><td>50</td><td>Normal</td><td>Oficina Central</td></tr>
          <tr data-cat="Herramienta"><td>Taladro</td><td>Herramienta</td><td>10</td><td>Normal</td><td>Taller Sur</td></tr>
          <tr data-cat="Repuesto"><td>Bujía XTR</td><td>Repuesto</td><td>15</td><td>Normal</td><td>Sucursal Norte</td></tr>
          <tr data-cat="Consumible"><td>Alcohol Gel 500ml</td><td>Consumible</td><td>8</td><td>Crítico</td><td>Bodega Central</td></tr>
          <tr data-cat="Lubricante"><td>Aceite hidráulico ISO32</td><td>Lubricante</td><td>30</td><td>Normal</td><td>Sucursal Sur</td></tr>
          <tr data-cat="Lubricante"><td>Grasa multipropósito</td><td>Lubricante</td><td>5</td><td>Crítico</td><td>Bodega Central</td></tr>
          <tr data-cat="Repuesto"><td>Correa 5V-750</td><td>Repuesto</td><td>12</td><td>Normal</td><td>Estante A1</td></tr>
          <tr data-cat="Herramienta"><td>Alicate</td><td>Herramienta</td><td>18</td><td>Normal</td><td>Sala de herramientas</td></tr>
          <tr data-cat="Consumible"><td>Mascarillas N95</td><td>Consumible</td><td>20</td><td>Normal</td><td>Recepción</td></tr>
          <tr data-cat="Lubricante"><td>WD-40 Spray</td><td>Lubricante</td><td>40</td><td>Normal</td><td>Bodega Central</td></tr>
          <tr data-cat="Repuesto"><td>Rodamiento SKF 6205</td><td>Repuesto</td><td>10</td><td>Normal</td><td>Estante C3</td></tr>
          <tr data-cat="Herramienta"><td>Martillo</td><td>Herramienta</td><td>16</td><td>Normal</td><td>Taller Norte</td></tr>
          <tr data-cat="Consumible"><td>Jabón industrial</td><td>Consumible</td><td>25</td><td>Normal</td><td>Baños</td></tr>
          <tr data-cat="Lubricante"><td>Aceite SAE 15W-40</td><td>Lubricante</td><td>3</td><td>Crítico</td><td>Bodega Central</td></tr>
          <tr data-cat="Herramienta"><td>Sierra manual</td><td>Herramienta</td><td>9</td><td>Normal</td><td>Sucursal Sur</td></tr>
          <tr data-cat="Repuesto"><td>Polea aluminio 4"</td><td>Repuesto</td><td>7</td><td>Crítico</td><td>Bodega Norte</td></tr>
          <tr data-cat="Consumible"><td>Cinta aislante</td><td>Consumible</td><td>30</td><td>Normal</td><td>Estante D5</td></tr>
        </tbody>
      </table>
      <button onclick="mostrarToast('Inventario exportado correctamente')">📁 Exportar Inventario</button>`;
  }

  else if (pantalla === 'productos') {
    contenido.innerHTML = `
      <h2>Gestión de Productos</h2>
      <form onsubmit="event.preventDefault(); mostrarToast('Producto registrado con éxito'); cargar('productos');">
        <label>Nombre del producto:</label><input type="text" required>
        <label>Número de serie:</label><input type="text" required>
        <label>Categoría:</label>
        <select><option>Lubricante</option><option>Herramienta</option><option>Repuesto</option><option>Consumible</option></select>
        <label>Ubicación:</label><input type="text" required>
        <label>Proveedor:</label><input type="text" required>
        <label>Precio de compra:</label><input type="number" required>
        <label>Descripción:</label><textarea rows="3"></textarea>
        <button type="submit">Registrar Producto</button>
      </form>`;
  }

  else if (pantalla === 'alertas') {
    contenido.innerHTML = `
      <h2>Alertas de Stock y Vencimientos</h2>
      <div class="alerta critico">⚠️ Aceite SAE 15W-40 - stock crítico (3)</div>
      <div class="alerta critico">⚠️ Grasa multipropósito - stock crítico (5)</div>
      <div class="alerta critico">⚠️ Filtro de aire - stock crítico (4)</div>
      <div class="alerta aviso">⏳ Lubricante 5W-30 vence en 3 días</div>
      <div class="alerta aviso">⏳ Alcohol Gel vence en 5 días</div>`;
  }

  else if (pantalla === 'movimientos') {
    contenido.innerHTML = `
      <h2>Movimientos de Inventario</h2>
      <button onclick="document.getElementById('formMov').style.display='block'">➕ Registrar Movimiento</button>
      <div id="formMov" style="display:none; margin-top:20px;">
        <form onsubmit="event.preventDefault(); mostrarToast('Movimiento registrado'); cargar('movimientos');">
          <label>Fecha:</label><input type="date" required>
          <label>Tipo:</label>
          <select required><option>Entrada</option><option>Salida</option><option>Devolución</option><option>Transferencia</option></select>
          <label>Producto:</label><input type="text" required>
          <label>Cantidad:</label><input type="number" required>
          <label>Observación:</label><textarea></textarea>
          <button type="submit">Guardar Movimiento</button>
        </form>
      </div>
      <h3>Historial de Movimientos</h3>
      <table>
        <thead><tr><th>Fecha</th><th>Tipo</th><th>Producto</th><th>Cantidad</th><th>Observación</th></tr></thead>
        <tbody>
          <tr><td>2025-06-10</td><td>Entrada</td><td>Aceite 5W-30</td><td>30</td><td>Ingreso desde proveedor</td></tr>
          <tr><td>2025-06-11</td><td>Salida</td><td>Filtro de aire</td><td>5</td><td>Uso en mantenimiento</td></tr>
          <tr><td>2025-06-12</td><td>Entrada</td><td>Llave Inglesa</td><td>10</td><td>Compra directa</td></tr>
          <tr><td>2025-06-13</td><td>Devolución</td><td>Alcohol Gel</td><td>2</td><td>Producto no utilizado</td></tr>
          <tr><td>2025-06-14</td><td>Transferencia</td><td>Mascarillas N95</td><td>10</td><td>A Sucursal Norte</td></tr>
          <tr><td>2025-06-15</td><td>Salida</td><td>Bujía XTR</td><td>3</td><td>Entrega a mecánico</td></tr>
          <tr><td>2025-06-16</td><td>Entrada</td><td>Guantes Desechables</td><td>50</td><td>Reposición</td></tr>
          <tr><td>2025-06-17</td><td>Transferencia</td><td>Rodamiento SKF</td><td>4</td><td>A Taller Sur</td></tr>
          <tr><td>2025-06-18</td><td>Salida</td><td>Jabón industrial</td><td>8</td><td>Uso interno</td></tr>
          <tr><td>2025-06-19</td><td>Entrada</td><td>Aceite SAE 15W-40</td><td>20</td><td>Stock mínimo alcanzado</td></tr>
          <tr><td>2025-06-20</td><td>Entrada</td><td>Cinta aislante</td><td>40</td><td>Compra por volumen</td></tr>
          <tr><td>2025-06-21</td><td>Salida</td><td>Taladro</td><td>1</td><td>Uso en proyecto especial</td></tr>
          <tr><td>2025-06-22</td><td>Entrada</td><td>Polea aluminio</td><td>5</td><td>Stock crítico</td></tr>
          <tr><td>2025-06-23</td><td>Salida</td><td>WD-40 Spray</td><td>10</td><td>Distribución mensual</td></tr>
          <tr><td>2025-06-24</td><td>Devolución</td><td>Correa 5V-750</td><td>1</td><td>No era compatible</td></tr>
        </tbody>
      </table>`;
  }

  else if (pantalla === 'proveedores') {
    contenido.innerHTML = `
      <h2>Gestión de Proveedores</h2>
      <button onclick="document.getElementById('formProveedor').style.display='block'">➕ Añadir Proveedor</button>
      <div id="formProveedor" style="display:none;">
        <form onsubmit="event.preventDefault(); mostrarToast('Proveedor registrado'); cargar('proveedores');">
          <label>Nombre:</label><input type="text" required>
          <label>Contacto:</label><input type="text">
          <label>Email:</label><input type="email">
          <label>Teléfono:</label><input type="tel">
          <button type="submit">Registrar</button>
        </form>
      </div>
      <h3>Lista de Proveedores</h3>
      <table><thead><tr><th>Nombre</th><th>Contacto</th><th>Email</th><th>Teléfono</th></tr></thead>
      <tbody>
        <tr><td>PetroLube S.A.</td><td>Carla Mella</td><td>ventas@petrolube.cl</td><td>+56 9 1234 5678</td></tr>
        <tr><td>Tecnorod Ltda.</td><td>Daniel Pino</td><td>dpino@tecnorod.cl</td><td>+56 9 8765 4321</td></tr>
        <tr><td>Industrias Moraga</td><td>Ana Rojas</td><td>ana.rojas@moraga.cl</td><td>+56 2 2987 1122</td></tr>
        <tr><td>Equipos y Más</td><td>Rodrigo León</td><td>rleon@equiposmas.com</td><td>+56 2 2938 4455</td></tr>
      </tbody></table>`;
  }

  else if (pantalla === 'kits') {
    contenido.innerHTML = `
      <h2>Administración de Kits</h2>
      <button onclick="document.getElementById('formKit').style.display='block'">➕ Crear Kit</button>
      <div id="formKit" style="display:none;">
        <form onsubmit="event.preventDefault(); mostrarToast('Kit creado'); cargar('kits');">
          <label>Nombre del Kit:</label><input type="text" required>
          <label>Componentes:</label><textarea placeholder="Ej: Tornillo x2, Llave x1" required></textarea>
          <button type="submit">Guardar Kit</button>
        </form>
      </div>
      <h3>Kits Registrados</h3>
      <ul>
        <li>Kit A: Llave Inglesa + Tornillos + WD-40</li>
        <li>Kit B: Aceite 5W-30 + Filtro de aire</li>
        <li>Kit C: Martillo + Guantes + Mascarilla</li>
        <li>Kit D: Sierra manual + Polea aluminio</li>
      </ul>`;
  }

  else if (pantalla === 'usuarios') {
    contenido.innerHTML = `
      <h2>Gestión de Perfiles y Usuarios</h2>
      <button onclick="document.getElementById('formUsuario').style.display='block'">➕ Añadir Usuario</button>
      <div id="formUsuario" style="display:none;">
        <form onsubmit="event.preventDefault(); mostrarToast('Usuario creado'); cargar('usuarios');">
          <label>Nombre de usuario:</label><input type="text" required>
          <label>Rol:</label>
          <select><option>Administrador</option><option>Bodega</option><option>Auditor</option><option>Compras</option><option>Técnico</option></select>
          <button type="submit">Registrar Usuario</button>
        </form>
      </div>
      <ul>
        <li>AnaAdmin - Administrador</li>
        <li>PedroBodega - Bodega</li>
        <li>LucíaAudit - Auditor</li>
        <li>MarioCompras - Compras</li>
        <li>SofíaTec - Técnico</li>
      </ul>`;
  }

  else if (pantalla === 'respaldo') {
    contenido.innerHTML = `
      <h2>Configuración y Respaldo de Datos</h2>
      <p>Último respaldo automático: 2025-06-24 12:00</p>
      <button onclick="mostrarToast('Respaldo generado')">💾 Generar respaldo</button>
      <h3>Historial de respaldos</h3>
      <ul>
        <li>24/06/2025 - 12:00</li>
        <li>23/06/2025 - 10:30</li>
        <li>22/06/2025 - 08:45</li>
        <li>21/06/2025 - 17:20</li>
        <li>20/06/2025 - 14:50</li>
        <li>19/06/2025 - 11:15</li>
        <li>18/06/2025 - 19:05</li>
        <li>17/06/2025 - 09:00</li>
        <li>16/06/2025 - 07:40</li>
        <li>15/06/2025 - 21:30</li>
      </ul>`;
  }

  else if (pantalla === 'compras') {
    contenido.innerHTML = `
      <h2>Órdenes de Compra Automáticas</h2>
      <p>Generadas por el sistema al detectar stock bajo:</p>
      <table>
        <thead><tr><th>Producto</th><th>Cantidad</th><th>Estado</th></tr></thead>
        <tbody>
          <tr><td>Aceite SAE 15W-40</td><td>30</td><td>Pendiente</td></tr>
          <tr><td>Grasa multipropósito</td><td>20</td><td>Pendiente</td></tr>
          <tr><td>Filtro de aire</td><td>15</td><td>Pendiente</td></tr>
          <tr><td>Alcohol Gel 500ml</td><td>40</td><td>Pendiente</td></tr>
          <tr><td>Polea aluminio 4"</td><td>10</td><td>Pendiente</td></tr>
          <tr><td>Aceite 5W-30</td><td>25</td><td>Pendiente</td></tr>
        </tbody>
      </table>`;
  }

  else if (pantalla === 'reportes') {
    contenido.innerHTML = `
      <h2>Reportes Personalizados</h2>
      <form onsubmit="event.preventDefault(); mostrarToast('Reporte generado con filtros aplicados')">
        <label>Rango de fechas:</label>
        <input type="date"> a <input type="date">
        <label>Categoría de producto:</label>
        <select><option>Todas</option><option>Lubricante</option><option>Herramienta</option><option>Repuesto</option><option>Consumible</option></select>
        <label>Ubicación:</label>
        <input type="text" placeholder="Ej: Bodega Central">
        <button type="submit">Generar Reporte</button>
      </form>
      <h3>Opciones de Exportación</h3>
      <button onclick="mostrarToast('Reporte exportado en PDF')">📄 Exportar PDF</button>
      <button onclick="mostrarToast('Reporte exportado en Excel')">📊 Exportar Excel</button>`;

  }   
  else {
    contenido.innerHTML = `<h2>${pantalla}</h2><p>Contenido en desarrollo o pendiente de integración.</p>`;
    }
  }