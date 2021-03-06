import Model from './Model';
import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const dealsSchema = new Schema({
  deal_id: {
    type: Number,
    required: true,
    unique: true
  },
  creator: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  org: {
    type: String
  },

  status: {
    type: String,
    required: true,
    default: 'active'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.connection.model('deals', dealsSchema);
