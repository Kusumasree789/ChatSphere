import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    try {
        const token = jwt.sign({userId}, process.env.JWT_SECRET, {
            expiresIn: '15d',
        });

        res.cookie("jwt",token,{
            maxAge: 15*24*60*60*1000, // MS
            httpOnly: true, // prevent XSS attacks cross-site scripting attacks
            sameSite:"strict",
            secure: process.env.NODE_ENV !== "development"
        });
    } catch (error) {
        console.log("Error in generateTokenAndSetCookie:", error.message);
        throw error;
    }
};

export default generateTokenAndSetCookie;