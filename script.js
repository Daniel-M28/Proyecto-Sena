
/* calendario */

document.addEventListener("DOMContentLoaded", function () {
  const fechaActual = new Date();
  let mesActual = fechaActual.getMonth();
  let anioActual = fechaActual.getFullYear();

  const btnMesAnterior = document.getElementById("btnMesAnterior");
  const btnMesSiguiente = document.getElementById("btnMesSiguiente");
  const mesAnioActual = document.getElementById("mesAnioActual");
  const contenedorDias = document.querySelector(".dias");

  function actualizarCalendario() {
    contenedorDias.innerHTML = "";

    const diasEnMes = new Date(anioActual, mesActual + 1, 0).getDate();
    const primerDiaSemana = new Date(anioActual, mesActual, 1).getDay();

    mesAnioActual.textContent = new Intl.DateTimeFormat("es", {
      year: "numeric",
      month: "long",
    }).format(new Date(anioActual, mesActual));

    for (let i = 0; i < primerDiaSemana; i++) {
      const diaVacio = document.createElement("div");
      contenedorDias.appendChild(diaVacio);
    }

    for (let dia = 1; dia <= diasEnMes; dia++) {
      const elementoDia = document.createElement("div");
      elementoDia.classList.add("dia");
      elementoDia.textContent = dia;

      if (mesActual === fechaActual.getMonth() && dia === fechaActual.getDate()) {
        elementoDia.classList.add("diaMesActual");
      }

      contenedorDias.appendChild(elementoDia);
    }
  }

  actualizarCalendario();

  btnMesAnterior.addEventListener("click", function () {
    if (mesActual === 0) {
      mesActual = 11;
      anioActual--;
    } else {
      mesActual--;
    }
    actualizarCalendario();
  });

  btnMesSiguiente.addEventListener("click", function () {
    if (mesActual === 11) {
      mesActual = 0;
      anioActual++;
    } else {
      mesActual++;
    }
    actualizarCalendario();
  });
});