const {readFile, writeFile} = require('fs')

console.log('started the task')
readFile('./content/first.txt', 'utf8', (err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) =>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('finished the task')
            }
            )
    })
})

console.log('starting another task')