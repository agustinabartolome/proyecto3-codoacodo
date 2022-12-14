function totalAPagar(cantCursos, caterogia){
    const valorCurso = 8000;
    let total = cantCursos * valorCurso;

    switch (categoria){
        case "Socios":
            total = total - (total * 70 / 100)
            break;     
        case "Estudiantes":
            total = total - (total * 50 / 100)
            break;
        case "No socios":
            total = total - (total * 30 / 100)
            break;
     }
    return total
}


let boton = document.getElementById("liveAlertBtn")

let formulario = document.getElementById("form_cursos")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault(); 
})


boton.addEventListener("click", ()=>{
    let cantidad = document.getElementById("cantidad").value
    let categoria = document.getElementById("categorias").value


    let valor = totalAPagar (cantCursos, categoria)

    let divMensaje = document.getElementById("liveAlertPlaceHolder")
    div.Mensaje.textContent = "Pago total: $" + valor 
}
)