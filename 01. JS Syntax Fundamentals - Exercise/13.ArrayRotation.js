function rotation(arr, count) {
    array = arr


   for (let i = 0; i < count; i++) {
        first_el = array.shift()
        array.push(first_el)
    
   }
   console.log(array.join(" "));
}


rotation([32, 21, 61, 1], 4, 2)