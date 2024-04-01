import { Router } from 'express'
import {getUser, getCoupon, getUserType} from '../controllers/index.js'
const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
})

router.get('/getUser', getUser)
router.get('/getCoupon', getCoupon)
router.get('/getUserType', getUserType)
export {
  router
}
