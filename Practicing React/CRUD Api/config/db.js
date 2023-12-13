import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb://localhost:27017/userDB'
    )
    console.log('Connected to MongoDB successfully 🙏')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message)
  }
}

export default connectDB
