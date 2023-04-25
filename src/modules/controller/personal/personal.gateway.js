const {query} = require('../../../utils/mysql');

const uno = async()=>{
    const sql = `SELECT codigo_cliente, nombre_cliente FROM cliente WHERE codigo_cliente NOT IN (SELECT DISTINCT codigo_cliente FROM pago)
    `;
    return await query(sql, []);
}
const dos = async()=>{
    const sql = `SELECT codigo_cliente, nombre_cliente FROM cliente WHERE codigo_cliente NOT IN (SELECT DISTINCT codigo_cliente FROM pedido)
    `;
    return await query(sql, []);
}
const tres = async()=>{
    const sql = `SELECT codigo_cliente, nombre_cliente FROM cliente 
    WHERE codigo_cliente NOT IN (SELECT DISTINCT codigo_cliente FROM pago)
    AND codigo_cliente NOT IN (SELECT DISTINCT codigo_cliente FROM pedido)
    `;
    return await query(sql, []);
}
const cuatro = async()=>{
    const sql = `SELECT codigo_empleado, nombre FROM empleado WHERE codigo_oficina IS NULL
    `;
    return await query(sql, []);
}
const cinco = async()=>{
    const sql = `SELECT codigo_empleado, nombre FROM empleado WHERE codigo_empleado NOT IN (SELECT DISTINCT codigo_empleado_rep_ventas FROM cliente)
    `;
    return await query(sql, []);
}
const seis = async()=>{
    const sql = `SELECT COUNT(*) FROM empleado
    `;
    return await query(sql, []);
}
const siete = async()=>{
    const sql = `SELECT pais, COUNT(*) AS cantidad_clientes FROM cliente GROUP BY pais
    `;
    return await query(sql, []);
}
const ocho = async()=>{
    const sql = `SELECT AVG(total) AS pago_medio FROM pago WHERE YEAR(fecha_pago) = 2009
    `;
    return await query(sql, []);
}
const nueve = async()=>{
    const sql = `SELECT estado, COUNT(*) AS cantidad_pedidos FROM pedido GROUP BY estado ORDER BY cantidad_pedidos DESC
    `;
    return await query(sql, []);
}
const diez = async()=>{
    const sql = `SELECT nombre_cliente, limite_credito FROM cliente ORDER BY limite_credito DESC LIMIT 1
    `;
    return await query(sql, []);
}

module.exports = {uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez};