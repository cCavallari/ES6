
/* Vamos a recorrer los elementos de un arreglo */

function consumoDeAPI(){
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon",
        success: function (response) {
            console.log(response);
            /* for(var i = 0 ; i < response.results.length ; i = i + 1){
                console.log(response.results[i]);
            } */

            for(var pokemon of response.results){
                console.log(pokemon.url);
            }

            /* forEach, map, filter */
            /* forEach */
            /* Con defición de función anterior */
            function callback(pokemon, index){
                console.log(pokemon + " " + index);
            }

            response.results.forEach(callback);

            /* Con función anónima */
            response.results.forEach(function(pokemon, index){
                console.log(pokemon + " " + index);
            });
            
            /* Filter */
            var filtrados = response.results.filter(function(pokemon){
                return pokemon.name == 'metapod';
            });
            
            console.log(filtrados);

        }
    });
}

consumoDeAPI();