import { body,validationResult } from "express-validator"; 
 
 const validate=(req,res,next)=>{
    const errors=validationResult(req)

    if(errors.isEmpty())
    {
        return next()
    }
    return res.status(400).json({
        errors:errors.array
    })
   }   
   
   
export const registervalidation=[
    body("username").isString().withMessage("Username should be a String"),
    body("email").isEmail().withMessage("email should be a valid email address"),
    validate
   ]