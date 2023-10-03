import React, { useEffect, useState } from "react";
import { Button, MenuItem, Select } from "@mui/material";
import cls from "./AdminRooms.module.css";
import { TableComponent } from "@/components/Table/ui/TableComponent";
import Modal from "@/components/Modal/Modal";
import { InputText } from "@/shared/InputText/InputText";
import AddOrderForm from "@/widgets/AddOrderForm/AddOrderForm";
import AddRoomForm from "@/widgets/AddRoomForm/AddRoomForm";
import { useDispatch, useSelector } from "react-redux";
import { GetRoomsService } from "@/services/rooms/GetRoomsService";
import { DeleteNewsService } from "@/services/news/DeleteNews";
import { DeleteRoomService } from "@/services/rooms/DeleteRoomService";
import { GetSingleRoomService } from "@/services/rooms/GetSingleRoomService";
import { GetSingleNewsService } from "@/services/news/GetSingleNews";
import { GetPlansService } from "@/services/plans/GetPlans";

function AdminRooms() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const [mode, setMode] = useState("create");
  const [defaultData, setDefaultData] = useState(null);
  const roomList = useSelector((state) => state?.rooms?.rooms);
  const planList = useSelector((state) => state?.plans?.plans);

  const addRoom = () => {
    setModal(true);
    setMode("create");
    setDefaultData(null);
  };

  const changeRoom = async (id) => {
    const en = await dispatch(GetSingleRoomService({ id: id, lang: "en" }));
    const ru = await dispatch(GetSingleRoomService({ id: id, lang: "ru" }));
    let data = {
      id: en?.payload?.id,
      room_number: en?.payload?.room_number,
      size: en?.payload?.size,
      eng_text: en?.payload?.description,
      rus_text: ru?.payload?.description,
      room_plan: planList?.find((item) => item.id === en?.payload?.room_plan)
        ?.room_plan,
      room_type: planList?.find((item) => item.id === en?.payload?.room_plan)
        ?.room_type,
      images: en?.payload?.images,
      beds: en?.payload?.beds,
    };

    console.log(en?.payload?.beds);

    setDefaultData(data);
    setModal(true);
    setMode("change");
  };

  const deleteRoom = (id) => {
    dispatch(DeleteRoomService(id));
  };

  const columns = [
    {
      field: "room_plan",
      headerName: "Тариф",
      minWidth: 200,
      renderCell: (params) => (
        <p>{planList.find((plan) => plan?.id === params?.value)?.room_plan}</p>
      ),
    },
    { field: "room_number", headerName: "Номер", minWidth: 100 },
    {
      field: "is_reserved",
      headerName: "Статус",
      minWidth: 200,
      renderCell: (params) => <p>{params.value ? "Занят" : "Свободно"}</p>,
    },
    {
      field: "room_type",
      headerName: "Тип",
      minWidth: 300,
      renderCell: (params) => <p>{params?.value?.toLowerCase()}</p>,
    },
    // { field: "capacity", headerName: "Местимость", minWidth: 200 },
    {
      field: "local_price",
      headerName: "Локальная цена(сум)",
      minWidth: 200,
      renderCell: (params) => (
        <p>
          {
            planList.find(
              (plan) =>
                plan?.id ===
                roomList?.find((item) => item?.id === params?.id)?.room_plan,
            )?.local_price
          }
        </p>
      ),
    },
    {
      field: "foreigner_price",
      headerName: "Зарубежная цена($)",
      minWidth: 200,
      renderCell: (params) => (
        <p>
          {
            planList.find(
              (plan) =>
                plan?.id ===
                roomList?.find((item) => item?.id === params?.id)?.room_plan,
            )?.foreigner_price
          }
        </p>
      ),
    },

    {
      field: "actions",
      headerName: "Действие",
      width: 250,
      renderCell: (params) => (
        <div className={cls.actions}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => changeRoom(params?.id)}
          >
            Изменить
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => deleteRoom(params?.id)}
          >
            Удалить
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(GetRoomsService());
    dispatch(GetPlansService());
  }, []);

  useEffect(() => {
    setModal(false);
  }, [roomList]);

  return (
    <>
      <div className={cls.Header}>
        <h3>Комнаты</h3>
        <Button variant="contained" onClick={addRoom}>
          Добавить комнату
        </Button>
      </div>
      <TableComponent
        TableClass={cls.RoomsTable}
        columns={columns}
        rows={roomList}
        pageSize={[10, 25, 50, 100]}
      />
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        modalClass={cls.Modal}
      >
        <AddRoomForm mode={mode} defaultData={defaultData} />
      </Modal>
    </>
  );
}

export default AdminRooms;
