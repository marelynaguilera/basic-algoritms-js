
function bubbleSortDesc(numbers){
    for (let i = 0; i < numbers.length-1 ; i++){
        for (let j = 0; j < numbers.length-1 ; j++ ){
            if (numbers[j+1] > numbers[j]){
                [numbers[j+1],numbers[j]] = [numbers[j],numbers[j+1]] 
            }
        }
    }

    return numbers
}

function bubbleSortAsc(numbers){
    for (let i = 0; i < numbers.length-1 ; i++){
        for (let j = 0; j < numbers.length-1 ; j++ ){
            if (numbers[j+1] < numbers[j]){
                [numbers[j],numbers[j+1]] = [numbers[j+1],numbers[j]]
            }
        }
    }

    return numbers
}

let numbers = [16, 8, 24,45,3,67]

console.log(numbers)

console.log(bubbleSortDesc(numbers))

console.log(bubbleSortAsc(numbers))
