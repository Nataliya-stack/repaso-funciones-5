const inputEl = document.getElementById("inputTexto");
const btnEl = document.getElementById("btnCalcular");
const resultEl = document.getElementById("resultadoTexto");

const revolverTexto = (texto) => texto.split("").reverse().join("");

btnEl.addEventListener("click", () => {
    const texto = inputEl.value.trim();

    if (texto === "") {
        resultEl.textContent = "Error: ¡Los campos no pueden estar vacío!";        
        resultEl.style.color = "red";
        return; 
    }

    resultEl.textContent = `${revolverTexto(texto)}`;
    resultEl.style.color = "white";

    inputEl.value = "";
    inputEl.focus();
});
