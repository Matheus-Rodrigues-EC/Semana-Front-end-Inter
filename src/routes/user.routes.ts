import { response, Router } from 'express';
import { UserController } from '../resources/user/user.controller';
import { request } from 'http';

const userRouter = Router();
const userController = new UserController();

//GET
//POST
userRouter.post('/signin', userController.signin);

userRouter.post('/signup', userController.signup);

//PUT
//PATCH
//DELETE


export default userRouter;