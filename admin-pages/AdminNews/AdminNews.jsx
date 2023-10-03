import React, { useEffect, useState } from "react";
import cls from "./AdminNews.module.css";
import { Button, MenuItem, Select } from "@mui/material";
import { TableComponent } from "@/components/Table/ui/TableComponent";
import Modal from "@/components/Modal/Modal";
import AddNewsForm from "@/widgets/AddNewsForm/AddNewsForm";
import { useDispatch, useSelector } from "react-redux";
import { GetNewsService } from "@/services/news/GetNews";
import { DeleteNewsService } from "@/services/news/DeleteNews";
import { GetSingleNewsService } from "@/services/news/GetSingleNews";

function AdminNews() {
  const dispatch = useDispatch();
  const [lang, setLang] = useState("ru");
  const [modal, setModal] = useState(false);
  const newsList = useSelector((state) => state?.news?.news);
  const [mode, setMode] = useState("create");
  const [defaultData, setDefaultData] = useState(null);
  const reverseList = [...newsList].reverse();

  const changeLang = (e) => {
    setLang(e.target.value);
  };
  const addNews = () => {
    setModal(true);
    setMode("create");
    setDefaultData(null);
  };
  const changeNews = async (id) => {
    const en = await dispatch(GetSingleNewsService({ id: id, lang: "en" }));
    const ru = await dispatch(GetSingleNewsService({ id: id, lang: "ru" }));
    const data = {
      id: en?.payload?.id,
      eng_title: en?.payload?.title,
      eng_text: en?.payload?.content,
      rus_title: ru?.payload?.title,
      rus_text: ru?.payload?.content,
      images: en?.payload?.images,
    };
    setDefaultData(data);
    setModal(true);
    setMode("change");
  };

  const deleteNews = (id) => {
    dispatch(DeleteNewsService(id));
  };

  const columns = [
    {
      field: "title",
      headerName: "Заголовок",
      minWidth: 300,
      maxWidth: 700,
    },
    { field: "content", headerName: "Текст", minWidth: 500 },
    {
      field: "images",
      headerName: "Картинки",
      minWidth: 450,
      renderCell: (params) => (
        <div className={cls.Images}>
          {params.value?.map((item) => (
            <img key={item?.image} src={item?.image} alt="" />
          ))}
        </div>
      ),
    },
    {
      field: "id",
      headerName: "Действие",
      height: 100,
      minWidth: 220,
      renderCell: (params) => (
        <div className={cls.actions} key={params?.value}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => changeNews(params?.id)}
          >
            Изменить
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => deleteNews(params?.value)}
          >
            Удалить
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(GetNewsService(lang));
  }, [lang]);

  useEffect(() => {
    setModal(false);
  }, [newsList]);

  return (
    <>
      <div className={cls.Header}>
        <h3>Новости</h3>
        <div className={cls.NewsAddButton}>
          <h4>Язык новостей: </h4>
          <Select
            id="language"
            defaultValue={lang}
            onChange={(e) => changeLang(e)}
            size="small"
          >
            <MenuItem value={"ru"}>Русский</MenuItem>
            <MenuItem value={"en"}>Английский</MenuItem>
          </Select>
          <Button variant="contained" onClick={addNews}>
            Добавить новость
          </Button>
        </div>
      </div>
      <TableComponent
        TableClass={cls.NewsTable}
        columns={columns}
        rows={reverseList}
        pageSize={[10, 25, 50, 100]}
        getRowHeight={() => "auto"}
      />
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        modalClass={cls.Modal}
      >
        <AddNewsForm mode={mode} defaultData={defaultData} />
      </Modal>
    </>
  );
}

export default AdminNews;
