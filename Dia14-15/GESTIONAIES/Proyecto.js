//id_proyecto -- id_cliente -- nombre -- fecha_inicio -- fecha_fin -- descripcion -- estado (previo,activo,finalizado,pausado) -- imagen

class Proyecto {
    constructor(
        id_proyecto,
        id_cliente,
        nombre,
        imagen,
        descripcion,
        fecha_inicio,
        fecha_fin,
        estado
    ) {
        this.id_proyecto = id_proyecto || "Sin ID";
        this.id_cliente = id_cliente || "Sin ID Cliente asignado";
        this.nombre = nombre || "Sin nombre";
        this.imagen = imagen || "newProject.png";
        this.descripcion = descripcion || "No hay descripcion";
        this.fecha_inicio = fecha_inicio || new Date();
        this.fecha_fin = fecha_fin || new Date();
        if (fecha_fin) {
            this.fecha_fin = fecha_fin;
        } else {
            this.fecha_fin = new Date();
            this.fecha_fin.setDate(this.fecha_fin.getDate() + 5); //sumo 5 días a la fecha actual de ese día
        }
        this.estado = estado || "No hay estado activo";
    }

    cambiarEstado(nuevoEstado) {
        var estados = ["previo", "activo", "pausado", "finalizado"];
        if (estados.indexOf((ele) => ele == nuevoEstado)) {
            this.estado = nuevoEstado;
            return true;
        } else {
            return false;
        }
    }
    mostrarFechaInicio(){
        return this.fecha_inicio.getDate() + "/" + (this.fecha_inicio.getMonth()+1) + "/" + this.fecha_inicio.getFullYear();
    }
    mostrarFechaFin(){
        return this.fecha_fin.getDate() + "/" + (this.fecha_inicio.getMonth()+1) + "/" + this.fecha_inicio.getFullYear();
    }
}
