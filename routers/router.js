const express = require('express');
const HomeController = require('../controllers/home.controller');
const router = express.Router();
const homeController = new HomeController();

router.get('/', homeController.index);

module.exports = router
