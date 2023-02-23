function solve(firstNum, secondNum) {
    let sum = 0 
    let numbers = ''
    for (let i = firstNum; i <= secondNum; i++){
        sum += i
        numbers += i + " "

    
    }

    console.log(numbers.trim())
    console.log(`Sum: ${sum}`);
      
    
}

solve(5, 10);
