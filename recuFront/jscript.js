const url = "http://localhost:3000/api/personal/";


const options = {
    method: 'GET'
  };

fetch(`${url}uno/`, options)
  .then(response => response.json())
  .then(data => llenar_tabla(1,data))
  .catch(error => console.error(error));

  fetch(`${url}dos/`, options)
  .then(response => response.json())
  .then(data => llenar_tabla(2,data))
  .catch(error => console.error(error));

  fetch(`${url}tres/`, options)
  .then(response => response.json())
  .then(data => llenar_tabla(3,data))
  .catch(error => console.error(error));

  fetch(`${url}cuatro/`, options)
  .then(response => response.json())
  .then(data => llenar_tabla(4,data))
  .catch(error => console.error(error));

  fetch(`${url}cinco/`, options)
  .then(response => response.json())
  .then(data => llenar_tabla(5,data))
  .catch(error => console.error(error));

  fetch(`${url}seis/`, options)
  .then(response => response.json())
  .then(data => llenar_tabla(6,data))
  .catch(error => console.error(error));

  fetch(`${url}siete/`, options)
  .then(response => response.json())
  .then(data => llenar_tabla(7,data))
  .catch(error => console.error(error));

  fetch(`${url}ocho/`, options)
  .then(response => response.json())
  .then(data => llenar_tabla(8,data))
  .catch(error => console.error(error));

  fetch(`${url}nueve/`, options)
  .then(response => response.json())
  .then(data => llenar_tabla(9,data))
  .catch(error => console.error(error));

  fetch(`${url}diez/`, options)
  .then(response => response.json())
  .then(data => llenar_tabla(10,data))
  .catch(error => console.error(error));



const llenar_tabla = (id, datos)=>{
    var tabla = document.getElementById(`${id}`);
    tabla.innerHTML = "";

    datos.forEach(objeto => {
        var fila = document.createElement("tr");
        for (const clave in objeto) {
            var columna = document.createElement("td");
            columna.textContent = objeto[clave];
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    });
}