import bcrypt from 'bcrypt'

import User from '../../models/User'
import connectDb from '../../middleware/mongoose'

const handler = async (req, res) => {
  if (req.method === 'POST' && req.body) {
    const { email, password } = req.body
    const userFound = await User.findOne({ email: email })
    const hashedPassword = userFound ? userFound.password : null

    const passwordVerified = hashedPassword ? await bcrypt.compare(password, hashedPassword) : null

    passwordVerified
      ? res.status(200).json({ success: 'Success' })
      : res.status(400).json({ error: 'Password / Username invalid' })
  } else {
    res.status(400).json({ error: 'This method is not allowed and/or invalid data' })
  }
}

export default connectDb(handler)
