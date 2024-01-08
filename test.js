// new Array(1000 * 20).fill(0).map((_, i) => {
//     console.log(i)
// })

fs.readFile('file txt', (err, data) => {
    if (err){
        console.error(err)
        return
    }
    console.log(data)
})