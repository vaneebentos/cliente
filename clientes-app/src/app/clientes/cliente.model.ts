export interface Cliente {
    id: number;
    nombre: string;
    cuit: string;
    direccion: string;
    grupo: number;
}

export interface Grupo {
    id: number;
    nombre: string;
}
/* modelo de trabajo, el cual se mapea a una base de datos , extructura tabla cliente*/