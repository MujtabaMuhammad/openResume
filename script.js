
const form = document.getElementById('uploadedForm');

form.addEventListener('submit', handleSubmit);



function handleSubmit(event){
    
event.preventDefault();
const fileInput = document.getElementById('myFile');
const file = fileInput.files;

if (file[0].type !== "application/pdf")
    {
    console.log('Not a pdf file');
    return;
    } 
    localStorage.setItem("docName", file[0].name);
    //window.location.href = "./pageTwo.html";
    //console.log("Name of the file is: " + file[0].name );
}
 
    


   
