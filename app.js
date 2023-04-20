const horaIn = document.querySelector('#horaIn');
const minIn = document.querySelector('#minIn');
const horaFin = document.querySelector('#horaFin');
const minFin = document.querySelector('#minFin');
const fecha = document.querySelector('#fecha');

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

//funcion para contabilizar las horas y meterlas en el registro
function registroHoras(){
    
    minTotal = parseInt(minFin.value) - parseInt(minIn.value);
    horaTotal = parseInt(horaFin.value) - parseInt(horaIn.value);

    console.log(fecha.value)

    if (horaIn.value === '' || horaFin.value === ''  || minIn.value === ''  || minFin.value === '' || fecha.value === ''){
        
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
            resultado.textContent = `${fecha.value} => ${horaTotal}h y ${minTotal}mins ${tipo.value} de ${tipoJornada.value}`;
            resultado.classList.add('fuente');
            registro.appendChild(resultado)

            //actualizamos los registros de la horas totales y tomamos los valores a tener en cuenta
            limpiarTotal();
            totalHoras(horaTotal, minTotal);

            //reseteamos los inputs
            document.querySelector('#formulario').reset();
            
        }   
        
    }
    //cogemos la contabilizacion de las horas y las metemos en el registro total
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

        if (jim < 0){
            jim = jim + 60;
            jih = jih - 1;
        }
        if (dcm < 0){
            dcm = dcm + 60;
            dch = dch - 1;
        }

        resultadoJi.textContent = `Horas de Jornada Irregular: ${jih}h y ${jim}mins`;
        resultadoJi.classList.add('fuente');
        resultadoDc.textContent = `Horas de Descanso Compensado: ${dch}h y ${dcm}mins`;
        resultadoDc.classList.add('fuente');
        resultadoTotal.textContent = `Total: ${jih+dch}h y ${jim+dcm}mins`;
        resultadoHoras.classList.add('fuente')
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

    
    

    