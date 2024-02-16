function calculateCalories(){
    const tmbMultiplier = {
        weight: 10,
        height: 6.25,
        age: 5
    }
    
    let totalCalories

    //formula for men: activity value x (10 x weight in kg) + (6,25 × height in cm) - (5 × age in years) + 5
    //formula for women: activity value x (10 x weight in kg) + (6,25 × height in cm) - (5 × age in years) + 161
    //totalCalories.value = `${Math.floor(calorieCalculation)} kcal`;

    result.innerHTML = `
        <div class=" card-body d-flex flex-column justify-content-center align-items-center h-100" id="calculation">
            <h5 class="card-title h2">Required calories</h5>
            <div class="mb-3 w-100">
                <input class="form-control text-center" value="${totalCalories} kcal" style="font-size: 2rem" disabled>
            </div>
        </div>
    `
    //Clean the variables
}

function showErrorMessage(msg) {
    const calculation = document.querySelector('#calculation');

    if(calculation) {
        calculation.remove();
    }

    const divError = document.createElement('div');
    divError.className = 'd-flex justify-content-center align-items-center h-100';
    divError.innerHTML = `<span class="alert alert-danger text-center">${msg}</span>`;
    result.appendChild(divError);

    setTimeout(() => {
        divError.remove();
        fadeResult();
    }, 5000);
}

function fadeResult() {
    let distance = 1;

    let id = setInterval(() => {
        distance *= 2;
        result.style.top = `${distance}vh`;
        if (distance > 100) {
            clearInterval(id);
            result.style.display = 'none';
            result.style.top = 0;
        }
    }, 10)
}

// Animations
function showResult() {
    result.style.top = '100vh';
    result.style.display = 'block';
    
    let distance = 100;
    let subtraction = 0.3; //resta (eliminar este comment)
    let id = setInterval(() => {
        subtraction *= 1.1;
        resultado.style.top = `${distance - subtraction}vh`;
        if (subtraction > 100) {
            clearInterval(id);
        }
    }, 10)
}

/*
function calcularCalorias() {

    const multiplicadorTMB = {
        peso: 10,
        altura: 6.25,
        edad: 5
    }

        //Formula hombres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) + 5

        //Formula mujeres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) - 161

    
    // totalCalorias.value = `${Math.floor(calculoCalorias)} kcal`;
    
    resultado.innerHTML = `
        <div class=" card-body d-flex flex-column justify-content-center align-items-center h-100" id="calculo">
            <h5 class="card-title h2">Calorías requeridas</h5>
            <div class="mb-3 w-100">
                <input class="form-control text-center" value="${} kcal" style="font-size: 2rem" disabled>
            </div>
        </div>
    `
     // Volver a limpiar variables

}
*/

/* 
function desvanecerResultado() {
    let distancia = 1;

    let id = setInterval(() => {
        distancia *= 2;
        resultado.style.top = `${distancia}vh`;
        if (distancia > 100) {
            clearInterval(id);
            resultado.style.display = 'none';
            resultado.style.top = 0;
        }
    }, 10)
}
*/

/*
function mostrarMensajeDeError(msg) {
    const calculo = document.querySelector('#calculo');
    if (calculo) {
        calculo.remove();
    }

    const divError = document.createElement('div');
    divError.className = 'd-flex justify-content-center align-items-center h-100';
    divError.innerHTML = `<span class="alert alert-danger text-center">${msg}</span>`;

    resultado.appendChild(divError);

    setTimeout(() => {
        divError.remove();
        desvanecerResultado();
    }, 5000);
}
*/

/*
function aparecerResultado() {
    resultado.style.top = '100vh';
    resultado.style.display = 'block';
    
    let distancia = 100;
    let resta = 0.3;
    let id = setInterval(() => {
        resta *= 1.1;
        resultado.style.top = `${distancia - resta}vh`;
        if (resta > 100) {
            clearInterval(id);
        }
    }, 10)
}
*/