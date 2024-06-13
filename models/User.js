import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  birthday: Date,
  tickets: [
    {
      date: Date,
      title: String,
      ticketType: {
        type: String,
        enum: ['VIP', 'NOR'],
        default: 'NOR' 
      }
    }
  ]
});

export default mongoose.model('users', userSchema)