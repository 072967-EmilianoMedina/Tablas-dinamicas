document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const sexo = document.getElementById("sexo").value;
    const fecha = document.getElementById("fh_nac").value;
    const rol = document.getElementById("id_rol").options[document.getElementById("id_rol").selectedIndex].text;

    const tbody = document.querySelector("tbody");

    const fila = `
        <tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${sexo}</td>
            <td>${fecha}</td>
            <td>${rol}</td>
            <td><button class="btn-eliminar">Eliminar</button></td>
        </tr>`;

    tbody.insertAdjacentHTML("beforeend", fila);

    document.querySelectorAll(".btn-eliminar").forEach(btn => {
        btn.onclick = function () {
            this.closest("tr").remove();
        };
    });

    document.getElementById("formulario").reset();
});


