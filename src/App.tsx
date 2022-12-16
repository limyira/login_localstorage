import React from "react";
import Router from "./router/Router";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Router />
      </Wrapper>
    </>
  );
}

export default App;
