const form = document.getElementById("calculator-form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => { //avoids the website to render itself when calculating the tmb
    event.preventDefault();
    calculateCalories();
});

function calculateCalories(){
    // Inputs
    const name           = document.querySelector("#name");
    let documentType     = document.querySelector("#document-type");
    const documentNumber = document.querySelector("#numberid");
    const age            = document.querySelector("#age");
    const weight         = document.querySelector("#weight");
    const height         = document.querySelector("#height");
    const activity       = document.querySelector("#activity");
    const gender         = document.querySelector('input[name="gender"]:checked');

    if (!filled([name, documentType, documentNumber, age, weight, height, activity, gender])) {
        if(!calculation){
            showAlert('Please make sure you fill out all fields', 'warning');
        }
        showErrorMessage("Please make sure you fill out all fields");
        return null;
    }

    //validateFields(name, documentNumber);

    const bmr = {
        age:    5,
        weight: 10,
        height: 6.25,
        gender: gender.value === "M" ? 5 : -161,
    };

    let ageMessage = verifyAge(age);

    // Result
    // const calories = activity.value * ((bmr.weight * weight.value) + (bmr.height * height.value) - (bmr.age * age.value) + bmr.gender); delete this line once teh calculatorForm function is done
    const calories = calculatorForm(age, weight, height, activity, gender);

    showResult(name, documentType, documentNumber, calories, ageMessage);

    //delete all this if you want the page not to clear all the fields
    name.value = null;
    documentType = null;
    documentNumber.value = null;
    age.value = null;
    weight.value = null;
    height.value = null;
    activity.value = null;
    gender.value = null;
}

function showResult(name, documentType, documentNumber, calories, msg) {
    result.style.top = "100vh";
    result.style.display = "block";
    let distance = 100;
    let subs = 0.3;
    let id = setInterval(() => {
        subs *= 1.1;
        result.style.top = `${distance - subs}vh`;
        if (subs > 100) {
            clearInterval(id);
        }
    }, 10);

    result.innerHTML = `
        <div class="card-body d-flex flex-column justify-content-center align-items-center h-100" id="calculation">
            <h5 class="card-title h2 mb-3">RESULTS</h5>
            <div class="mb-3 w-100">
                <p>The patient ${name.value} identified with ${documentType.value} NO. ${documentNumber.value} ${msg} and requires a total of ${Math.round(calories)} kcal to mantain its TBM.</p>
                <br> <br>
            </div>
        </div>
    `;
}

function filled(fields) { //checks if all the fields are filled
    for (let field of fields) {
        if (field.value == null || field.value == undefined || field.value == "") {
            return false;
        }
    }
    return true;
}

function verifyAge(age) {
    if (age.value >= 15 && age.value <= 29) {
        return "belongs to the youth population group";
    } else if (age.value >= 30 && age.value <= 59) {
        return "belongs to the adult population group";
    } else {
        return "belongs to the older adults population group";
    }
}

function showErrorMessage(msg) {
    const calculation = document.querySelector('#calculation');
    if(calculation) { //verifies if it exists and clears its value
        calculation.remove();
    }
    //shows the error message
    const divError = document.createElement('div');
    divError.className = 'd-flex justify-content-center align-items-center h-100';
    divError.innerHTML = `<span class="alert alert-danger text-center">${msg}</span>`;
    result.appendChild(divError);
    //deletes the error message
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
            result.style.display = "none";
            result.style.top = 0;
        }
    }, 10);
}