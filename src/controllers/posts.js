const Post = require('../models/posts')

module.exports = {
    getAll: async (req, res, next)=>{
        next({status: 200, send: {msg:"Publicacio", data: []}})
    },
    getById: async (req, res, next)=>{
        next({status: 200, send: {msg:"Publicacion encontrada", data: {}}})
    },
    post: async (req, res, next)=>{
        try{
            let post = await Post.create(req.body)
            next({status: 201, send: {msg:"Publicacion creada", data: post}})
        }catch (error){
            next({status: 400, send: {msg:"Publicacion no creada", data:error }})
        }
    },
    put: async (req, res, next)=>{
        next({status: 200, send: {msg:"Publicacion actualizada", data: {}}})
    },
    delete: async (req, res, next)=>{
        next({status: 200, send: {msg:"Publicacion eliminada", data: {}}})
    },

}