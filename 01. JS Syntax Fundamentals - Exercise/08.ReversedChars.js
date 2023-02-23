function solve(first, second, third) {
    let result = first + second + third;
    result = result.split('').reverse();
    result = result.join (' ')
    
    console.log(result);
    
}
solve('A', 'B', 'C')