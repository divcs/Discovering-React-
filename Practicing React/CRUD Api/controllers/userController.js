import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body

    // Validate input fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email: email })

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      })
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create a new user
    const user = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    })

    // Save the user to the database
    await user.save()

    res.json({
      success: true,
      message: 'User created successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error('Error in user registration:', error.message)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error,
    })
  }
}

const userAll = async (req, res) => {
  try {
    const user = await userModel.find()
    if (user) {
      return res.json({
        success: true,
        message: 'Retrieved all users successfully',
        userAll: user,
      })
    }
  } catch (error) {
    console.error('Error in user registration:', error)
    res.json({
      success: false,
      message: error.message,
    })
  }
}

// const UserUpdate = async (req, res) => {
//   try {
//   } catch (error) {
//     console.error
//   }
// }

const userDelete = async (req, res) => {
  try {
    const userId = req.params.id

    // check if user exists
    const user = await userModel.findById(userId)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User does not exist',
      })
    }

    // Deleting user
    await userModel.findByIdAndDelete(userId)
    res.json({
      success: true,
      message: 'User deleted successfully',
    })
  } catch (error) {
    console.error('Error', error)
    res.json({
      success: false,
      message: 'User not deleted',
    })
  }
}

const getUserById = async (req, res) => {
  try {
    const userById = await req.params.id
    const user = await userModel.findById(userById)

    if (user) {
      return res.status(200).json({
        status: 'success',
        message: 'User found',
        user: user,
      })
    }
  } catch (error) {
    console.error('Error', error)
  }
}

// const userUpdateById = async (req, res) => {
//   try {
//     const userById = req.params.id // Remove 'await' since it's synchronous
//     const user = await userModel.findById(userById)
//     const { name, email, password } = req.body

//     if (!user) {
//       throw new Error('User does not exist') // 'new' keyword is needed for Error
//     }

//     user.name = name || user.name
//     user.email = email || user.email

//     if (password) {
//       const hashPassword = await bcrypt.hash(password, 10)
//       user.password = hashPassword // Use 'hashPassword' instead of 'password'
//     }

//     await user.save()
//     res.status(200).json({
//       success: true,
//       message: 'User updated successfully',
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     })
//   } catch (error) {
//     console.error('Error', error)
//     res.status(500).json({
//       success: false,
//       message: 'Internal Server Error',
//       error: error.message,
//     })
//   }
// }

const userUpdateById = async (req, res) => {
  try {
    const userId = req.params.id
    const { name, email, password } = req.body

    // Check if the user exists
    const user = await userModel.findById(userId)
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      })
    }

    // Update user fields
    user.name = name || user.name
    user.email = email || user.email

    if (password) {
      // If a new password is provided, hash and update the password
      const hashedPassword = await bcrypt.hash(password, 10)
      user.password = hashedPassword
    }

    // Save the updated user to the database
    await user.save()

    res.json({
      success: true,
      message: 'User updated successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error('Error in update user:', error.message)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error,
    })
  }
}

export { userRegister, userAll, userDelete, getUserById, userUpdateById }
