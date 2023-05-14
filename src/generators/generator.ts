// const api = {
//     getUsers() {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 res('data from server')
//             }, 2000)
//         })
//
//     }
// }
//
// function* giveMoney() {
//     const users = yield call(api.getUsers)
//     yield put({type: '', users})
//     yield 500
//     yield 400
//     return 300
// }
//
// let generator = giveMoney()
// console.log(generator.next().value)
// const result = generator.next()
// if (result.value.constructor.name === 'Promise') {
//     result.value.then((data: string) => {
//         generator.next(data)
//     })
// }