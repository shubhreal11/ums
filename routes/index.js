const express = require('express');
const router = express.Router();

const {getAllUsers , usersWithAddress , usersWithHobby , usersWithActivity , getAllDetail,home} = require('../controllers/usercontroller');

router.get('/alluser' , getAllUsers);
router.get('/address',usersWithAddress);
router.get('/hobby' , usersWithHobby);
router.get('/activity' , usersWithActivity);
router.get('/allDetail' , getAllDetail);
router.get('/',home)


module.exports = router;