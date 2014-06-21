var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = mongoose.Schema;

var LeagueSchema = new Schema({
    name: { type: String },
    room_type: { type: String },
    room_capacity: { type: Number },
    room_facilities: { type: String },
    room_description: { type: String },
    room_price: { type: Number },
    overall_booked:Boolean,
    bookingDate: [{
        booked: Boolean,
        startDate: Date,
        endDate: Date,
    }],
    commissioner: { type: Schema.ObjectId, ref: 'User' }
});
LeagueSchema.statics = {
    load: function (id, cb) {
        this.findOne({ _id: id }).populate('commissioner').exec(cb);
    }
};

mongoose.model('League', LeagueSchema);