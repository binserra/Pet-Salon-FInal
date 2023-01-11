let student = {
    name:"Brianna",
    age: 29,
    isActive: true,


    sayHi: function(){
        return "Hello"
    }
}

console.log(student.sayHi());

let products=[]

let product1={
    name : "PC",
    description : "Dell",
    price : 200,

}

let product2={
    name : "Laptop",
    description : "acer",
    price : 350,
}

products = [product1, product2];
products.push(product1,product2)

console.log(products[0].price);