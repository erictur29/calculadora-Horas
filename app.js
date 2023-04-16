const horaIn = document.querySelector('#horaIn');
const minIn = document.querySelector('#minIn');
const horaFin = document.querySelector('#horaFin');
const minFin = document.querySelector('#minFin');

const tipo= document.querySelector('#tipo');
const tipoJornada= document.querySelector('#tipoJornada');
const boton = document.querySelector('#boton');

boton.addEventListener('click', horaTotal);


function horaTotal(){
    console.log(horaFin.size)
   
    if (horaIn.value === '' || horaFin.value === ''  || minIn.value === ''  || minFin.value === ''){
        
        mostrarMensaje('Todos los campos son obligatorios', 'error')

        }else if (horaIn.value > 24 || horaFin.value > 24 || minIn.value > 60 || minFin.value > 60) {
            mostrarMensaje('Los datos no son validos', 'error')
        } else {
            let minTotal = parseInt(minFin.value) - parseInt(minIn.value);
            let horaTotal = parseInt(horaFin.value) - parseInt(horaIn.value);
            
            const registro = document.querySelector('#registro')
            const resultado = document.createElement('p')
            resultado.textContent = `${horaTotal}h y ${minTotal}mins ${tipo.value} de ${tipoJornada.value}`;
            registro.appendChild(resultado)
            
            console.log(`las horas son ${horaTotal} y los minutos ${minTotal}`)

            document.querySelector('#formulario').reset();

            // if (minTotal >= 60){
            //     horaTotal = horaTotal + 1;
            //     minTotal = minTotal - 60;
               
            // } este codigo valdrá en el futuro con la suma del registro
        }   
        
    }

    function datoCorrecto(){
        
    }

    function mostrarMensaje(mensaje, clase){
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add(clase);
        document.querySelector('.principal').appendChild(error)
        setTimeout(()=>{
            error.remove();
        }, 3000)
    }


    
    

    