
// function catchAsync(fn){
//     return function catcher(req,res,next){
//         fn(req,res,next).catch(function(e){next(e)});
//     }
// }
// module.exports = catchAsync(fn);

// shorthand

// function catchAsync(fn){
//     return function(req,res,next){
//         fn(req,res,next).catch(e=>next(e));
//     }
// }

// module.exports = catchAsync(fn);


module.exports = func =>{
    return (req,res,next)=>{
        func(req,res,next).catch(e=>next(e));
    }
}