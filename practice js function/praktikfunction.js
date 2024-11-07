// 1. Define a function called printHeart that prints out the string "<3"
function printHeart() {
  console.log("<3"); // Cetak ke console log
}
printHeart(); // Execute the function once


// 2. Return Value Practice
// Fungsi untuk menampilkan hasil di halaman HTML
function displayResult(text) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = text;
}

function multiply(a, b) {
  return a * b;
}

//form submit
document.getElementById('multiplyForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form dari submit default
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = multiply(num1, num2);
  displayResult(`Hasil: ${result}`);
});

// 3. Scope Practice

// Scope Practice A
let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
    console.log(animal); // "Pajama Squid"
}
observe();

// Scope Practice B
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal); // "Scorpionfish"
}
handleAnimal();
console.log(deadlyAnimal); // "Blue-Ringed Octopus"

// 4. Arrow Function Exercise

const sayHello = (name) => {
  return `Hello ${name}!`;
};

// Contoh penggunaan
console.log(sayHello("Hagrid")); // "Hello Hagrid!"
console.log(sayHello("Luna")); // "Hello Luna!"
