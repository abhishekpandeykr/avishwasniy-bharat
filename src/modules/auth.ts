import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 5)
}

export const createJWT = (user) => {
    const token = jwt.sign({
        id:user.id,
        username: user.username
    }, process.env.JWT_SECRET)
    return token
}

export const protect = async (req, res, next) => {
    const bearer = req.headers.authorization;
    console.log(req.headers)

    if(!bearer) {
        res.status(401);
        res.send({message:"Not Authorized"})
        return;
    }

    const [, token] = bearer.split(' ');
    if(!token) {
        res.status(401)
        res.send({message:"Not Valid Token"});
        return
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        console.log("payload", payload)
        req.user = payload
        console.log(payload)
        next()
    } catch (error) {
        console.error(error)
        res.status(401)
        res.send({message:"Not Authorized!!"});
        return
    }
}
