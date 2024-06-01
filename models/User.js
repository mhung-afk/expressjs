import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  birthday: Date,
});

export default mongoose.model('users', userSchema)