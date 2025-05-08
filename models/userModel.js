const db = require('../config/db');

// Get all users
const getAllUsers = async () => {
  const [rows] = await db.execute('SELECT * FROM users');
  return rows;
};

// Get user by ID
const getUserById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

// Create a new user
const createUser = async (username, email) => {
    const [result] = await db.execute(
      'INSERT INTO users (username, email) VALUES (?, ?)', // notice username here
      [username, email]
    );
    return { id: result.insertId, username, email };
  };  

// Update an existing user by ID
const updateUser = async (id, username, email) => {
    const [result] = await db.execute(
      'UPDATE users SET username = ?, email = ? WHERE id = ?',
      [username, email, id]
    );
    return result.affectedRows; // 1 if updated, 0 if not found
};  

// Delete a user by ID
const deleteUser = async (id) => {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows; 
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
