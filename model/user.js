const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        if (candidatePassword === this.password) {
            return true;
        }
        else {
            return false
        }
    } catch (error) {
        throw new Error(error);
    }
};
module.exports = mongoose.model('User', userSchema);
