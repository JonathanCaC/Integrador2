const entTicket = 2500;

let descCodoacodo = 0.25;
let descClubautocine = 0.40;
let descJubilados = 0.50;

const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const pelicula = document.getElementById('pelicula');
const totalPagar = document.getElementById('totPagar');
const selCantidad = document.getElementById('cantEntradas');
const selPelicula = document.getElementById('pelSeleccionada');
const estado = document.getElementById('valEstado');
const btnValidar = document.getElementById('valEntrada');
const btnLimpiar = document.getElementById('limpForm');

function calcEntrada(){
    let total = cantidad.value * entTicket;    
            switch (categoria.value) {
                case "sindescuento":
                    total = total;
                    estado.textContent = "Usted no tiene ningun descuento.";
                    estado.classList = 'negro';
                    break;
                case "codoacodo":
                    total = total - (total * descCodoacodo);
                    estado.textContent = "Presentar la constancia de alumno regular.";
                    estado.classList = 'negro';
                    break;
                case "clubautocine":
                    total = total - (total * descClubautocine);
                    estado.textContent = "Presentar la credencial del club.";
                    estado.classList = 'negro';
                break;
                case "jubilados":
                    total = total - (total * descJubilados);
                    estado.textContent = "Presentar el carnet de jubilado.";
                    estado.classList = 'negro';
                break;
            
                default:
                    break;
            }

    selPelicula.textContent = `Pelicula seleccionada: ${pelicula.value}`;
    selCantidad.textContent = `Cantidad de entradas: ${cantidad.value}`;
    totalPagar.textContent = `Total a pagar: $${total}`;

}

btnValidar.addEventListener('click',(e)=>{
    e.preventDefault() 
        let numEntrada = parseInt(cantidad.value)
        
        if (nombre.value === "") {
            estado.textContent = "Por favor ingrese su nombre.";
            estado.classList = 'rojo';
        } else if (apellido.value === "") {
            estado.textContent = "Por favor ingrese su apellido.";
            estado.classList = 'rojo';
        } else if (email.value === "") {
            estado.textContent = "Por favor ingrese su correo electrónico.";
            estado.classList = 'rojo';
        } else if (cantidad.value === "") {
            estado.textContent = "Por favor ingrese cantidad de entradas.";
            estado.classList = 'rojo';
            
        }else
            if (numEntrada <=0 ){
                estado.textContent = "Por favor ingrese números mayores a 0."
                estado.classList = 'rojo';
            } else {
                calcEntrada();
            }


        
        
})

btnLimpiar.addEventListener('click',(e)=>{
    e.preventDefault()
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    pelicula.value = "Titanic";
    cantidad.value = "";
    categoria.value = "sindescuento";

    selPelicula.textContent = `Pelicula seleccionada: Titanic`;
    selCantidad.textContent = `Cantidad de entradas: 0`;
    totalPagar.textContent = `Total a pagar: $0`;
    estado.textContent = "Complete el formulario de entradas.";

})
