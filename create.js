import faker from "faker";
import User from "./models/user.js";
import { connecting, disconnecting } from "./connection.js";



await connecting();

  // generate 3 user profiles
  for (let i = 0; i < 3; i++) {
    await User.create({
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: faker.random.arrayElement([ 'User', 'Admin', 'Editor' ])
   })
 }
 

await disconnecting();