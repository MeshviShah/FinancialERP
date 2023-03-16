
// var jwt = require("jsonwebtoken")
// require('dotenv').config();
// const secretKey = process.env.JWT_KEY;
// // Middleware to verify JWT token
// exports.verifyToken = async (req, res, next) => {

//     const authHeader = req.headers['authorization'];


//     if (typeof authHeader !== 'undefined') {
//         // Split auth header to get token
//         const token = authHeader.split('  ')[1];

//         // Verify token
//         jwt.verify(token, secretKey, (err, decoded) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }
//             // Set user ID in request object
//             req.userId = decoded.userId;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// }
