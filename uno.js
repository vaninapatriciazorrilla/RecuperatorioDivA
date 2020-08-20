/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
    let peso;
    let sexo;
    let edad;
    let edadPromedio;
	let hombreMasPesado;
	let nombreHombremasPesado;
    let contCantFem=0;
	let contCantMas=0;
    let flag=0;
	let acumEdad=0;
	
	for (let i = 0 ; i < 5 ; i++){
        
        nombre = prompt("ingrese su nombre");
        while ( nombre == " " || (!(isNaN(nombre)))) {
			nombre = prompt("INCORRECTO.. Ingrese nombre");
		}
		sexo = prompt('ingrese el tipo "masculino" ; "femenino"').toLowerCase();
		while( sexo != "masculino" && sexo != "femenino") {
			sexo = prompt('INCORRECTO.. imgrese el tipo "masculino" o "femenino"').toLowerCase();
		}
		edad = parseInt(prompt("Ingrese la edad "));
		while (!( edad >= 0 && edad <=120  || isNaN(edad))){
			edad = parseInt(prompt("INCORRECTO.. debe ingrese la edad "));
		}
		peso= parseFloat(prompt("ingrese el peso:"));
		while( peso <= 0 || isNaN(peso)){
			peso= parseFloat(prompt("INCORRECTO... debe ingresar el peso: "));
        }		
        
		acumEdad += edad;

		if (sexo == "masculino") {
			contCantMas ++;
			if (flag == 0 || peso > hombreMasPesado){
				hombreMasPesado = peso;
				nombreHombremasPesado = nombre;
				flag = 1;
			}
		} else {
			contCantFem ++;
		}
	}
    //hago los caculos que se realizan una vez

	edadPromedio = acumEdad / 5;

	//a)informar la cantidad de mujeres.
	console.log(" A-- La cantidad de mujeres ingresadas es: " + contCantFem);
	//b)la edad promedio en total.
	console.log(" B-- Promedio de edad: " + edadPromedio + "años"); 
	 //c)el hombre mas pesado.
	 if (contCantMas == 0) {
        console.log("C-- No se ingresaron hombres");
    } else {
		console.log(" C-- El hombre ingresado con mas peso es : " +
		nombreHombremasPesado + " con un peso de "+ hombreMasPesado+ " kg. " );
    }
}
