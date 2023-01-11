let dog ={
    animalType : "Dog",

    haircuts: {
        price: "Price: 20.00",
        estTime: "Estimated Time: 1 Hour"

    },
    wash: {
        price: "Price: 10.00",
        estTime: "Estimated Time: 30 Mins"
    },
    nails: {
        price: "Price: 5.00",
        estTime: "Estimated Time: 15 Mins"
    },

}

let cat= {
    animalType : "Cat",
    wash: {
        price: "Price: 10.00",
        estTime: "Estimated Time: 30 Mins"
    },
    nails: {
        price: "Price: 5.00",
        estTime: "Estimated Time: 15 Mins"
    },
}

function displayServices(){
    let tmp=`
    <p>${animalType1}</p>
    <p>${haircuts}
    `
}
displayServices();