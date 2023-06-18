import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const jwtsign = process.env.JWT_SIGN

const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(token){
            let decodedToken = jwt.verify(token, jwtsign)
            req.userId = decodedToken?.id
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

export default authentication