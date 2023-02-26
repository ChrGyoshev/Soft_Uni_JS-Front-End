function solve(number) {
    let evenSum = 0
    let oddSum = 0
    input = number.toString()

    for ( let x of input) {
        if (Number(x) % 2 ===0) {
            evenSum += Number(x)
        } else {
            oddSum += Number(x)
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(3495892137259234);
