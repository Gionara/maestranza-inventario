function cargar(pantalla) {
  const contenido = document.getElementById('contenido');
  switch (pantalla) {
    case 'dashboard':
      contenido.innerHTML = `<h2>Dashboard de Inicio</h2><p>Resumen de stock, alertas y reportes recientes.</p>`;
      break;
    case 'productos':
      contenido.innerHTML = `<h2>Gestión de Productos</h2>
        <form>
          <label>Nombre del producto:</label><input type="text"><br>
          <label>Número de serie:</label><input type="text"><br>
          <label>Ubicación:</label><input type="text"><br>
          <button type="submit">Registrar</button>
        </form>`;
      break;
    case 'movimientos':
      contenido.innerHTML = `<h2>Movimientos de Inventario</h2><p>Entradas, salidas, transferencias.</p>`;
      break;
    case 'alertas':
      contenido.innerHTML = `<h2>Alertas</h2><p>Stock bajo, productos por vencer.</p>`;
      break;
    case 'proveedores':
      contenido.innerHTML = `<h2>Gestión de Proveedores</h2><p>Registro y consulta de proveedores.</p>`;
      break;
    case 'reportes':
      contenido.innerHTML = `<h2>Reportes Personalizados</h2><p>Generación y exportación de informes.</p>`;
      break;
    case 'kits':
      contenido.innerHTML = `<h2>Administración de Kits</h2><p>Creación y control de kits de productos.</p>`;
      break;
    case 'usuarios':
      contenido.innerHTML = `<h2>Gestión de Perfiles</h2><p>Configuración de roles y permisos.</p>`;
      break;
    case 'respaldo':
      contenido.innerHTML = `<h2>Respaldo de Datos</h2><p>Simulación de respaldo y restauración.</p>`;
      break;
    case 'compras':
      contenido.innerHTML = `<h2>Integración con Compras</h2><p>Órdenes automáticas por stock mínimo.</p>`;
      break;
  }
}
