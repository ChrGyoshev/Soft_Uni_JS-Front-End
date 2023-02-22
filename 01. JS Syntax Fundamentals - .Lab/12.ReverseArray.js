function reverse (number,arr) {
let new_arr = arr.slice(0,number).reverse();
new_arr =new_arr.join(' ')
console.log(new_arr);

}

reverse(3, [10, 20, 30, 40, 50])
reverse(4, [-1, 20, 99, 5])