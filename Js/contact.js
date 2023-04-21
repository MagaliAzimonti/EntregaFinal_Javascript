const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputTelefono = document.querySelector("#inputTelefono")
const inputDireccion = document.querySelector("#inputDireccion")
const btnSubmit = document.querySelector("#btnSubmit")

let datosDeInput = ""

btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Ingrese sus datos antes de enviar"
})

btnSubmit.addEventListener("mouseover", ()=> {
    btnSubmit.className = "btn btn-warning"
})

btnSubmit.addEventListener("mouseup", ()=> {
    btnSubmit.className = "btn btn-primary"
})

btnSubmit.addEventListener("mouseout", ()=> {
    btnSubmit.className = "btn btn-primary"
})

const alertaFormularioEnviado = (mensaje)=> {
    Swal.fire({
        title: mensaje,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, enviar',
        cancelButtonText: 'Cencelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡El formulario ha sido enviado con éxito!',
            'Nos comunicaremos a la brevedad para confirmar el pago.',
            'success'
          )
          document.querySelector("#productosComprados").innerHTML = `Precio total: $ 0`
        }
        
      })
}


document.addEventListener("submit", (e)=> {
    e.preventDefault()
    guardarDatos()
    alertaFormularioEnviado('¿Seguro que deseas enviar el formulario?')
    
})

function guardarDatos() {
    const datosDeUsuario = {nombre: inputNombre.value,
                            email: inputEmail.value,
                            telefono: inputTelefono.value,
                            direccion: inputDireccion.value
    }
    let str = JSON.stringify(datosDeUsuario)
    localStorage.setItem("datosDeUsuario", str)
}

function recuperarDatos() {
    if (carritoTotalCambio = JSON.parse(localStorage.getItem("total"))) {
        document.querySelector("#productosComprados").innerHTML = `Precio total: $${carritoTotalCambio}`
    if (localStorage.getItem("datosDeUsuario")) {
        const datosDeUsuario = JSON.parse(localStorage.getItem("datosDeUsuario"))
        inputNombre.value = datosDeUsuario.nombre
        inputEmail.value = datosDeUsuario.email
        inputTelefono.value = datosDeUsuario.telefono
        inputDireccion.value = datosDeUsuario.direccion
        }
    }
}

recuperarDatos() 