
const form = document.getElementById('uploadedForm');

form.addEventListener('submit', handleSubmit);

// FUNCTIONS

function handleSubmit(event){
event.preventDefault();
const fileInput = document.getElementById('myFile');
const file = fileInput.files[0];
console.log(file);
}