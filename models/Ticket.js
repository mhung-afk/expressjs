import mongoose, { Schema } from 'mongoose';

const ticketSchema = new Schema({
  title: String,
  ticketType: {
    type: String,
    enum: ['VIP', 'NOR'],
    default: ['NOR']
  },
  date: Date,
  refUser: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

export default mongoose.model('tickets', ticketSchema)