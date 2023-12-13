import express from 'express'
import {
  userRegister,
  userAll,
  userDelete,
  getUserById,
  userUpdateById,
} from '../controllers/userController.js'

const router = express.Router()

router.post('/register', userRegister)
router.get('/', userAll)
router.delete('/delete/:id', userDelete)
router.get('/:id', getUserById)
router.put('/:id', userUpdateById)

export default router
