import React, { useEffect, useState } from "react";
import cls from "./AdminPlans.module.css";
import { Button, MenuItem, Select } from "@mui/material";
import { TableComponent } from "@/components/Table/ui/TableComponent";
import Modal from "@/components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { GetPlansService } from "@/services/plans/GetPlans";
import { DeletePlanService } from "@/services/plans/DeletePlan";
import AddPlanForm from "@/widgets/AddPlanForm/AddPlanForm";
import { GetSinglePlanService } from "@/services/plans/GetSinglePlan";
import { useRoomFormOptions } from "@/store/useRoomFormOptions";

function AdminPlans() {
  const dispatch = useDispatch();
  const [lang, setLang] = useState("ru");
  const [modal, setModal] = useState(false);
  const plansList = useSelector((state) => state?.plans?.plans);
  const [mode, setMode] = useState("create");
  const [defaultData, setDefaultData] = useState(null);
  const options = useRoomFormOptions();

  const changeLang = (e) => {
    setLang(e.target.value);
  };

  const addPlan = () => {
    setModal(true);
    setMode("create");
    setDefaultData(null);
  };

  const changePlan = async (id) => {
    const en = await dispatch(GetSinglePlanService({ id: id, lang: "en" }));
    const ru = await dispatch(GetSinglePlanService({ id: id, lang: "ru" }));
    const data = {
      id: en?.payload?.id,
      room_plan: ru?.payload?.room_plan,
      room_type: ru?.payload?.room_type,
      local_price: en?.payload?.local_price,
      foreigner_price: ru?.payload?.foreigner_price,
    };
    setDefaultData(data);
    setModal(true);
    setMode("change");
  };

  const deletePlan = (id) => {
    dispatch(DeletePlanService(id));
  };

  const columns = [
    { field: "room_plan", headerName: "Тариф", minWidth: 200 },
    { field: "room_type", headerName: "Тип", minWidth: 200 },
    { field: "local_price", headerName: "Местная цена", minWidth: 200 },
    { field: "foreigner_price", headerName: "Зарубежная цена", minWidth: 200 },
    {
      field: "id",
      headerName: "Действие",
      width: 250,
      height: 100,
      renderCell: (params) => (
        <div className={cls.actions} key={params?.id}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => changePlan(params?.id)}
          >
            Изменить
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => deletePlan(params?.id)}
          >
            Удалить
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(GetPlansService(lang));
  }, [lang]);

  useEffect(() => {
    setModal(false);
  }, [plansList]);

  return (
    <>
      <div className={cls.Header}>
        <h3>Тарифы</h3>
        <div className={cls.NewsAddButton}>
          <h4>Язык тарифов: </h4>
          <Select
            id="language"
            defaultValue={lang}
            onChange={(e) => changeLang(e)}
            size="small"
          >
            <MenuItem value={"ru"}>Русский</MenuItem>
            <MenuItem value={"en"}>Английский</MenuItem>
          </Select>
          <Button variant="contained" onClick={addPlan}>
            Добавить тариф
          </Button>
        </div>
      </div>
      <TableComponent
        TableClass={cls.NewsTable}
        columns={columns}
        rows={plansList}
        pageSize={[10, 25, 50, 100]}
      />
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        modalClass={cls.Modal}
      >
        <AddPlanForm mode={mode} defaultData={defaultData} />
      </Modal>
    </>
  );
}

export default AdminPlans;
