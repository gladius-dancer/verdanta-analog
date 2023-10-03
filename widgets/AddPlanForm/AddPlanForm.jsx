import React, { useEffect } from "react";
import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cls from "./AddPlanForm.module.css";
import { InputText } from "@/shared/InputText/InputText";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CreatePlanService } from "@/services/plans/CreatePlan";
import { ChangePlanService } from "@/services/plans/ChangePlan";
import { Dropdown } from "@/shared/Dropdown/Dropdown";
import { useRoomFormOptions } from "@/store/useRoomFormOptions";

function AddPlanForm({ mode, defaultData }) {
  const currentUser = useSelector((state) => state?.auth?.currentUser);
  const dispatch = useDispatch();
  const options = useRoomFormOptions();

  const schema = yup.object().shape({
    room_plan: yup.string().required("Заголовок обязательно"),
    room_type: yup.string().required("Заголовок обязательно"),
    local_price: yup.string().required("Текст обязательно"),
    foreigner_price: yup.string().required("Текст обязательно"),
  });
  const methods = useForm({ resolver: yupResolver(schema) });
  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = methods;
  const onSubmit = (data) => {
    console.log(data);

    let roomPlan = options.planOptions.find(
      (item) => item?.label === data?.room_plan,
    )?.value?.server;

    let roomType = options.roomTypeOptions.find(
      (item) => item?.label === data?.room_type,
    )?.value?.server;

    const formData = new FormData();
    formData.append("room_plan", roomPlan);
    formData.append("room_type", roomType);
    formData.append("local_price", data?.local_price);
    formData.append("foreigner_price", data?.foreigner_price);

    if (mode === "create") {
      dispatch(CreatePlanService(formData));
    }
    if (mode === "change") {
      dispatch(ChangePlanService({ id: defaultData?.id, news: formData }));
    }
  };

  useEffect(() => {
    if (mode === "change") {
      setValue("room_plan", defaultData?.room_plan);
      setValue("room_type", defaultData?.room_type);
      setValue("local_price", defaultData?.local_price);
      setValue("foreigner_price", defaultData?.foreigner_price);
    } else {
      setValue("room_plan", null);
      setValue("room_type", null);
      setValue("local_price", null);
      setValue("foreigner_price", null);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.AddNews}>
      <h4> {mode === "create" ? "Добавить тариф" : "Изменить тариф"}</h4>
      <div className={cls.AddNewsBody}>
        <Dropdown
          name="room_plan"
          label="Тариф"
          control={control}
          className={cls.DropDown}
          options={options.planOptions}
          size="small"
        />
        <Dropdown
          name="room_type"
          label="Тип комнаты"
          control={control}
          className={cls.DropDown}
          options={options.roomTypeOptions}
          size="small"
        />
        <InputText
          name="local_price"
          label="Местная цена"
          control={control}
          size="small"
          status={true}
          defaultValue={!!defaultData ? defaultData?.local_price : ""}
        />
        <InputText
          name="foreigner_price"
          label="Зарубежная цена"
          control={control}
          size="small"
          status={true}
          defaultValue={!!defaultData ? defaultData?.foreigner_price : ""}
        />

        <Button variant="contained" type="submit">
          {mode === "create" ? "Добавить тариф" : "Сохранить тариф"}
        </Button>
      </div>
    </form>
  );
}

export default AddPlanForm;
