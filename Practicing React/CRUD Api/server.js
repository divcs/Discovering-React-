import express from 'express'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

// Define API routes
app.use('/api/v1/user', userRoutes)

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start the server
const startServer = async () => {
  try {
    await connectDB() // Connect to the database
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  } catch (error) {
    console.error('Error starting server:', error.message)
    process.exit(1) // Exit the process with an error code
  }
}

startServer()
