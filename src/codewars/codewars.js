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