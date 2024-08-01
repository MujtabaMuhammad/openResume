
const form = document.getElementById('uploadedForm');

form.addEventListener('submit', handleSubmit);



function handleSubmit(event){
event.preventDefault();
const fileInput = document.getElementById('myFile');
const file = fileInput.files;

console.log("Name of the file is: " + file[0].name );
}