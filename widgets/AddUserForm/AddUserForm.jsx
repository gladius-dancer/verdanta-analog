import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cls from "./AddUserForm.module.css";
import { InputText } from "@/shared/InputText/InputText";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { InputPass } from "@/shared/InputPass/InputPass";
import { AddUserService } from "@/services/user/AddUserService";
import { ChangeUserService } from "@/services/user/ChangeUserService";

function AddUserForm({ mode, defaultData }) {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    full_name: yup.string().required("Полная имя обязательно"),
    username: yup.string().required("Имя пользователя обязательно"),
    password: yup
      .string()
      .required("Пароль обязательно")
      .min(6, "Минимум 6 символов"),
  });
  const methods = useForm({ resolver: yupResolver(schema) });

  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    if (mode === "create") {
      dispatch(AddUserService(data));
    }
    if (mode === "change") {
      dispatch(ChangeUserService({ id: defaultData?.id, user: data }));
    }
  };

  useEffect(() => {
    setValue("full_name", defaultData?.user?.full_name);
    setValue("username", defaultData?.user?.username);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.AddUser}>
      {mode === "create" && <h4>Добавить пользователя</h4>}
      {mode === "change" && <h4>Изменить пользователя</h4>}

      <div className={cls.AddUserBody}>
        <InputText
          name="full_name"
          label="Полная имя"
          control={control}
          size="small"
          status={true}
          defaultValue={!!defaultData ? defaultData?.user?.full_name : ""}
          register={register}
        />
        <InputText
          name="username"
          label="Имя пользователя"
          control={control}
          size="small"
          status={true}
          defaultValue={!!defaultData ? defaultData?.user?.username : ""}
          register={register}
        />
        <InputPass
          name="password"
          label="Пароль"
          control={control}
          size="small"
          status={true}
        />
        <Button variant="contained" type="submit">
          Добавить
        </Button>
      </div>
    </form>
  );
}

export default AddUserForm;
