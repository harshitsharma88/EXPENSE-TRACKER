const express=require('express');
const router = express.Router();
const passwordController=require('../controller/forgotPassword');

router.post('/forgotpassword',passwordController.forgotPassword);

router.post('/updatepassword',passwordController.updatePassword);

router.get('/setnewpassword/:id',passwordController.setNewPassword)

module.exports=router;