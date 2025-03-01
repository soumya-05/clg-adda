import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    admission: {
      type: String,
      required: true,
    },
    img_path: {
      type: String,
      default: '/logo192.png',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    following: [{ type: mongoose.Schema.Types.Mixed, ref: 'user' }],
    linkedIn: {
      type: String,
      default: 'Not available',
    },
    twitter: {
      type: String,
      default: 'Not available',
    },
    instagram: {
      type: String,
      default: 'Not available',
    },
    facebook: {
      type: String,
      default: 'Not available',
    },
    tips: {
      type: String,
      default: 'NA',
    },
    about: {
      type: String,
      default: 'NA',
    },
  },
  { timestamps: true }
)

//password dcrypt
userSchema.methods.matchPassword = async function (enterPAssword) {
  return await bcrypt.compare(enterPAssword, this.password)
}

//password encrypt:  pre is used run this midlleware automatically before save and will when password modified.........
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)
export default User
