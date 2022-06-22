function grafica_scatter() {
    let fecha = [];
    let indice_infancia = [];
    let indice_juventud = [];
    let indice_vejez = [];

    let url = 'https://www.datos.gov.co/resource/gh4e-xuyg.json';
    fetch(url)
        .then(datos_obtenidos => datos_obtenidos.json())

        .then(function (datos_obtenidos){
            datos_obtenidos.forEach(function agregar(datos_obtenidos){
              if(datos_obtenidos.area_del_hecho != undefined && datos_obtenidos.genero != undefined 
                && datos_obtenidos.edad != undefined && datos_obtenidos.mecanismo_muerte != undefined){
                   
                    area.push(datos_obtenidos.area_del_hecho);
                    genero.push(datos_obtenidos.genero);
                    edad.push(datos_obtenidos.edad);
                    metodo.push(datos_obtenidos.mecanismo_muerte);
                }  
            });
            var traza1 = {
                x: edad,
                y: genero,
                text: ['</br>tamaño: 20','<br>tamaño: 40', '<br>tamaño: 60', '<br>tamaño: 80', '<br>tamaño: 100', '</br>tamaño: 120'],
                mode: 'markers',
                name: 'Genero',
                textposition: 'top center',
                textfont: {
                    family: 'Raleway, Times New Roman'
                },
                marker: {
                    size: [200,400, 600, 800, 1000, 1200, 1400],
                    sizeref: 0.3, //Tamaño del circulo
                    sizemode: 'area',
                    color: 'rgb(130,236,111)',
                }
            };
            var traza2 = {
                x: edad,
                y: metodo,
                text: ['</br>tamaño: 20','</br>tamaño: 40', '</br>tamaño: 60', '</br>tamaño: 80', '</br>tamaño: 100', '</br>tamaño: 120'],
                mode: 'markers',
                name: 'Método',
                textposition: 'bottom center',
                textfont: {
                    family: 'Raleway, Times New Roman'
                },
                marker: {
                    size: [200,400, 600, 800, 1000, 1200, 1400],
                    sizeref: 0.3,
                    sizemode: 'area',
                    color: 'rgb(217,96,70)',
                }
            };
            var traza3 = {
                x: edad,
                y: area,
                text: ['</br>tamaño: 20','</br>tamaño: 40', '</br>tamaño: 60', '</br>tamaño: 80', '</br>tamaño: 100', '</br>tamaño: 120'],
                mode: 'markers',
                name: 'Lugar del hecho',
                textposition: 'bottom center',
                textfont: {
                    family: 'Raleway, Times New Roman'
                },
                marker: {
                  size: [200,400, 600, 800, 1000, 1200, 1400],
                  sizeref: 0.3,
                  sizemode: 'area',
                  color: 'rgb(155,66,75)',
                }
            };
              
            var data = [traza1,traza2,traza3];
              
            var layout = {
                title: 'Casos de suicidio en el país',
                xaxis:
                {
                    title: "Edad"
                },
                showlegend: true,
                height: 600,
                width: 1200,
                legend: {
                    y: 0.6,
                    yref: 'paper',
                    font: {
                        family: 'Arial Narrow',
                        size: 16,
                        color: 'grey-dark', 
                    }
                }
            };
              
            Plotly.newPlot('Grafo2', data, layout);
        })
        boton2();
}

function funcion(){
    var n1 = document.getElementById('Erik').value;
    var n2 = document.getElementById('Erik2').value;

    n1 = parseInt(n1)
    n2 = parseInt(n2)
    var resp = n1 + n2
    alert(resp)
}

function validarEntero(identificador) {
    let field = document.getElementById(identificador);
    let valueInt = parseInt(field.value);
    if (!Number.isInteger(valueInt)) {
      return false;
    } else {
      field.value = valueInt;
      return true;
    }
  }
