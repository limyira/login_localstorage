import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

const User = mongoose.model("User", userSchema);

export default User;

// 안녕하세요, Sounghyun Jeon님!

// isModified() 라는 함수는 mongoose 모듈에 포함되어있는 함수입니다.

// 파라미터로 들어온 값이 db에 기록된 값과 비교해서 변경된 경우는 true를, 그렇지 않은 경우는 false를 반환하는 함수입니다.

// user 생성 시에는 항상 true이며, user가 수정되는 경우에는 password가 변경되는 경우에만 true를 반환합니다.

// user.password의 변경이 없는 경우라면 이미 해당 위치에 hash가 저장되어있으므로 false를 반환해 다시 암호화를 하지 않습니다.

// 현재 생성한 userSchema가 mongoose를 활용해서 생성한 schema이기 때문에 mongoose 모듈에 포함되어있는 isModified() 를 사용할 수 있다고 이해하시면 될 것 같습니다.

// 혹시 궁금하신 점이 있다면 댓글 남겨주세요.

// 도움이 되었으면 좋겠습니다. :)
