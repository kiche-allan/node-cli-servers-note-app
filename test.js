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

import {readFile} from 'node:fs/promises'

const readPjson = async () => {
    const pjsonPath = new URL('./package.json', import.meta.url).pathname
    console.log(JSON.parse(await readFile(pjsonPath, 'utf-8')))
}
const writeFile = async () => {
    const newFile = new URL('./demo.js', import.meta.url).pathname
    await fs.writeFile(newFile, `console.log('hey!)`)
}

readPjson()
// writeFile()