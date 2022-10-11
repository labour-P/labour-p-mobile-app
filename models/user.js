import mongoose from "mongoose";

const UsersSchema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  userName: { type: String, required: true },
  profileUrl: {  required: true},
  password: { type: String, required: true },
  address: { type: String},
  city: { type: String},
  state: { type: String, required: true },
  lga: { type: String, required: true },
  ward: { type: String, required: true },
  pollingUnit: { type: String, required: true },
  age: { type: String, required: true },
});

export default mongoose.model("User", UsersSchema);


