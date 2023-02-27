function solve (data) {
    let person = JSON.parse(data);
    
    for (const [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`)
        
    }

}

solve('{"name": "George", "age": 40, "town": "Sofia"}')