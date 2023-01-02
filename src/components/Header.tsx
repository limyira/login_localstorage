import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router";
import styled from "styled-components";
import { RootState } from "../reducer";
import { logoutRequest } from "../actions/actions";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  height: 100px;
  min-height: fit-content;
  display: flex;
  justify-content: center;
`;
const Contents = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;
interface IItem {
  match: number;
}
const Item1 = styled.div<IItem>`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.7rem;
  cursor: pointer;
  background-color: ${(props) => (props.match === 2 ? "tomato" : "skyblue")};
  border-radius: 1rem;
  transition: 0.5s ease-in-out;
`;
const Item2 = styled.div<IItem>`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.7rem;
  cursor: pointer;
  background-color: ${(props) => (props.match === 1 ? "tomato" : "skyblue")};
  border-radius: 1rem;
  transition: 0.5s ease-in-out;
`;
const Item3 = styled.div<IItem>`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.7rem;
  cursor: pointer;
  background-color: ${(props) => (props.match === 3 ? "tomato" : "skyblue")};
  border-radius: 1rem;
  transition: 0.5s ease-in-out;
`;
const Item4 = styled.div<IItem>`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.7rem;
  cursor: pointer;
  background-color: ${(props) => (props.match === 4 ? "tomato" : "skyblue")};
  border-radius: 1rem;
  transition: 0.5s ease-in-out;
`;
const Header = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const editMatch = useMatch("/edit");
  const joinMatch = useMatch("/join");
  const loginMatch = useMatch("/login");
  const [state, setState] = useState(1);
  const baseUrl = "http://localhost:3001/api/users/logout";
  const user = useSelector((state: RootState) => state.authReducer);
  const isLogin = user.isAuth;
  console.log(user);
  const logoutClick = async () => {
    const response = await axios.get(`${baseUrl}`, { withCredentials: true });
    console.log(response.data);
    if (response.data.success) {
      dispatch(logoutRequest());
      nav("/login");
    }
  };
  useEffect(() => {
    if (editMatch) {
      setState(2);
    }
    if (joinMatch) {
      setState(1);
    }
    if (loginMatch) {
      setState(3);
    }
  }, [editMatch, joinMatch, loginMatch]);
  return (
    <Wrapper>
      <Contents>
        {isLogin && (
          <Item1 match={state} onClick={() => nav("/edit")}>
            Edit
          </Item1>
        )}
        {!isLogin && (
          <Item2 match={state} onClick={() => nav("/join")}>
            Join
          </Item2>
        )}
        {!isLogin && (
          <Item3 match={state} onClick={() => nav("/login")}>
            Log in
          </Item3>
        )}
        {isLogin && (
          <Item4 match={state} onClick={logoutClick}>
            Log out
          </Item4>
        )}
      </Contents>
    </Wrapper>
  );
};

export default Header;
