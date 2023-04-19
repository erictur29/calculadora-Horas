const horaIn = document.querySelector('#horaIn');
const minIn = document.querySelector('#minIn');
const horaFin = document.querySelector('#horaFin');
const minFin = document.querySelector('#minFin');

const tipo= document.querySelector('#tipo');
const tipoJornada= document.querySelector('#tipoJornada');
const boton = document.querySelector('#boton');
const total = document.querySelector('#total');


let jih = 0;
let jim = 0;
let dch = 0;
let dcm = 0;
let minTotal = 0;
let horaTotal = 0;



boton.addEventListener('click', registroHoras);

function registroHoras(){
    
    minTotal = parseInt(minFin.value) - parseInt(minIn.value);
    horaTotal = parseInt(horaFin.value) - parseInt(horaIn.value);


    if (horaIn.value === '' || horaFin.value === ''  || minIn.value === ''  || minFin.value === ''){
        
        mostrarMensaje('Todos los campos son obligatorios', 'error')

        }else if (horaIn.value > 24 || horaFin.value > 24 || minIn.value > 60 || minFin.value > 60) {
            mostrarMensaje('Los datos no son validos', 'error')
        } else {
            
            if (minTotal < 0){
                minTotal = 60 + minTotal;
                horaTotal = horaTotal - 1;
            }
        
            const registro = document.querySelector('#registro')
            const resultado = document.createElement('p')
            resultado.textContent = `${horaTotal}h y ${minTotal}mins ${tipo.value} de ${tipoJornada.value}`;
            registro.appendChild(resultado)
            limpiarTotal();
            totalHoras(horaTotal, minTotal);

            document.querySelector('#formulario').reset();
            
        }   
        
    }

    function totalHoras(horas, mins){
        const resultadoHoras = document.createElement('div');
        const resultadoJi = document.createElement('p');
        const resultadoDc = document.createElement('p');
        const resultadoTotal = document.createElement('p');
        
        if ( tipo.value === 'a sumar' && tipoJornada.value === 'jornada irregular'){
            jih = jih + horas;
            jim = jim + mins;
            
        } else if (tipo.value === 'a descontar' && tipoJornada.value === 'jornada irregular'){
            jih = jih - horas;
            jim = jim - mins;
        }else if (tipo.value === 'a sumar' && tipoJornada.value === 'descanso compensado'){
            dch = dch + horas;
            dcm = dcm + mins;
        }else if (tipo.value === 'a descontar' && tipoJornada.value === 'descanso compensado'){
            dch = dch - horas;
            dc = dcm - mins;
        }

        resultadoJi.textContent = `Horas de Jornada Irregular: ${jih}h y ${jim}mins`;
        resultadoDc.textContent = `Horas de Descanso Compensado: ${dch}h y ${dcm}mins`;
        resultadoTotal.textContent = `Total: ${jih+dch}h y ${jim+dcm}mins`;
        resultadoHoras.appendChild(resultadoJi);
        resultadoHoras.appendChild(resultadoDc);
        resultadoHoras.appendChild(resultadoTotal);

        total.appendChild(resultadoHoras);

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

    function limpiarTotal(){
        while (total.firstChild){
            total.removeChild(total.firstChild);
        }
    }

    
    

    