function sum(digit) {
    let sum = 0
    result = [...digit+''].map(n => +n)
    for (const dig of result) {
        sum += dig
        
    }

    console.log(sum);
}

sum(245678);
