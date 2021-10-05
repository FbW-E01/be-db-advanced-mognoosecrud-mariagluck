import User from "./models/user.js";
import { connecting, disconnecting } from "./connection.js";

await connecting();

const usersList = await User.find({});
console.log(usersList);


await disconnecting();