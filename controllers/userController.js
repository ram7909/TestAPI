const userModel = require('../models/userModel');

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

// Get user by ID
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.getUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

// Create a new user
const createUser = async (req, res) => {
    const { username, email } = req.body; // <- username instead of name
    try {
      const newUser = await userModel.createUser(username, email);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Create User Error:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  };  

// Update an existing user by ID
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    try {
      const affectedRows = await userModel.updateUser(id, username, email);
      if (affectedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      console.error('Update User Error:', error); // 👈 add console log
      res.status(500).json({ error: 'Failed to update user' });
    }
};
  

// Delete a user by ID
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const affectedRows = await userModel.deleteUser(id);
      if (affectedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Delete User Error:', error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
};
  
module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
