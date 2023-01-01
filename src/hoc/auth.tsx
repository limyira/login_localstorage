import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authResponse } from "../actions/actions";
const auth = (SpecificComponent: any, option: any, adminRoute = null) => {
  function AuthenticationCheck(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigate();
    useEffect(() => {
      (async () => {
        const response = await axios.get(
          "http://localhost:3001/api/users/auth",
          { withCredentials: true }
        );
        console.log(response.data);
        dispatch(authResponse(response.data));
      })();
    }, []);
    return <SpecificComponent />;
  }
  return <AuthenticationCheck />;
};

export default auth;
