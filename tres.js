/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
*/
function mostrar()
{
	let sexoTitular;
    let lugar;
    let temporada;
    let cantidad;
    let lugarFavorito;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
    let contadorSalta = 0;
    let tipoSexoMasPasajeros;
    let maxPasajeros;
    let contadorInvierno=0;// cuento la cantidad de viajes en invierno
    let acumuladorInvierno=0; // acumulo las personas que viajan en invierno
    let promedio;
    let flag=0;
	let seguir;
	
    do {
        sexoTitular = prompt('ingrese el sexo tipo "masculino" o "femenino"').toLowerCase();
		while( sexoTitular != "masculino" && sexoTitular != "femenino") {
			sexoTitular = prompt('INCORRECTO.. imgrese el tipo "masculino" o "femenino"').toLowerCase();
		}
        lugar = prompt('Ingrese destino: “bariloche”, “cataratas” o “salta”').toLowerCase();
		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {
			lugar = prompt('INCORRECTO.. Ingrese destino: “bariloche”, “cataratas” o “salta”').toLowerCase();
		}
        temporada = prompt("Ingrese temporada: ");
		while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera") {
			temporada = prompt("INCORRECTO.. Ingrese temporada: ");
        }
        cantidad = parseInt(prompt("Ingrese la cantidad de acompañantes"));
		while (cantidad <= 0 || isNaN(cantidad)) {
			cantidad = parseInt(prompt("INCORRECTO.. Ingrese la cantidad de acompañantes"));
		}

		switch (lugar) {
			case "bariloche":
				contadorBariloche++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;
			case "salta":
				contadorSalta++;
				break;		
		}

        if (flag == 0 || cantidad > maxPasajeros) {
            maxPasajeros = cantidad;
            tipoSexoMasPasajeros = sexoTitular;
            flag=1;
        } 
		if (temporada == "invierno") {
			contadorInvierno++;
			acumuladorInvierno += cantidad;
		}
        seguir=prompt("quiere ingresar otros datos:");
    } while (seguir == "s");

	// saber cual es el contador del lugar mayor
	
	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
		lugarFavorito = "Bariloche";
	} else if (contadorCataratas >= contadorBariloche && contadorCataratas > contadorSalta) {
		lugarFavorito = "Cataratas";
	} else {
		lugarFavorito = "Salta";
	}
    
	
	//a)el lugar más elegido
	
	console.log("A- El lugar mas elegido" + lugarFavorito);
	
	//b)el sexo de titular que lleva más pasajeros.
   
	console.log("B-- el sexo del titular que lleva mas pasajeros es: "
	+ tipoSexoMasPasajeros + " con "+ maxPasajeros+" pasajeros");

    //c)el promedio de personas por viaje,  que viajan en invierno
    if (contadorInvierno == 0) {
        console.log("C-- no se viajo en invierno");
    } else {
         promedio = acumuladorInvierno / contadorInvierno;
         console.log("C-- el promedio de las personas que viajan en invierno" + promedio);
	}
}



