import User from "./models/user.js";
import { connecting, disconnecting } from "./connection.js";

await connecting();

try {
    //in this case I choose which user to delete by _id
    const updateFrom = {_id: "615c58da1cb4e5db3194898a"};
    const updateTo = { email: "mimi@example.com" };
    const options = { new: true, runValidators: true };
    const updated = await User.findByIdAndUpdate(updateFrom, updateTo, options);
    console.log(updated);
} catch (error) {
    console.log("Oh no, error during update", error.message);
}

await disconnecting();