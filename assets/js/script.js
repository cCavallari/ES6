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

    /* expresiones regulares */
    /* En la caja dos, toda letra "a" que se incorpore se deben cambiar de mayúsculas a minúsculas y vicerversa */
    /* Object(); función contructora MADRE */
    /* gi = es una bandera que evalua la cadena de caracteres (global) sin importar si son mayúsculas o minúsculas (i)  */
    /* Tenemos dos opciones: */
    var regexUno = new RegExp(/a/, 'gi');
    var regexDos = /hola/gi;

    cajaDos.value = cajaDos.value.replaceAll(regexUno, function(match){ /* match es una convención, ya que este parametro puede llevar cualquier nombre */
        return match === 'a' ? 'A': 'a';
    });

    if (match === 'a') {
        return 'A';
    } else if(match === 'c'){
        return 'C';
    }

    /* alert('Etse alert se envia después de la captura de cajas'); */
});

/* trimStart . trimEnd (limpia los espacios en balnco del inicio y el final, respectivamente, de la cadena de caracteres)*/
cajaUno.value = cajaUno.value.trimEnd();

/* Template string - back ticks*/
