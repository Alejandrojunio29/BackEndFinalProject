const express = require("express");
const router = express.Router(); //es lo que nos permite crear rutas fuera de nuestro app.js que podemos generar como modulos
const userController = require("../controllers/users");

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", userController.post);
router.put("/:id", userController.put);
router.delete("/:id", userController.delete);

/*router.post('/login', userController.login )  */
/*router.post('/login', userController.logout )  */

module.exports = router;
