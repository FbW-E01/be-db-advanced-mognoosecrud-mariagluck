import User from "./models/user.js";
import { connecting, disconnecting } from "./connection.js";

await connecting();
//in this case I choose which user to delete by email
const deleteUser = await User.findOne({ email: "Bulah17@hotmail.com" });

await User.deleteOne(deleteUser);

await disconnecting();