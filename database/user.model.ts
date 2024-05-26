import { Document, Schema, model, models } from "mongoose";

// Define the User interface
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

// Create the User schema
const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the User model
const User = models.User || model<IUser>("User", UserSchema);

export default User;
