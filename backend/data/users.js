import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Adnan Ahmed',
    email: 'adnan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Alamin Islam',
    email: 'alamin@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
