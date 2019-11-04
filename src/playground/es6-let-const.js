var nameVar = 'Andrew'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Hal'
    return petName
}

const petName = getPetName()
console.log(petName)

//Block Scoping

var fullName = 'Lee Martin'
let firstName

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)