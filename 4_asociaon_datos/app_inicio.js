var datos = [1,2,3,5,8,13,21,34,55,89,144];

function graficar(){
    d3.select('.miGrafica')
        .selectAll('div')
        .data(datos)
        .enter() //crea espacios temporales
        .append('div')
        .text(function(d){
            // una funcion como cualquiera
            return d; // se puede concatenar textos
        })
        .style('background-color', 'green')
        .style('color', 'white')
        .style('padding','5px')
        .style('margin','5px')
        .style('text-align','right')
}