//Centralized error handling
const errorHandling=(err,req,res,res,next)=>{
    console.log(err.stack)
    res.status(500).json({
        status:500,
        
    })
}