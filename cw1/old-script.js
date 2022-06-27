// // console.log(h1)
// zmienne
const x = 3;
let y = 2;

// const name = "John"

console.log(x + " - "+ y)
console.log(x, y)
// console.log(name + "Doe")

const person = {
    name: "John",
    age: 30
}
console.log(person.name)

// tablice - array

const people = ["John", "Doe", "Jane"];
console.log(people)
console.log(people[2])

// funkcje - function
function sayHello()
{
    console.log("Hello")
}

sayHello()
// funkcja pobiera imię
// name - argument
function say(name)
{
console.log("HELLO " + name)
}

say("John")


function add(x, y)
{
    return x+y
}
console.log ( add(3,2))

const dom = document.querySelector('h1')
dom.innerHTML = "Hello from JS"
console.log(dom)
