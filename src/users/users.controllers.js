
const Users = require('../models/users.models')
const {hashPassword} =require('../utils/crypto')
const uuid = require('uuid')
const findAllUsers = async() => {
    const data = await Users.findAll({
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt']
        },
       
    })
    return data

}

const findUserById = async(id) => {
    const data = await Users.findOne({
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt']
        },
        where: {
            id: id
        }
    })
    return data
    
}

const createUser = async(obj) => {
    const data = await Users.create({
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: hashPassword(obj.password),
        birthday: obj.birthday,
    })
    return data
}

const updateUser = async(id,obj) => {
    const data = await Users.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]
}

const deleteUser = async(id) => {
    const data = await Users.update({
        where: {
            id: id
        }
    })
    return data[0]
}

module.exports ={
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}
