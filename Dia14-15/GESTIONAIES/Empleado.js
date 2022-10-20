class Empleado {
    constructor(
        id_empleado,
        id_empresa,
        nombre,
        apellidos,
        foto,
        salario,
        fecha_incorp
    ) {
        this.id_empleado = id_empleado || "Sin ID";
        this.id_empresa = id_empresa || "Sin ID de empresa";
        this.nombre = nombre || "Sin nombre";
        this.apellidos = apellidos || "Sin apellidos";
        this.foto = foto || "sinFoto.png";
        (this.salario = salario || "Sin salario añadido"),
            (this.fecha_incorp = fecha_incorp || new Date());
    }
    mostrarFechaInc() {
        return this.fecha_incorp.getDate() + "/" + (this.fecha_incorp.getMonth()+1) + "/" + this.fecha_incorp.getFullYear();
    }
}
