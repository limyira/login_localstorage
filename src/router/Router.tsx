import { BrowserRouter, Routes, Route, RouteProps } from "react-router-dom";
import Edit from "./Edit";
import Join from "./Join";
import Login from "./Login";
import Header from "../components/Header";
import Logout from "./Logout";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
