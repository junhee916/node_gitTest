const mongoose = require("mongoose");

const {Schema} = mongoose;
const boardSchema = new Schema({

    contents : {
        type: String,
    },
    nickname : {
        type: String,
    }
})

boardSchema.virtual('boardId').get(function () {
	return this._id.toHexString();
});

boardSchema.set('toJSON', {
	virtuals: true
});

module.exports = mongoose.model("Boards", boardSchema)