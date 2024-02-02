function cargarEstados() {
    var paisSeleccionado = document.getElementById("paisDropdown").value;
    var estados = obtenerEstadosDesdeServidor(paisSeleccionado);

    // Limpiar el dropdown de estados
    var estadoDropdown = document.getElementById("estadoDropdown");
    estadoDropdown.innerHTML = "";

    // Agregar las nuevas opciones al dropdown de estados
    for (var i = 0; i < estados.length; i++) {
      var option = document.createElement("option");
      option.value = estados[i];
      option.text = estados[i];
      estadoDropdown.add(option);
    }

    // Limpiar y deshabilitar dropdowns dependientes
    document.getElementById("municipioDropdown").innerHTML = "";
    document.getElementById("localidadDropdown").innerHTML = "";
  }

  function cargarMunicipios() {
    var estadoSeleccionado = document.getElementById("estadoDropdown").value;
    var municipios = obtenerMunicipiosDesdeServidor(estadoSeleccionado);

    // Limpiar el dropdown de municipios
    var municipioDropdown = document.getElementById("municipioDropdown");
    municipioDropdown.innerHTML = "";

    // Agregar las nuevas opciones al dropdown de municipios
    for (var i = 0; i < municipios.length; i++) {
      var option = document.createElement("option");
      option.value = municipios[i];
      option.text = municipios[i];
      municipioDropdown.add(option);
    }

    // Limpiar y deshabilitar dropdowns dependientes
    document.getElementById("localidadDropdown").innerHTML = "";
  }

  function cargarLocalidades() {
    var municipioSeleccionado = document.getElementById("municipioDropdown").value;
    var localidades = obtenerLocalidadesDesdeServidor(municipioSeleccionado);

    // Limpiar el dropdown de localidades
    var localidadDropdown = document.getElementById("localidadDropdown");
    localidadDropdown.innerHTML = "";

    // Agregar las nuevas opciones al dropdown de localidades
    for (var i = 0; i < localidades.length; i++) {
      var option = document.createElement("option");
      option.value = localidades[i];
      option.text = localidades[i];
      localidadDropdown.add(option);
    }
  }
  function mostrarDatos() {
    var pais = document.getElementById("paisDropdown").value;
    var estado = document.getElementById("estadoDropdown").value;
    var municipio = document.getElementById("municipioDropdown").value;
    var localidad = document.getElementById("localidadDropdown").value;

    var datosSeleccionados = "País: " + pais + "<br>" +
                             "Estado: " + estado + "<br>" +
                             "Municipio: " + municipio + "<br>" +
                             "Localidad: " + localidad;

    document.getElementById("datosSeleccionados").innerHTML = datosSeleccionados;
  }

  // Funciones de simulación de solicitudes AJAX
  function obtenerEstadosDesdeServidor(pais) {
    // Simular una solicitud AJAX y devolver datos estáticos
    if (pais === "México") {
      return ["Hidalgo", "Guanajuato"];
    } else if (pais === "Estados Unidos") {
      return ["Mineapolis", "Chicago"];
    }
    return [];
  }

  function obtenerMunicipiosDesdeServidor(estado) {
    // Simular una solicitud AJAX y devolver datos estáticos
    if (estado === "Hidalgo") {
      return ["Tula", "El Carmen"];
    } else if (estado === "Guanajuato") {
      return ["San Luis de la paz", "Tierra Blanca"];
    } else if (estado === "Mineapolis") {
      return ["Plymouth", "Hopkins"];
    } else if (estado === "Chicago") {
      return ["New City", "Gage Park"];
    }
    return [];
  }

  function obtenerLocalidadesDesdeServidor(municipio) {
    // Simular una solicitud AJAX y devolver datos estáticos
    if (municipio === "Tula") {
      return ["San Marcos", "Zaragoza"];
    } else if (municipio === "El Carmen") {
      return ["La Joya", "Las Galaxias"];
    } else if (municipio === "Municipio 2A") {
      return ["Localidad 2A", "Localidad 2B"];
    } else if (municipio === "Municipio 2B") {
      return ["Localidad 2C", "Localidad 2D"];
    }
    return [];
  }