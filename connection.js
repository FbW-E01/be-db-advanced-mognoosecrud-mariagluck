import mongoose from 'mongoose';


export async function connecting() {
    const connString = "mongodb://mariamart:passW0rd@localhost:27017/mariamartdb";
   await mongoose.connect(connString);
}

export async function disconnecting () {
    await mongoose.disconnect();
}



   
 