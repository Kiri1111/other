function litres(time) {
    const res = time * 0.5
    return Math.floor(res)
}

function updateLight(current) {
    switch (current) {
        case 'red':
            return "green"
        case 'yellow':
            return "red"
        case 'green':
            return "yellow"
    }

}


function hero(bullets, dragons) {
    return bullets / dragons >= 2
}

function quadrant(x, y) {
    if (x > 0 && y > 0) {
        return 1
    } else if (x < 0 && y > 0) {
        return 2
    } else if (x < 0 && y < 0) {
        return 3
    } else {
        return 4
    }
}

function array(string) {
    const array = string.split(',')
    if (array.length <= 2) {
        return null
    } else {
        return array.slice(1, array.length - 1).join(' ')
    }
}

function removeEveryOther(arr) {
    return arr.filter((el, index) => index % 2 === 0)
}

function mostLikely(prob1, prob2) {
    const arr1 = prob1.split(':')
    const arr2 = prob2.split(':')
    return arr1[0] / arr1[1] < arr2[0] / arr2[1]
}

function alternate(n, firstValue, secondValue) {
    let resArr = []
    for (let i = 0; i < n; i++) {
        resArr.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return resArr
}

Array.prototype.remove_ = function (integer_list, values_list) {
    for (let i = 0; i < values_list.length; i++) {
        return values_list[i]
    }
}

Array.prototype.remove_ = function (integer_list, values_list) {

    return integer_list.filter(el => el !== values_list.map(el => el))
}

// function alternate(n, firstValue, secondValue) {
//     let resArr = []
//     let i = 0
//     while (i < n) {
//         resArr.push(i % 2 === 0 ? firstValue : secondValue)
//     }
//     return resArr
// }

// console.log(alternate(5, true, false))

function duplicates(arr) {
    return arr.filter((el, index, array) => array.indexOf(el) !== index)
}

const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let minValue = numbers[0]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
        minValue = numbers[i]
    }
}
console.log(minValue)

const factorial = (n) => {
    if (n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

// function foo() {
//     console.log(this.name);
// }
//
// let a = { name: 'Dima' };
// let b = { name: 'Viktor' };
//
// const bindedFooA = foo.bind(a);
// const bindedFooB = foo.bind(b);
//
// bindedFooA(); // 'Dima'
// bindedFooB(); // 'Viktor'
//
//
//     function foo2(age, city) {
//         console.log(`${this.name}, ${age}, ${city}`);
//     }
//
// let a = { name: 'Dima' };
// let b = { name: 'Viktor' };
//
// const bindedFooA = foo2.bind(a, 30);
// const bindedFooB = foo2.bind(b, 18);
//
// bindedFooA('Tbilisi'); // Dima, 30, Tbilisi
// bindedFooB('Minsk'); // 'Viktor, 18, Minsk


function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}

function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}

function _numberToPower(number, power) {
    let total = 1;
    for (let i = 1; i <= power; i++) {
        total = total * number;
    }
    return total;
}


function numberToPower(number, power) {
    let total = 1;
    let i = 1;
    while (i <= power) {
        total = total * number;
        i++
    }
    return total;
}

