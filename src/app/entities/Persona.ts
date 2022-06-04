export class Persona {
    _nombre: string = "";
    _apellidos: string = "";
    _fechaNacimiento: Date = new Date();
    _edad: number;
    _dni: string;
    _color: string;
    _sexo: string;

    constructor(
        nombre: string = '', 
        apellidos: string = '', 
        edad: number = 0,
        dni: string = '', 
        color: string = '',
        sexo: string = '',
        fechaNacimiento: Date = new Date()
    ) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._fechaNacimiento = fechaNacimiento;
        this._edad = edad;
        this._dni = dni;
        this._color = color;
        this._sexo = sexo;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get nombre(): string {
        return this._nombre;
    }
    
    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }

    get apellidos(): string {
        return this._apellidos;
    }
    
    set edad(edad: number) {
        this._edad = edad;
    }

    get edad(): number {
        return this._edad;
    }
    
    set dni(dni: string) {
        this._dni = dni;
    }

    get dni(): string {
        return this._dni;
    }
    
    set color(color: string) {
        this._color = color;
    }

    get color(): string {
        return this._color;
    }
    
    set sexo(sexo: string) {
        this._sexo = sexo;
    }

    get sexo(): string {
        return this._sexo;
    }
    
    set fechaNacimiento(fechaNacimiento: Date) {
        this._fechaNacimiento = fechaNacimiento;
    }

    get fechaNacimiento(): Date {
        return this._fechaNacimiento;
    }

    toObject() {
        return {
            nombre: this.nombre,
            apellidos: this.apellidos,
            edad: this.edad,
            dni: this.dni,
            color: this.color,
            sexo: this.sexo,
            fechaNacimiento: this.fechaNacimiento,
        }
    }
}