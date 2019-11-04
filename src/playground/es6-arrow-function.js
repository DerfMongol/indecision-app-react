const square = function (x) {
    return x * x
}
console.log(square(4))

// const squareArrow = (x) => {
//     return x * x
// }

const squareArrow = (x) => x * x
console.log(squareArrow(7))

const getFirstName = (fullName) => fullName.split(' ')[0]
console.log(getFirstName('Lee Martin'))

const add = (a, b) => {
    return a + b
}
console.log(add(4, 5))

const user = {
    name: 'Lee',
    cities: ['Rochester', 'Orlando', 'Austin'],
    printPlacesLived () {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}
console.log(user.printPlacesLived())

const multiplier = {
    numbers: [2,3,5],
    multiplyBy: 6,
    multiply () {
        return this.numbers.map((num) => this.multiplyBy * num)
    }
}
console.log(multiplier.multiply())