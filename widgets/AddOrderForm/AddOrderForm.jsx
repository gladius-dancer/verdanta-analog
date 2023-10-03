import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cls from "./AddOrderForm.module.css";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { DatePickerComponent } from "@/shared/DatePicker/DatePicker";
import { TimePickerComponent } from "@/shared/TimePicker/TimePicker";
import { InputText } from "@/shared/InputText/InputText";
import { MultiLine } from "@/shared/Multiline/MultiLine";
import { InputCheckbox } from "@/shared/Checkbox/Checkbox";
import { Dropdown } from "@/shared/Dropdown/Dropdown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MultiChecker } from "@/shared/MultiChecker/MultiChecker";
import { GetCountryService } from "@/services/country/GetCountryService";
import { GetRoomsService } from "@/services/rooms/GetRoomsService";
import { GetPlansService } from "@/services/plans/GetPlans";
import { AddOrdersService } from "@/services/orders/AddOrdersService";
import dayjs from "dayjs";

function AddOrderForm({ mode, defaultData }) {
  const [forMySelf, setForMySelf] = useState(false);
  const [foreigner, setForeigner] = useState(false);
  const currentUser = useSelector((state) => state?.auth?.currentUser);
  const countryList = useSelector((state) => state?.country?.country);
  const countries = countryList
    ?.map((country) => {
      return { label: country.common };
    })
    ?.sort((a, b) => (a.label > b.label ? 1 : -1));
  let roomList = useSelector((state) => state?.rooms?.rooms);
  const roomNumbers = roomList.map((room) => room.room_number);
  let planList = useSelector((state) => state?.plans?.plans);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    checkin_date: yup.string().required("Дата заезда обязательно"),
    checkout_date: yup.string().required("Дата выезда обязательно"),
    checkin_time: yup.string().required("Время заезда обязательно"),
    checkout_time: yup.string().required("Время выезда обязательно"),
    comment: yup.string(),
    rooms: yup.mixed().required("Комнаты обязательно"),
    first_name: yup.string().required("Имя обязательно"),
    middle_name: yup.string().required("Отчество обязательно"),
    last_name: yup.string().required("Фамилия обязательно"),
    phone: yup.string().required("Телефон обязательно"),
    email: yup
      .string()
      .email("Должен быть в формате Email")
      .required("Email обязательно"),
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

  const {
    fields: guestArray,
    append: addGuest,
    remove: deleteGuest,
  } = useFieldArray({
    control,
    name: "guest",
  });

  const onSubmit = (data) => {
    const rooms = roomList.filter((room) => {
      return data.rooms.find((item) => item === room.room_number);
    });

    const roomIds = rooms.map((room) => room.id);

    const plans = planList.filter((plan) => {
      return rooms.find((room) => room.room_plan === plan.id);
    });

    const totalPrice = plans.reduce((total, plan) => {
      return foreigner
        ? total + plan.foreigner_price
        : total + plan.local_price;
    }, 0);

    const guests = data?.guest?.map((item) => {
      return {
        ...item,
        country: countryList.find(
          (country) => country?.common === item?.country,
        )?.id,
      };
    });

    const user = {
      first_name: data.first_name,
      middle_name: data.middle_name,
      last_name: data.last_name,
      phone: data.phone,
      email: data.email,
      for_myself: forMySelf,
    };

    const formData = {
      checkin_date: new Date(data.checkin_date)
        ?.toLocaleDateString()
        ?.split(".")
        .reverse()
        .join("-"),
      checkout_date: new Date(data.checkout_date)
        ?.toLocaleDateString()
        ?.split(".")
        .reverse()
        .join("-"),
      checkin_time: new Date(data.checkin_time)
        ?.toLocaleTimeString()
        ?.slice(0, 5),
      checkout_time: new Date(data.checkout_time)
        ?.toLocaleTimeString()
        ?.slice(0, 5),
      comment: data?.comment,
      total_price: totalPrice,
      user: user,
      guests: guests,
      rooms: roomIds,
    };

    console.log(formData);

    if (mode === "create") {
      // dispatch(AddOrdersService(formData));
    }
    if (mode === "change") {
      // dispatch(ChangeNewsService({ id: defaultData.id, news: formData }));
    }
  };

  const changeMySelf = () => {
    setForMySelf((prev) => !prev);
  };

  const changeForeigner = () => {
    setForeigner((prev) => !prev);
  };

  useEffect(() => {
    dispatch(GetCountryService("ru"));
    dispatch(GetRoomsService());
    dispatch(GetPlansService("en"));
    if (mode === "change") {
    } else {
      // setValue("eng_title", null);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.AddOrder}>
      <h4>Добавить заявку</h4>
      <div className={cls.AddOrderBody}>
        <div className={cls.Left}>
          <DatePickerComponent
            name="checkin_date"
            label="Дата заезда"
            setValue={setValue}
            control={control}
            className={cls.DatePicker}
            defaultValue={dayjs(new Date())}
          />
          <DatePickerComponent
            name="checkout_date"
            label="Дата выезда"
            setValue={setValue}
            control={control}
            className={cls.DatePicker}
            defaultValue={dayjs(new Date())}
          />
          <TimePickerComponent
            name="checkin_time"
            label="Время заезда"
            setValue={setValue}
            control={control}
            className={cls.DatePicker}
            ampm={false}
            defaultValue={dayjs(new Date())}
          />
          <TimePickerComponent
            name="checkout_time"
            label="Время выезда"
            setValue={setValue}
            control={control}
            className={cls.DatePicker}
            ampm={false}
            defaultValue={dayjs(new Date())}
          />

          <MultiChecker
            items={roomNumbers}
            setValue={setValue}
            name="rooms"
            control={control}
            label="Комнаты"
            className={cls.DropDown}
            size="small"
          />
          <MultiLine
            name="comment"
            label="Комментария"
            control={control}
            size="small"
            rows={5}
            className={cls.MultiLine}
            defaultValue={!!defaultData ? defaultData.eng_text : ""}
          />
        </div>
        <div className={cls.Center}>
          <InputText
            name="first_name"
            className={cls.GuestItemArea}
            label="Имя"
            control={control}
            size="small"
            status={true}
            defaultValue={!!defaultData ? defaultData.eng_title : ""}
          />
          <InputText
            name="middle_name"
            className={cls.GuestItemArea}
            label="Отчества"
            control={control}
            size="small"
            status={true}
            defaultValue={!!defaultData ? defaultData.eng_title : ""}
          />
          <InputText
            name="last_name"
            className={cls.GuestItemArea}
            label="Фамилия"
            control={control}
            size="small"
            status={true}
            defaultValue={!!defaultData ? defaultData.eng_title : ""}
          />
          <InputText
            name="phone"
            className={cls.GuestItemArea}
            label="Телефон"
            control={control}
            size="small"
            status={true}
            defaultValue={!!defaultData ? defaultData.eng_title : ""}
          />
          <InputText
            name="email"
            className={cls.GuestItemArea}
            label="Email"
            control={control}
            size="small"
            status={true}
            defaultValue={!!defaultData ? defaultData.eng_title : ""}
          />
          <InputCheckbox label="Бронирует для себя" onChange={changeMySelf} />
          <InputCheckbox label="Иностранец" onChange={changeForeigner} />
        </div>
        <div className={cls.Right}>
          <div className={cls.RightInner}>
            {guestArray.length > 0 && (
              <div className={cls.FormBlock}>
                {guestArray?.map((field, index) => (
                  <div key={field.id} className={cls.GuestItem}>
                    <InputText
                      name={`guest[${index}].first_name`}
                      label="Имя"
                      control={control}
                      size="small"
                      status={true}
                      className={cls.GuestItemArea}
                      // defaultValue={!!defaultData ? defaultData.eng_title : ""}
                    />
                    <InputText
                      name={`guest[${index}].middle_name`}
                      label="Отчество"
                      control={control}
                      size="small"
                      status={true}
                      className={cls.GuestItemArea}
                      // defaultValue={!!defaultData ? defaultData.eng_title : ""}
                    />
                    <InputText
                      name={`guest[${index}].last_name`}
                      label="Фамилия"
                      control={control}
                      size="small"
                      status={true}
                      className={cls.GuestItemArea}
                      // defaultValue={!!defaultData ? defaultData.eng_title : ""}
                    />

                    <Dropdown
                      name={`guest[${index}].country`}
                      control={control}
                      options={countries}
                      label="Страна"
                      className={cls.DropDown}
                      size="small"
                    />

                    <IconButton
                      type="button"
                      onClick={() => deleteGuest(index)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                ))}
              </div>
            )}

            <Button
              className={cls.AddButton}
              variant="contained"
              onClick={() => addGuest()}
            >
              <AddCircleOutlineIcon />
              Добавить гость
            </Button>
          </div>

          <Button variant="contained" type="submit">
            Добавить заявку
          </Button>
        </div>
      </div>
    </form>
  );
}

export default AddOrderForm;
