export const addnewDestination = async(req,res) => {
  
    const body = await new Promise((resolve,reject) => {

        let data = ''

        req.on('data', (chunk) => {
            data += chunk.toString()
           
        })
    
        req.on('end', () => {
           resolve(data)
         
        })

        req.on('error',(err) => {
            reject(err)
        })


    })


    const newDestination = JSON.parse(body)
    console.log(newDestination)
    
    return newDestination


    


}