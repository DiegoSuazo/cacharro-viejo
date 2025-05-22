// Imagen del auto
const imagen = document.getElementById("car-img");

// Radios de color
const radiosColor = document.querySelectorAll("input[name='color']");

// Valores de adicionales
const adicionales = {
  Neblineros: 80000,
  Portaequipaje: 350000,
  Mascotas: 50000,
  LED: 70000,
  Camara: 100000,
};

// Cambiar imagen al seleccionar color
radiosColor.forEach((radio) =>
  radio.addEventListener("change", () => {
    imagen.src = `img/${radio.value}.jpg`;
  })
);

// Calcular total y mostrar resumen
function calcularCompra() {
  const color = document.querySelector("input[name='color']:checked").value;
  let total =
    3500000 + (color === "negro" ? 800000 : color === "rojo" ? 400000 : 0);

  const seleccionados = Array.from(
    document.querySelectorAll("input[type='checkbox']:checked")
  ).map((chk) => ({ nombre: chk.value, valor: adicionales[chk.value] }));

  seleccionados.forEach((item) => (total += item.valor));

  // Mostrar resumen
  document.getElementById("resultado").innerHTML = `
    <h4>Resumen de la Compra</h4>
    <p><strong>Color:</strong> ${color}</p>
    <ul>
      ${seleccionados
        .map(
          (item) => `<li>${item.nombre}: $${item.valor.toLocaleString()}</li>`
        )
        .join("")}
    </ul>
    <p><strong>Total a pagar:</strong> $${total.toLocaleString()}</p>
  `;
}
