export const add = (first, second) => first + second

export const subtract = (first, second) => first - second

export const multiply = (first, second)=> first * second

export const divide = (numerator, denominator) => {
    if(denominator === 0){
        throw new Error("Cannot Divide By Zero")
    }

    return numerator / denominator
}