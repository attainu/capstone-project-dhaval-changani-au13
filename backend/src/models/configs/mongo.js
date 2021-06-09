import mongoose from "mongoose";

const mongoUri = `mongodb://localhost:27017/anastart`;

async function mongoInit() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB connect succesfully");
  } catch (error) {
    console.log(error.message);
  }
}

export default mongoInit;
