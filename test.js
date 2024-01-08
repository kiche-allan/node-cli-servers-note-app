// new Array(1000 * 20).fill(0).map((_, i) => {
//     console.log(i)
// })

// const wait = (time, cb) => {
//     setTimeout(() => {
//         cb()
//     }, time)
// }

// wait(3000, () => {console.log('3s')})

// const wait = (time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, time )
//     }
// )}

// wait(3000)
// .then(() => {
//     return wait(2000)
// })

import fs from 'node:fs'

const readPjson = () => {
    const pjsonPath = new Url('./package.json', import.meta.url).pathname
    return JSON.parse(fs.readFileSync('./package.json'))
}