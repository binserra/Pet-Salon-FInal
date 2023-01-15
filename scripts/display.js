function displayPetCards(){
    // select the petSection by id
    let petSection = document.getElementById("pets");
    let card="";
    // travel the array
    for(let i=0; i< petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        // create the template string
        // card += `
        // // <div id="${pet.id}" class="petCard">
        // //     <h4>Name: ${pet.name}</h4>
        // //     <p>Age: ${pet.age}</p>
        // //     <p>Gender: ${pet.gender}</p>
        // //     <p>Breed: ${pet.breed}</p>
        // //     <p>Service: ${pet.service}</p>
        // //     <p>Owner: ${pet.owner}</p>
        // //     <p>Phone: ${pet.phone}</p>
        // //     <button onclick="deletePet(${pet.id});">Delete</button>
        // // </div>
        // `;
        // console.log(card);
    }

    // petSection.innerHTML=card;
}

function displayTable(){
    // select the petSection by id
    
    let tr="";
    // travel the array
    for(let i=0; i< petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        // create the template string
        tr += `
        <tr id="${pet.id}" class="petCard">
            <td> ${pet.name}</td>
            <td> ${pet.age}</td>
            <td> ${pet.gender}</td>
            <td> ${pet.breed}</td>
            <td> ${pet.service}</td>
            <td> ${pet.owner}</td>
            <td> ${pet.phone}</td>
            <td><button class="btn btn-outline-danger"onclick="deletePet(${pet.id});">Delete</button></td>
        </tr>
        `;
        console.log(tr);
    }
    document.getElementById("table").innerHTML=tr;
}

function displayInfo(){
    document.getElementById("info").innerHTML="You have " + petSalon.pets.length + " pets in the salon.";
}