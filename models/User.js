import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  birthday: Date,
  // tickets: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'tickets'
  //   }
  // ]
});

export default mongoose.model('users', userSchema)