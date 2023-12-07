const Post = require("../models/posts");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      let post = await Post.find(req.params);
      next({ status: 200, send: { msg: "Publicaciones", data: post } });
    } catch (error) {
      next({
        status: 404,
        send: { msg: "Publicaciones no encontradas", data: error },
      });
    }
  },
  getById: async (req, res, next) => {
    try {
      const { _id } = req.params;
      let post = await Post.findById(_id);
      next({ status: 200, send: { msg: "Post encontrado", data: post } });
    } catch (error) {
      next({ status: 404, send: { msg: "Post no encontrado", data: error } });
    }
  },
  post: async (req, res, next) => {
    try {
      let post = await Post.create(req.body);
      next({ status: 201, send: { msg: "Publicacion creada", data: post } });
    } catch (error) {
      next({
        status: 400,
        send: { msg: "Publicacion no creada", data: error },
      });
    }
  },
  put: async (req, res, next) => {
    try {
      const { id } = req.params;
      let post = await Post.findByIdAndUpdate(id, req.body);
      next({
        status: 201,
        send: { msg: "Publicacion actualizada", data: req.body },
      });
    } catch (error) {
      next({
        status: 400,
        send: { msg: "Publicacion no actualizada", data: error },
      });
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      let post = await Post.findByIdAndDelete(id);
      next({ status: 201, send: { msg: "Post eliminado" } });
    } catch (error) {
      next({ status: 400, send: { msg: "Post no eliminado", data: error } });
    }
  },
};
