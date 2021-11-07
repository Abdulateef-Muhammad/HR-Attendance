import { loginInfo } from "./loginInfo";
import Input from "../common/Input";
import Button from "../common/Button";
import { useState } from "react";

const LoginForm = (props) => {
  const [formInfo, setFormInfo] = useState({
    username: "",
    password: "",
  });

  // functionality not finished


  
  return (
    <form>
      <div>
        {loginInfo.inputs.map((input) => {
          return <Input props={input} />;
        })}
        <div className="p-2">
          <Button
            data={{
              value: "Login",
              callback: () => {
                console.log("cb");
              },
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
