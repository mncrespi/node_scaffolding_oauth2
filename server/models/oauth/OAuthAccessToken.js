import mongoose from 'mongoose'

const Schema = mongoose.Schema

// todo: rename expires to expires_at

const OAuthAccessTokenSchema = new Schema({
  access_token: String,
  expires: Date,
  scope: String,
  User: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  OAuthClient: {
    type: Schema.Types.ObjectId,
    ref: 'OAuthClient',
  },
})

export default mongoose.model('OAuthAccessToken', OAuthAccessTokenSchema)