import jwt from 'jsonwebtoken'

const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(token){
            let decodedToken = jwt.verify(token, "1234")
            req.userId = decodedToken?.id
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

export default authentication