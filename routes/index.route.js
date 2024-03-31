const express = require('express')
const { homePage, uploadFile } = require('../controllers/upload.controller')
const upload = require('../middlewares/upload.middleware')

const router = express.Router()

router.get('/', homePage)
router.post('/upload', upload.single('profile'), uploadFile)

module.exports = router
