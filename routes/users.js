const router = require('express').Router();
const {
  findUsers, findUserById, createUser, updateUserInfo, updateUserAvatar,
} = require('../controllers/users');

router.get('/users', findUsers);
router.get('/users/:userId', findUserById);
router.post('/users', createUser);
router.patch('/users/me', updateUserInfo);
router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
