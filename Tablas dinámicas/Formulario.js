document.getElementById("formulario").addEventListener("submit", function (evt) {
    evt.preventDefault();

    const tarjeta = document.getElementById("numerotarjeta").value;
    const vencimiento = document.getElementById("FechaVen").value;
    const metodo = document.querySelector('input[name="Grupo1"]:checked')?.value || '';
    const nombre = document.getElementById("Nombre").value;
    const cvc = document.getElementById("CVC").value;
    const talla = document.getElementById("selector").value;
    const comentarios = document.getElementById("textocomen").value;

    const tbody = document.querySelector("tbody");

    const fila = `<tr>
        <td>${tarjeta}</td>
        <td>${vencimiento}</td>
        <td>${metodo}</td>
        <td>${nombre}</td>
        <td>${cvc}</td>
        <td>${talla}</td>
        <td>${comentarios}</td>
        <td><button class="btn-eliminar">Eliminar</button></td>
    </tr>`;

    tbody.innerHTML += fila;

    
    document.querySelectorAll(".btn-eliminar").forEach(btn => {
        btn.onclick = function () {
            this.closest("tr").remove();
        };
    });

   
    document.getElementById("formulario").reset();
});

document.getElementById("btn-limpiar-tabla").addEventListener("click", () => {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
});
