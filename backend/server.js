import express from 'express'
import dotenv from 'dotenv'
import color from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import UserRoutes from './routes/UserRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'


dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is runnign...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', UserRoutes)
app.use('/api/orders', orderRoutes)



app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)



