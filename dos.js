/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
*/
function mostrar()
{
  let marca;
  let precio;
  let pesoK;
  let tipo;
  let acumuladorPeso = 0;
  let precioLiquidoCaro;
  let marcaLiquidoCaro;
  let flagLiquido=0;
  let pesoSolidoBarato;
  let marcaSolidoBarato;
  let flagSolido = 0;
  let seguir;
  do {
      // pedir datos y validarlos
    marca = prompt("Ingrese marca del producto"); 
    while (marca== " " || (!isNaN(marca))) {
        marca = prompt("INCORRECTO.. Ingrese marca del producto"); 
    }
    precio =parseFloat(prompt("ingrese el precio del producto"));
    while (precio < 0 || isNaN(precio)) {
      precio =parseFloat(prompt("INCORRECTO..ingrese el precio del producto"));
    }
    pesoK = parseFloat(prompt("Ingrese el peso"));
    while (pesoK < 0 || isNaN(pesoK)) {
      pesoK = parseFloat(prompt("INCORRECTO.. Ingrese el peso"));
    }
    tipo= prompt("ingrese el tipo: ");
    while (!(tipo == "solido" || tipo =="liquido")) {
      tipo= prompt("INCORRECTO.. ingrese el  tipo ");
    }
    
   
      // acumular los pesos
      acumuladorPeso += pesoK;

      // tengo que analizar el tipo(solido o liquido)
      if (tipo == "liquido") {
        if ( flagLiquido == 0 || precio > precioLiquidoCaro){
            precioLiquidoCaro= precio;
            marcaLiquidoCaro = marca;
            flagLiquido =1;
        }

      } else {
        if ( flagSolido == 0 || pesoK < pesoSolidoBarato){
            pesoSolidoBarato = pesoK;
            marcaSolidoBarato = marca;
            flagSolido = 1;
        }
      }      
      seguir=prompt("quiere ingresar otro producto:");
  } while (seguir == "s");
// informar resultados( ver si no se ingresaron datos)
//a)informar el peso total de la compra.
  console.log("A- el peso total de la compra: " + acumuladorPeso);
//b)la marca del más caro de los líquidos
  if (flagLiquido == 0){
      console.log("B- no se registraron liquidos");
    } else{
      console.log("B- la marca del mas caro de los liquido es: "
      + marcaLiquidoCaro+ " precio :$ " + precioLiquidoCaro);
    }
//c)la marca del más barato de los sólidos
  if (flagSolido == 0) {
    console.log("C- no se registraron solidos");
  } else {
      console.log("C- el precio solido mas barato es de marca: "
      + marcaSolidoBarato + " precio :$ " + pesoSolidoBarato );
  }

}
