// new Array(1000 * 20).fill(0).map((_, i) => {
//     console.log(i)
// })

// const wait = (time, cb) => {
//     setTimeout(() => {
//         cb()
//     }, time)
// }

// wait(3000, () => {console.log('3s')})

const wait = (time, cb) => {
    return new Promise(resolve, reject) => {
        ssetTimeout(() => {
            cb()
            resolve()
        }, time )
    }
}

wait(3000, () => {
    wait(200, () => {

    })
})