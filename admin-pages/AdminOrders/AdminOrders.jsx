import React, { useEffect, useState } from "react";
import cls from "./AdminOrders.module.css";
import { Button } from "@mui/material";
import { TableComponent } from "@/components/Table/ui/TableComponent";
import Modal from "@/components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { GetOrdersService } from "@/services/orders/GetOrdersService";
import AddOrderForm from "@/widgets/AddOrderForm/AddOrderForm";
import { DeleteOrdersService } from "@/services/orders/DeleteOrdersService";
import { GetRoomsService } from "@/services/rooms/GetRoomsService";
import { GetSingleOrderService } from "@/services/orders/GetSingleOrder";

function AdminOrders() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  let orderList = useSelector((state) => state?.orders?.orders);
  const roomList = useSelector((state) => state?.rooms?.rooms);
  const [mode, setMode] = useState("create");
  const [defaultData, setDefaultData] = useState(null);

  const addOrder = () => {
    setModal(true);
    setMode("create");
    setDefaultData(null);
  };

  const changeOrder = async (id) => {
    const data = await dispatch(GetSingleOrderService(id));
    const defaultData = {
      checkin_date: new Date(data?.payload?.checkin_date),
      checkout_date: new Date(data?.payload?.checkout_date),
      checkin_time: new Date(data?.payload?.checkin_time),
      checkout_time: new Date(data?.payload?.checkout_time),
    };

    console.log(JSON.stringify(defaultData));
    setModal(true);
    setMode("change");
    setDefaultData(data);
  };

  const deleteOrder = (id) => {
    dispatch(DeleteOrdersService(id));
  };

  const columns = [
    {
      field: "user",
      headerName: "Полная имя",
      minWidth: 200,
      renderCell: (params) => (
        <p>
          {params.value?.first_name} {params?.value?.last_name}
        </p>
      ),
    },
    {
      field: "phone",
      headerName: "Телефон",
      minWidth: 200,
      renderCell: ({ id }) => (
        <p>{orderList?.find((item) => item?.id === id)?.user?.phone}</p>
      ),
    },
    { field: "checkin_date", headerName: "Дата приезда", minWidth: 200 },
    { field: "checkout_date", headerName: "Дата выезда", minWidth: 200 },
    { field: "total_price", headerName: "Полная цена", minWidth: 200 },
    {
      field: "rooms",
      headerName: "Комнаты",
      minWidth: 200,
      renderCell: (params) => {
        return roomList
          ?.filter((room) => params.value.find((item) => item === room?.id))
          ?.map((item, index) => (
            <span>
              {item.room_number}
              {params.value.length !== index + 1 ? ", " : ""}
            </span>
          ));
      },
    },
    {
      field: "actions",
      headerName: "Действие",
      width: 250,
      renderCell: (params) => (
        <div className={cls.actions} key={params?.id}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => changeOrder(params?.id)}
          >
            Изменить
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => deleteOrder(params?.id)}
          >
            Удалить
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(GetOrdersService());
    dispatch(GetRoomsService("ru"));
  }, []);

  return (
    <>
      <div className={cls.Header}>
        <h3>Заявки</h3>
        <Button variant="contained" onClick={addOrder}>
          Добавить заявку
        </Button>
      </div>
      <TableComponent
        columns={columns}
        rows={orderList}
        pageSize={[10, 25, 50, 100]}
        selection={true}
      />
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        modalClass={cls.Modal}
      >
        <AddOrderForm mode={mode} defaultData={defaultData} />
      </Modal>
    </>
  );
}

export default AdminOrders;
