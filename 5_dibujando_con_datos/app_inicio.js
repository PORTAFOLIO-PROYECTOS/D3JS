var datos = [10,2,3,50,8,13,21,34,55,89,144, 10,2,3,50,8,13,21,34,55,89,144];

function graficar(){
    d3.select('.miGrafica')
        .selectAll('div')
        .data(datos)
        .enter() //crea espacios temporales
        .append('div')
        .attr('class', 'barra')
        .style('height', function(d){
            return d + 'px';
        })
}