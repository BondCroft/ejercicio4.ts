import { question } from "readline-sync";
//creo una clase cuenta.
class Cuenta{
  private Titular:string;
  private cantidadDinero:number;

  constructor(_Titular: string, _cantidadDinero: number){
    this.Titular = _Titular;
    this.cantidadDinero = _cantidadDinero;
  }
  //metodo que cambia el nombre del titular y lo valida antes de asignarlo.
  public modificarTitular(nuevoTitular:string){
    while (isNaN(+nuevoTitular) == false){
      nuevoTitular = question(`Error! Nombre incorrecto, ingrese nuevamente!: `);
    }
    console.log(`El titular era: '${this.Titular}'`);
    this.Titular = nuevoTitular;
    console.log(`El nuevo titular es '${this.Titular}'`);
  }
  //metodo solo para ingresar saldo, valida q sea de tipo number y no sea negativo.
  public ingresarDinero(cantidad:number){
    while (cantidad <= 0 || isNaN(cantidad)) {
      cantidad = +question(`Error! cararcter no valido! Ingrese nuevamente: $`);
    }
    console.log(`El saldo actual es de $${this.cantidadDinero}.-`);
    this.cantidadDinero = this.cantidadDinero + cantidad;
    console.log(`Ingreso $${cantidad}.-
    Su nuevo saldo es de $${this.cantidadDinero}.-`);
  }
  //metodo para retirar dinero valida q sea tipo number y que la cuenta tenga saldo.
  public retirarDinero(cantidad:number){
    while(cantidad <= 0 || cantidad > this.cantidadDinero || isNaN(cantidad)){
      if(cantidad > this.cantidadDinero)
        cantidad = +question(`ERROR! Saldo insuficiente! Ingrese nuevo saldo a retirar: $`);
      if(isNaN(cantidad))
        cantidad = +question(`Cararter no valido! Reingrese saldo: $`);
    }
    console.log(`El saldo actual es de $${this.cantidadDinero}.-
    Retiro ${cantidad}.-`);
    this.cantidadDinero = this.cantidadDinero - cantidad;
    console.log(`Su nuevo saldo es de $${this.cantidadDinero}.-`);
  }
}
//variable con el menu de opciones
let menu:string = `
Menu de pciones:
1_Modificar Titular.
2_Ingresar Dinero.
3_Retirar Dinero.
4_Salir
Opcion ingresada: `;
//antes de crear un objeto pido datos al usuario para el constructor.
let name:string = question(`Creando cuenta! Ingrese nombre del titular: `);
while (isNaN(+name) == false){         //valido q name sea tipo string
  name = question(`Error! Nombre incorrecto, ingrese nuevamente!: `);
}
let saldo:number = +question(`Ingrese saldo inicial: $`);
while (isNaN(saldo) || saldo > 0){    //valido q sea tipo number
  saldo = question(`Error! saldo incorrecto, ingrese nuevamente!: `);
}
const Cuenta1 = new Cuenta(name, saldo);  //creo el objeto.

for(;;){  //bucle para el menu de opciones.
  let op:number = +question(menu);
  switch (op) {
    case 1:
      Cuenta1.modificarTitular(question(`Ingrese nuevo nombre del titular: `));
      break;
    case 2:
      Cuenta1.ingresarDinero(+question(`Ingrese nuevo saldo: `));
      break;
    case 3:
      Cuenta1.retirarDinero(+question(`Ingrese saldo a retirar: `));
      break;
    case 4:
      break;
    default:
      console.log("La opcion no es valida!");
      break;
  }
  if(op == 4){  //salgo del programa.
    console.log('Saliendo del Programa...');
    break;
  }
}
/*falta validar en profundidad cada string ingresado y cada number*/