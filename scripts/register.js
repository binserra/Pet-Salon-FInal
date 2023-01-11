let petSalon={
    name: "The Fashion Pet",
    address : {
        street : "Broadway",
        zip: "91910",
        number : "500"
    },
    hours :{
        open :"9am",
        closed : "5pm",
    },
    pets:[]
}
let c=0;

// constructor
function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
    this.id=c++;


}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

function validatePet(thePet){
    let validation=true;

    inputName.classList.remove("alert-error");
    inputAge.classList.remove("alert-error");
    inputGender.classList.remove("alert-error");
    inputBreed.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    inputOwner.classList.remove("alert-error");
    inputPhone.classList.remove("alert-error");

    if(thePet.name==""){
        validation=false;
        inputName.classList.add("alert-error");
    }   
    if(thePet.age==""){
        validation=false;
        inputAge.classList.add("alert-error");
    }  
    if(thePet.gender==""){
        validation=false;
        inputGender.classList.add("alert-error");
    }  
    if(thePet.breed==""){
         validation=false;
        inputBreed.classList.add("alert-error");
    }  
    if(thePet.service==""){
        validation=false;
        inputService.classList.add("alert-error");
    }   
    if(thePet.owner==""){
        validation=false;
        inputOwner.classList.add("alert-error");
    } 
    if(thePet.phone==""){
        validation=false;
        inputPhone.classList.add("alert-error");
    } 
    return validation;
}

function register(){
    // get the values from HTML

    // create a new object
let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);

if(validatePet(newPet)==true){
    petSalon.pets.push(newPet);
    displayInfo();
    displayPetCards();
    console.log(petSalon.pets);
        // display the obj on the console
    clearForm();
}else{
    alert ("Please complete highlighted areas.")
}
// petSalon.pets.push(newPet);

// alert("You Have " + petSalon.pets.length + " pets in the salon.");
// displayInfo();
// displayPetCards();
// // console.log(petSalon.pets);
//     // display the obj on the console
// clearForm();
}

function clearForm(){
    inputName.value ="";
    inputAge.value ="";
    inputBreed.value ="";
    inputGender.value ="";
    inputService.value ="";
    inputOwner.value ="";
    inputPhone.value ="";
}

function deletePet(id){
    console.log("deleting pet" + id);

    let deleteIndex;

    // travel the array using a for loop
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(id==pet.id){// find the pet
            deleteIndex=i;
        }
    }
    document.getElementById(id).remove();
    
    // delete the pet from the html
    // delete pet from array
    petSalon.pets.splice(deleteIndex,1);
    // update info
    displayInfo();
}

function displayInfo(){
    document.getElementById("info").innerHTML="You have " + petSalon.pets.length + " pets in the salon.";
}
function init(){
    let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","555-555-5555");
let scrappy = new Pet("Scrappy",5,"Female","Pitbull","Nail Trim","Bri","111-222-3333");
let happy = new Pet("Happy",5,"Female","Pitbull","Nail Trim","Bri","111-222-3333");
petSalon.pets.push(scooby,scrappy,happy);  
// adding the pet array
displayInfo();
displayPetCards();
}
window.onload = init;


