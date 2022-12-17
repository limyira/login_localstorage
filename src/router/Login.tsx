import { useForm, useFormState } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: rgba(200, 200, 200, 0.4);
  border-radius: 2.3rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  height: 50%;
  min-height: fit-content;
  padding: 2rem;
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Category = styled.div`
  width: 50%;
  height: 15%;
  margin: 0 auto;
  min-height: fit-content;
  min-width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Item = styled.div``;
const Input = styled.input`
  width: 240px;
  height: 30px;
  border-radius: 2rem;
  border: none;
  padding: 1rem;
`;
const Btn = styled.button`
  width: 140px;
  height: 60px;
  border-radius: 1rem;
  margin: 20px auto;
  border: 1px solid rgba(0, 0, 0, 0.6);
  cursor: pointer;
  font-size: 1.2rem;
`;
const Title = styled.div`
  width: 60%;
  height: 20%;
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
`;
interface IForm {
  user: {
    email: string;
    password: string;
  };
}

const Login = () => {
  const {
    handleSubmit,
    watch,
    register,
    getValues,
    formState: { errors },
  } = useForm<IForm>();
  const baseUrl = "http://localhost:3001";
  const submit = async () => {
    const user = getValues("user");
    console.log(user);
    try {
      const response = await axios.post(`${baseUrl}/api/users/login`, { user });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit(submit)}>
          <Title>
            <span style={{ fontSize: "1.8rem" }}>Login</span>
            <br />
            <br />
            {errors.user?.email?.message}
            <br />
            {errors.user?.password?.message}
          </Title>

          <Category>
            <Item>이메일</Item>
            <Item>
              <Input
                {...register("user.email", {
                  required: { value: true, message: "email is required" },
                  minLength: { value: 3, message: "Email more than 3 words" },
                  maxLength: { value: 8, message: "Email lower than 8 words" },
                })}
                placeholder="please input email"
              ></Input>
            </Item>
          </Category>
          <Category>
            <Item>비밀번호</Item>
            <Item>
              <Input
                {...register("user.password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 3,
                    message: "Password more than 3 words",
                  },
                  maxLength: {
                    value: 8,
                    message: "Password lower than 8 words",
                  },
                })}
                placeholder="please input password"
              ></Input>
            </Item>
          </Category>
          <Btn>Sign up</Btn>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
};

export default Login;
