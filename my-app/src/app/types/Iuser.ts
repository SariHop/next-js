import { Document } from 'mongoose';

// הגדרת האינטרפייס, כולל _id
export default interface IUser extends Document {
  //   _id: string; // או ObjectId אם אתה משתמש בממשק הספציפי
  userName: string;
  email: string;
  password: string;
}