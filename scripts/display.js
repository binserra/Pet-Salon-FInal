function displayPetCards(){
    // select the petSection by id
    let petSection = document.getElementById("pets");
    let card="";
    // travel the array
    for(let i=0; i< petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        // create the template string
        card += `
        <div id="${pet.id}" class="petCard">
            <h4>Name: ${pet.name}</h4>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Owner: ${pet.owner}</p>
            <p>Phone: ${pet.phone}</p>
            <button onclick="deletePet(${pet.id});">Delete</button>
        </div>
        `;
        console.log(card);
    }

    petSection.innerHTML=card;
}

function displayTable(){
    // select the petSection by id
    let petSection = document.getElementById("pets");
    let tr="";
    // travel the array
    for(let i=0; i< petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        // create the template string
        tr += `
        <tr id="${pet.id}" class="petCard">
            <td>Name: ${pet.name}</td>
            <td>Age: ${pet.age}</td>
            <td>Gender: ${pet.gender}</td>
            <td>Breed: ${pet.breed}</td>
            <td>Service: ${pet.service}</td>
            <td>Owner: ${pet.owner}</td>
            <td>Phone: ${pet.phone}</td>
            <button onclick="deletePet(${pet.id});">Delete</button>
        </tr>
        `;
        console.log(tr);
    }
    petSection.innerHTML=tr;
}

function displayInfo(){
    document.getElementById("info").innerHTML="You have " + petSalon.pets.length + " pets in the salon.";
}