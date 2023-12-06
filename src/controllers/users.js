const User = require('../models/users')

module.exports = {
    getAll: async (req, res, next)=>{
        try{
            let user = await User.find(req.params)
            next({status: 200, send: {msg:"Usuarios", data: user}})
        }catch (error){
            next({status: 404, send: {msg:"Usuarios no encontrados", data:error }})
        }
    },
    getById: async (req, res, next)=>{
        try{
            const {id}= req.params
            let user = await User.findById(id)
            next({status: 200, send: {msg:"Usuario encontrado", data: user}})
        }catch (error){
            next({status: 404, send: {msg:"Usuario no encontrado", data:error }})
        }
    },
    post: async (req, res, next)=>{
        try{
            let user = await User.create(req.body)
            next({status: 201, send: {msg:"Usuario creado", data: user}})
        }catch (error){
            next({status: 400, send: {msg:"Usuario no creado", data:error }})
        }
    },
    put: async (req, res, next)=>{
        try{
            const {id}= req.params
            let user = await User.findByIdAndUpdate(id, req.body)
            next({status: 201, send: {msg:"Usuario actualizado", data: req.body}})
        }catch (error){
            next({status: 400, send: {msg:"Usuario no actualizado", data:error }})
        }
    },
    delete: async (req, res, next)=>{
        try{
            const {id}= req.params
            let user = await User.findByIdAndDelete(id)
            next({status: 201, send: {msg:"Usuario eliminado"}})
        }catch (error){
            next({status: 400, send: {msg:"Usuario no eliminado", data:error }})
        }
    },

}