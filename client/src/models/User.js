const mongoose = require("mongoose"); // mongoose 불러오기

// Schema 생성
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// model을 export 해주기
const User = mongoose.model("user", UserSchema);
module.exports = User;