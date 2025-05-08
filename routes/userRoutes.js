const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/all', userController.getUsers);

// Get a user by ID
router.get('/:id', userController.getUser);

// Create a new user
router.post('/create', userController.createUser);

// Update an existing user by ID
router.put('/update/:id', userController.updateUser);

// Delete a user by ID
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
