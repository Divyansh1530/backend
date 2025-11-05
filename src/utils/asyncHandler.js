// const asyncHandler = () => {}
// const asyncHandler = (fn) => {() => {}}
// const asyncHandler = (fn) => async() => {}



 // next is for middlewares ,middlewares basically checks if user is logged in or not




// const asyncHandler = (fn) => async(req , res , next) => {
//     try {
//         await fn(req , res , next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }   // this is the try catch method

const asyncHandler =(requestHandler) => {
    (req , res , next) => {
        Promise.resolve(requestHandler(req , res , next))
        .catch((err) => next(err))
    }

}

export {asyncHandler}