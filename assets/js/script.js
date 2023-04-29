var btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.addEventListener('click', function(){
    var cajaUno = document.querySelector('#cajaUno');
    var cajaDos = document.querySelector('#cajaDos');
    var check = document.querySelector('#check');

    /* replaceAll, trimStart, trimEnd*/

    console.log(cajaUno.value);
    console.log(cajaDos.value);

    /* replaceAll (este retorna)*/
    /* Estamos ingresando en cajaUno: "Hola, con esto jugaremos" */
    /* Cambiar "esto" por "esta cadena de caracteres" */

    /* cajaUno.value = cajaUno.value.replaceAll('esto', 'esta cadena de caracteres');
    console.log(cajaUno.value); */

    /* Interpolación */
    /* Al apretar el botón pediremos el nombre mediante un prompt y dicho nombre hay que agregarlo a la cadena nueva */
    var nombre = prompt('Ingresa tu nombre');
    cajaUno.value = cajaUno.value.replaceAll('esto', `esta cadena de caracteres ${nombre}`);
    console.log(cajaUno.value);

    /* alert('Etse alert se envia después de la captura de cajas'); */
});

/* Template string - back ticks*/
