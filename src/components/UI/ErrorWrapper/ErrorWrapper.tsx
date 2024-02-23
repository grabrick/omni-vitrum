import { FC } from "react";
import m from "./ErrorWrapper.module.scss";
import { useNavigate } from "@/helpers/useNavigate";
import Template from "../shared/Template/Template";
import Button from "../shared/Button/Button";

const ErrorWrapper: FC<any> = ({ errorMessage, backRoute }) => {
  const navigate = useNavigate();
  return (
    <Template>
      <div className={m.container}>
        <h1 className={m.errorMessage}>{errorMessage}</h1>
        <Button text={"Главная"} icons={''} isRouteBtn={true} routePath="/" />
      </div>
    </Template>
  );
};

export default ErrorWrapper;
