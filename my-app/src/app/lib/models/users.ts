import mongoose, { Schema, Model } from 'mongoose';
import IUser from '../../types/Iuser';

// Create a schema corresponding to the interface
const UserSchema: Schema<IUser> = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User: Model<IUser> = mongoose.models.Users ||mongoose.model<IUser>('users', UserSchema);
export default User
