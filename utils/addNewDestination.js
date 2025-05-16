export const addnewDestination = (req,res) => {
    let newDestination
    let body = ''
    req.on('data', (chunk) => {
        body += chunk.toString()
        
    })

    req.on('end', () => {
        newDestination = JSON.parse(body)
    })

    return newDestination

}