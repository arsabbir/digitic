// import section 
import asyncHandler from "express-async-handler"

/**
 * @DESC Register User
 * @ROUTE /api/v1/auth/register
 * @method POST
 * @access public
 */

export const register = asyncHandler(async (req,res)=>{
    return res.status(200).json({ message: "Everything is right" });
})