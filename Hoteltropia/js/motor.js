function buscar1(control) {

  var oC1 = document.getElementById(control);
  var oR1 = document.getElementById("resultado1");
  var oCont0 = document.getElementById("contenedor0");
  var oTit0 = document.getElementById("titulo0");
  var hayHoteles=false;

  /* Limpiar el div resultado1 */
  oR1.innerHTML = "";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      const oDatos1 = this.response;
      const oDatos2 = JSON.parse(oDatos1);
      const oHoteles1 = oDatos2["hoteles"];

      for (let hotel of oHoteles1) {

        if (oC1.value.toLowerCase().trim()==hotel.nombre.toLowerCase().trim() || oC1.value.toLowerCase().trim()==hotel.ciudad.toLowerCase().trim() || oC1.value.toLowerCase().trim()==hotel.categoria || oC1.value.toLowerCase().trim()==hotel.pvp){
          
          hayHoteles=true;

          div0 = document.createElement('div');
          div0.setAttribute('class', 'contenedor2-1');
          oR1.appendChild(div0);

          div1 = document.createElement('div');
          div1.setAttribute('class', 'contenedor2-1-1');
          div0.appendChild(div1);

          div2 = document.createElement('div');
          div2.setAttribute('class', 'contenedor2-1-1-1');
          div1.appendChild(div2);

          h2 = document.createElement('h2');
          h2.textContent = hotel.nombre;
          h2.setAttribute('class', 'titulo1');
          div2.appendChild(h2);

          p = document.createElement('p');
          p.textContent = hotel.ciudad;
          p.setAttribute('class', 'texto1');
          div2.appendChild(p);

          p = document.createElement('p');
          p.textContent = hotel.categoria + " estrellas";
          p.setAttribute('class', 'texto1');
          div2.appendChild(p);

          div2 = document.createElement('div');
          div2.setAttribute('class', 'contenedor2-1-1-2');
          div1.appendChild(div2);

          p = document.createElement('p');
          p.textContent = hotel.pvp + " €";
          p.setAttribute('class', 'texto1 marco1 mano1');
          div2.appendChild(p);

          div1 = document.createElement('div');
          div1.setAttribute('class', 'contenedor2-1-2');
          div0.appendChild(div1);

          img = document.createElement('img');
          img.setAttribute("src", hotel.img);
          img.setAttribute("alt", hotel.nombre);
          img.setAttribute('class', 'imagen1');
          div1.appendChild(img);

        }
      }
      if(hayHoteles==true){
        /* Ocultar que no hay resultados */
        oCont0.classList.remove("visible");
        oCont0.classList.add("oculto");
      }  
      else if(hayHoteles==false){
        /* Limpiar el div resultado1 */
        oR1.innerHTML = "";
        /* Mostrar que no hay resultados */
        oCont0.classList.remove("oculto");
        oCont0.classList.add("visible");
      }  
      /* Limpiar el campo de texto */
      oC1.value=""; 

    }
 
  };
  xhttp.open("GET", "json/bd1.json", true);
  xhttp.send();
}