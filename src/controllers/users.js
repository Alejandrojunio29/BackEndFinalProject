module.exports = {
    getAll: async (req, res, next)=>{
        next({status: 200, send: {msg:"Usuarios", data: []}})
    },
    getById: async (req, res, next)=>{
        next({status: 200, send: {msg:"Usuario encontra", data: {}}})
    },
    post: async (req, res, next)=>{
        next({status: 200, send: {msg:"Usuario creado", data: {}}})
    },
    put: async (req, res, next)=>{
        next({status: 200, send: {msg:"Usuario actualizado", data: {}}})
    },
    delete: async (req, res, next)=>{
        next({status: 200, send: {msg:"Usuario eliminado", data: {}}})
    },

}