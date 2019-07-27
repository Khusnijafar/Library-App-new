var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema ({
    name: String,
    email: String,
    password: String,
    passwordConfirm: String,
    role: String
})

userSchema.pre('save', async function(next) {
    // hanya berjalan saat password dimodifikasi
    if(!this.isModified('password')) return next()
    // Hash password
    this.password = await bcrypt.hash(this.password, 12)
    // delete password confirm
    this.passwordConfirm = undefined
    next()
})

userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model('User', userSchema);

module.exports = User;