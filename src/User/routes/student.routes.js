const { getAllStudents, addStudent, signIn, removeall } = require("../controller/student.controller");

const routes = require("express").Router();
const validate = require('../../../common/valid');
const { addUserSchema, signInSchema } = require("../joi/user.validation");

routes.get("/student", getAllStudents)

routes.post("/student",validate(addUserSchema), addStudent)
routes.post("/signIn", validate(signInSchema),signIn)
routes.delete('/student',removeall)


module.exports = routes