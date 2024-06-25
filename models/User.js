import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
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