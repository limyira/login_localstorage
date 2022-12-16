import { useEffect } from "react";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router";
import styled from "styled-components";

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
  const editMatch = useMatch("/edit");
  const joinMatch = useMatch("/join");
  const loginMatch = useMatch("/login");
  const logoutMatch = useMatch("/logout");
  const [state, setState] = useState(1);
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
    if (logoutMatch) {
      setState(4);
    }
  }, [editMatch, joinMatch, loginMatch, logoutMatch]);
  return (
    <Wrapper>
      <Contents>
        <Item1 match={state} onClick={() => nav("/edit")}>
          Edit
        </Item1>
        <Item2 match={state} onClick={() => nav("/join")}>
          Join
        </Item2>
        <Item3 match={state} onClick={() => nav("/login")}>
          Log in
        </Item3>
        <Item4 match={state} onClick={() => nav("/logout")}>
          Log out
        </Item4>
      </Contents>
    </Wrapper>
  );
};

export default Header;
