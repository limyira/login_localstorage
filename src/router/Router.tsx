import { BrowserRouter, Routes, Route, RouteProps } from "react-router-dom";
import Edit from "./Edit";
import Join from "./Join";
import Login from "./Login";
import Header from "../components/Header";
import Logout from "./Logout";
import auth from "../hoc/auth";
const Router = () => {
  const AuthJoin = auth(Join, null);
  const AuthLogin = auth(Login, false);
  const AuthEdit = auth(Edit, false);
  const AuthLogout = auth(Logout, false);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={AuthJoin}></Route>
          <Route path="/join" element={AuthJoin}></Route>
          <Route path="/login" element={AuthLogin}></Route>
          <Route path="/edit" element={AuthEdit}></Route>
          <Route path="/logout" element={AuthLogout}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
