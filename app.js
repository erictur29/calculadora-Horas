const horaIn = document.querySelector('#horaIn');
const minIn = document.querySelector('#minIn');
const horaFin = document.querySelector('#horaFin');
const minFin = document.querySelector('#minFin');

const tipo= document.querySelector('#tipo');
const tipoJornada= document.querySelector('#tipoJornada');
const boton = document.querySelector('#boton');

boton.addEventListener('click', horaTotal);


function horaTotal(){
    console.log('click')
   
    if (horaIn.value === '' || horaFin.value === ''  || minIn.value === ''  || minFin.value === ''){
        const error = document.createElement('p');
        error.textContent = 'Todos los campos son obligatorios';
        error.classList.add('error');
        document.querySelector('.principal').appendChild(error)

        setTimeout(()=>{
            error.remove();
        }, 3000)
        } else {
            let minTotal = parseInt(minFin.value) - parseInt(minIn.value);
            let horaTotal = parseInt(horaFin.value) -parseInt(horaIn.value);
            console.log(`las horas son ${horaTotal} y los minutos ${minTotal}`)
            // if (minTotal >= 60){
            //     horaTotal = horaTotal + 1;
            //     minTotal = minTotal - 60;
               
            // } este codigo valdrá en el futuro con la suma del registro
        }

        
    }
    

    