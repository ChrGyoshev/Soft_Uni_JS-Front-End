function smallestNumber( first, second, third) {
    if (first < second && first < third) {
        console.log(first);
    } else if (second < first && second < third) {
        console.log(second)
    } else {
        console.log(third);
    }
}

smallestNumber(600,
    342,
    123
    )