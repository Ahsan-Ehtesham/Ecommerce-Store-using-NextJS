import bcrypt from 'bcrypt'

import User from '../../models/User'
import connectDb from '../../middleware/mongoose'

const handler = async (req, res) => {
  if (req.method === 'POST' && req.body) {
    console.log(req.body)
    const { fullName, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = { fullName: fullName, email: email, password: hashedPassword }

    await User.create(newUser)

    res.status(200).json({ success: 'Success' })
  } else {
    res.status(400).json({ error: 'This method is not allowed and/or invalid data' })
  }
}

export default connectDb(handler)
