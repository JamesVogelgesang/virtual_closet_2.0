'use server'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB

async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB')

    
  } catch (error) {
    console.log('Failed to connect to MongoDB: ', error)
  }
  
}

export default dbConnect