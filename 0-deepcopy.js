const o = {
    1: 'test',
    firstName: 'Mickey',
    lastName: 3,
    address: {
        street: '123st',
        number: {
            first: 33,
            second: 66,
        }
    },
    love: null,
}

function deepCopy(obj) {
    const newObj = {}
    Object.keys(obj).forEach(key => {
        if (obj[key] !== null && typeof obj[key] === 'object') {
            newObj[key] =  deepCopy(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    })

    return newObj
}

const o2 = deepCopy(o)
o2.address.street = 'hanoi'
o2.address.number.first = '44'
o.love = 'ok'
console.log(o2)
console.log(o)