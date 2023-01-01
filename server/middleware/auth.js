import User from "../model/User.js";

const auth = (req, res, next) => {
  // 인증 처리하는 곳
  // 클라이언트 쿠키에서 토큰을 가져온다.
  let token = req.cookies.access;
  if (!token)
    return res.status(404).json({ isAuth: false, error: "토큰이없습니다." });
  User.findByToken(token, (err, user) => {
    console.log(token);
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
  });
  // 토큰을 복호화 한후 유저를 찾는다.
  // 유저가 있으면 인증 okay
  //   유저가 없으면 인증 no
};

export default auth;
