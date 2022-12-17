const auth = (req, res, next) => {
  // 인증 처리하는 곳
  // 클라이언트 쿠키에서 토큰을 가져온다.
  let access = req.cookies.access;
  // 토큰을 복호화 한후 유저를 찾는다.
  // 유저가 있으면 인증 okay
  //   유저가 없으면 인증 no
};

export default auth;
