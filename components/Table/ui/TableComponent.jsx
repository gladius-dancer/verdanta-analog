import { DataGrid } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import cls from "./TableComponent.module.css";
import cn from "classnames";

export const TableComponent = ({
  TableClass,
  columns,
  rows,
  pageSize,
  selection,
  getRowHeight,
}) => {
  const { t } = useTranslation();

  return (
    <div className={cn(cls.Table, TableClass)}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowHeight={getRowHeight}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={pageSize}
        checkboxSelection={selection}
        disableRowSelectionOnClick
      />
    </div>
  );
};
