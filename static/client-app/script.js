const form = document.querySelector('form');
const formInputs = document.querySelectorAll('.form-input');
const inputName = document.querySelector('#name');
const inputDob = document.querySelector('#dob');
const inputPhone = document.querySelector('#phone');
const privacyCheckbox = document.querySelector('.form-checkbox');
const submitBtn = document.querySelector('.form-btn');
let startInteraction="";
let duration=0;
let counter=null;

function checkInputs() {
    let filledUp = true;
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    startInteraction=`${hour}:${minutes}`

    counter = setInterval(() => {
        duration= duration+1
    }, 1000);

    formInputs.forEach(input => {
        if (input.value === '') {
            filledUp = false;
        }
    });

    if (filledUp && privacyCheckbox.checked) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function resetInputs() {
    formInputs.forEach(input => {
        input.value = '';
    });
    privacyCheckbox.checked = false;
    submitBtn.disabled = true;
}

formInputs.forEach(input => {
    input.addEventListener('input', checkInputs());
});

privacyCheckbox.addEventListener('change', checkInputs);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearInterval(counter);
    newUser = { name: inputName.value, email: `${inputName.value}@gmail.com`, birth:inputDob.value, phone:inputPhone.value, date:Date(), ubication:"Icesi", interactionStart:`${startInteraction}`, interactionDuration:`${duration}`};

    console.log(`submited:`);
    console.log(newUser);
    sendUserData(newUser)
    resetInputs();
});

async function sendUserData(userData) {
    console.log(':D POST');
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }
    return await fetch(`/user`, request);
}