import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cls from "./LoginForm.module.css";
import { InputText } from "@/shared/InputText/InputText";
import { InputPass } from "@/shared/InputPass/InputPass";
import { Button } from "@mui/material";
import { LoginService } from "@/services/auth/AuthService";
import { useRouter } from "next/router";
import { Toast } from "@/components/Toast/lib/Toast";

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuth = useSelector((state) => state?.auth?.isAuth);
  const schema = yup.object().shape({
    username: yup.string().required("Логин обязательно"),
    password: yup
      .string()
      .required("Пароль обязательно")
      .min(4, "Минимум 4 символа"),
  });
  const methods = useForm({ resolver: yupResolver(schema) });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    dispatch(LoginService(data));
  };

  useEffect(() => {
    if (isAuth) {
      router.push("/admin/news");
    }
  }, [isAuth]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.LoginForm}>
      <h3 className={cls.LoginFormHeader}>Логин</h3>
      <InputText
        name="username"
        control={control}
        label="Логин"
        status
        size="small"
        className={cls.inputText}
      />
      <InputPass
        name="password"
        control={control}
        label="Пароль"
        size="small"
        className={cls.inputPassword}
      />
      <Button className={cls.loginButton} type="submit" variant="contained">
        Логин
      </Button>
    </form>
  );
};

export default LoginForm;
