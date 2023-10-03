import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import cls from "./AdminUsers.module.css";
import { TableComponent } from "@/components/Table/ui/TableComponent";
import Modal from "@/components/Modal/Modal";
import AddUserForm from "@/widgets/AddUserForm/AddUserForm";
import { useDispatch, useSelector } from "react-redux";
import { GetUsersService } from "@/services/user/GetUsersService";
import { DeleteUserService } from "@/services/user/DeleteUserService";

function AdminUsers() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const userList = useSelector((state) => state?.users?.users);
  const [mode, setMode] = useState("create");
  const [defaultData, setDefaultData] = useState(null);

  const addUser = () => {
    setModal(true);
    setMode("create");
    setDefaultData(null);
  };

  const changeUser = (id) => {
    let data = { id: id, user: userList?.find((item) => item?.id === id) };
    setDefaultData(data);
    setModal(true);
    setMode("change");
  };

  const deleteUser = (id) => {
    dispatch(DeleteUserService(id));
  };

  const columns = [
    { field: "full_name", headerName: "Имя", minWidth: 400 },
    { field: "username", headerName: "Логин", minWidth: 300 },
    {
      field: "id",
      headerName: "Действие",
      width: 250,
      renderCell: (params) => (
        <div className={cls.actions}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => changeUser(params?.id)}
          >
            Изменить
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => deleteUser(params?.id)}
          >
            Удалить
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(GetUsersService());
  }, []);

  useEffect(() => {
    setModal(false);
  }, [userList]);

  return (
    <>
      <div className={cls.Header}>
        <h3>Пользователи</h3>
        <Button variant="contained" onClick={addUser}>
          Добавить пользователья
        </Button>
      </div>
      <TableComponent
        TableClass={cls.UsersTable}
        columns={columns}
        rows={userList}
        pageSize={[10, 25, 50, 100]}
        selection={false}
      />
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        modalClass={cls.Modal}
      >
        <AddUserForm mode={mode} defaultData={defaultData} />
      </Modal>
    </>
  );
}

export default AdminUsers;
