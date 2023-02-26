function orders (product, quantity) {
const coffee = 1.50
const water = 1.00
const coke = 1.40
const snacks = 2.00

if (product === 'coffee') {
    console.log((quantity * coffee).toFixed(2));
} else if (product === 'water') {
    console.log((quantity * water).toFixed(2));
} else if (product === 'coke') {
    console.log((quantity * coke).toFixed(2));
} else if (product === 'snacks') {
    console.log((quantity * snacks).toFixed(2));
}
}

orders('water' , 5)
