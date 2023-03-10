const userControllers =require('./users.controllers')


const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const getUserById = (req,res) => {
    const id = req.params.id
    userControllers.findUserById(id)
        .then((data) => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postUser = (req,res) => {
    const {first_name, last_name, email, password, birthday} = req.body
    userControllers.createUser({first_name, last_name, email, password, birthday})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message, fields: {
                first_name: 'String',
                last_name: 'String',
                email: 'example@example.com',
                password: 'String',
                birthday: 'YYYY/MM/DD'
            }})
        })
}

const patchUser = (req,res) => {
    const id = req.params.id 
    const {first_name, last_name, email, birthday} = req.body
    userControllers.updateUser(id, {first_name, last_name, email, birthday})
        .then((data) =>{
            if(data){
                res.status(200).json({message: `User edited succesfully with id: ${id}`})
            } else {
                res.status(404).json({message: `User with id: ${id}, not found`})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })

}

const deleteUser = (req,res) => {
    const id = req.params.id 
    userControllers.deleteUser(id)
        .then((data) => {
            if(data){
                res.status(204).json({message: `User with id:${id}, delete successful`})
            } else {
                res.status(404).json({message: `User with id:${id}, Not Found`})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

module.exports ={
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}