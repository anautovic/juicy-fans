import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true,
    }, role:{
      type: String,
      default: user  
    }, 
    root:{
        type: Boolean,
        default: false

    },
    avatar:{
        type: String,
        default: 'https://res.cloudinary.com/wil/image/upload/v1622102137/avatar_ru4dhv.jpg'

    }
},{
    timestamps:true
})
let Dataset = mongoose.models.user  || mongoose.model('user', userSchema)
export default Dataset