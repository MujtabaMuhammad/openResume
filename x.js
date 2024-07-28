// SELECTORS
const form = document.getElementById('myFile');
const formOne = document.getElementByClass('btn btn-primary');
form.addEventListener('submit', handleSubmit);

// FUNCTIONS

function handleSubmit(event){
event.preventDefault();
}

console.log(form)
console.log(formOne)