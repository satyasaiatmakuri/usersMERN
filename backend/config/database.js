const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LIVE_URL, {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDb Database connected with HOST: ${con.connection.host}`
      );
    });
};

module.exports = connectDatabase;
