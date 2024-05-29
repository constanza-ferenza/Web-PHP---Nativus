
  document.addEventListener('DOMContentLoaded', () => {
    const selectDrop = document.getElementById('provincias');
    
    fetch('https://apis.datos.gob.ar/georef/api/provincias')
      .then(res => res.json())
      .then(data => {
        let output = "";
        
        // Verificar si data.provincias es un array
        if (Array.isArray(data.provincias)) {
          data.provincias.forEach(provincia => {
            output += `
            <option value="${provincia.nombre}">${provincia.nombre}</option>`;
          });
        } else {
          console.error('Error: data.provincias no es un array');
        }
    
        selectDrop.innerHTML = output;
      })
      .catch(err => {
        console.log(err);
      });
  });





