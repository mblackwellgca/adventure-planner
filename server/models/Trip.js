const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const tripSchema = new Schema({
  tripName: {
    type: String,
    required: 'You need to name your trip',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  locationName: {
    type: String,
    required: 'You need to search a location',
    minlength: 1,
    maxlength: 280,
  },
  tripDates: {
    type: String,
    required: 'You need to select a date',
  },
  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
  },
],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

})

const Trip = model('Trip', tripSchema);

module.exports = Trip;