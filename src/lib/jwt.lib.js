const JWT = require('jsonwebtoken');
const jwt= {};

/**
 * Create JWT token
 * @param {String} iud 
 * @returns 
 */
jwt.singJWT=(iud)=>{
    return new Promise((resolve, reject) => {

        const payload={uid};
        
        JWT.sign(payload, process.env.JWT_KEY, {
            algorithm: ["RS512"],
            expiresIn: "1d"
        }, ((err, token) => {
            if(err){
                console.log("Se ha generado un error al intentar generar token:\n", err);
                reject("Se ha generado un error al intentar generar token:\n"+ err);
            }else {
                resolve(token);
            }
        }));
    });
};

/**
 * Validate JSON
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns JSON with Response HTTP[S]
 */
jwt.verifyJWT= (req,res,next)=>{
    let token=req.headers["Auth"];
    if(!token) {
        res.status(401).json({
            error:"Token no valido, expirado, o incorrecto"
        });
    };

    console.log("Token decodificado", JWT.decode(token));
    
    JWT.verify(token,process.env.JWT_KEY,(err, userId) => {
        if(err){
            res.status(401).json({
                error:"Token no valido, expirado, o incorrecto"
            });
        } else {
            next();
        }
    });
};

module.exports=jwt;