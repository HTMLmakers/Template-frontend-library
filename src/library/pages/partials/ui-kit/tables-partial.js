import React, { useState } from "react";
import TablePrimary, {
  TablePrimaryCell,
} from "../../../../common/components/ui-kit/tables/TablePrimary/TablePrimary";
import TableSecondary, {
  SecondaryTableHeading,
} from "../../../../common/components/ui-kit/tables/TableSecondary/TableSecondary";
import {
  DataAttrColorTheme,
  DataAttrSize,
  MessageType as NotificationType,
} from "../../../../common/services/consts/common";

import LinkPrimary from "../../../../common/components/ui-kit/links/LinkPrimary/LinkPrimary";
import NotificationPrimary from "../../../../common/components/ui-kit/notifications/NotificationPrimary/NotificationPrimary";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import {ReactComponent as IconEdit16} from "../../../../common/assets/img/icons/svg/16/icon-edit-16.svg";
import {ReactComponent as IconPlus16} from "../../../../common/assets/img/icons/svg/16/icon-plus-16.svg";


const TablesPartial = () => {

  const primaryTableColumns = [
    { Header: "ID", accessor: "col1", className: ["custom-class"] },
    {
      Header: "Название",
      accessor: "col2",
    },
    { Header: "Кол-во", accessor: "col3" },
    { Header: "Сумма", accessor: "col4" },
  ];

  const [primaryTableSampleData, setPrimaryTableSampleData] = useState([
    {
      col1: "Значение 1 колонки 1",
      col2: "Значение 1 колонки 2",
      col3: "Значение 1 колонки 3",
      col4: "Значение 1 колонки 4",
    },
    {
      col1: "Значение 2 колонки 1",
      col2: <>
        <LinkPrimary
          text="Link"
          size={DataAttrSize.L}
          colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
        />
          <LinkPrimary
          text="Link"
          size={DataAttrSize.L}
          colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
        />
        </>,
      col3: "Значение 2 колонки 3",
      col4: "Значение 2 колонки 4",
    },
    {
      col1: "Значение 3 колонки 1",
      col2: "Значение 3 колонки 2",
      col3: <TablePrimaryCell caption={"Заголовок"} description={"Описание"} />,
      col4: "Значение 3 колонки 4",
    },
  ]);


  const [sortCol, setSortCol] = useState("col3");


  let secondaryTableColumns = [
    {
      accessor: "col1",
      className: ["table-secondary__name"],
    },
    {
      accessor: "col2",
      className: ["table-secondary__name"],
    },
    { accessor: "col3", className: ["table-secondary__name"] },
    { accessor: "col4", className: ["table-secondary__name"] },
  ];
  const [secondaryTableSampleData, setSecondaryTableSampleData] = useState([
    {
      col1: "Значение 2 колонки 1",
      col2: "Значение 2 колонки 2",
      col3: (
        <LinkPrimary
          text="Link"
          size={DataAttrSize.L}
          colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
        />
      ),
      col4: "Значение 2 колонки 4",
    },
    {
      col1: "Значение 3 колонки 1",
      col2: "Значение 3 колонки 2",
      col3: <TablePrimaryCell caption={"Заголовок"} description={"Описание"} />,
      col4: "Гначение 3 колонки 4",
    },
  ]);
  return (
    <section className="ui-kit-library__element tables">
      <h2 className="ui-kit-library__elem ent-heading">Tables</h2>
      <button onClick={() => setSortCol("col4")}>Тест сортировки</button>
      <button
        onClick={() => {
          setPrimaryTableSampleData((prevState) => [
            ...prevState,
            {
              col1: "Значение 4 колонки 1",
              col2: (
                <LinkPrimary
                  text="Link"
                  size={DataAttrSize.L}
                  colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                />
              ),
              col3: "Значение 4 колонки 3",
              col4: "Значение 4 колонки 4",
            },
            {
              col1: "Значение 5 колонки 1",
              col2: "Значение 5 колонки 2",
              col3: (
                <TablePrimaryCell
                  caption={"Заголовок"}
                  description={"Описание"}
                />
              ),
              col4: "Значение 5 колонки 4",
            },
          ]);
        }}
      >
        Тест подгрузки данных
      </button>
      <TablePrimary
        withCheckboxes={true}
        checkboxHandle={(values) => console.log(values)}
        columns={primaryTableColumns}
        data={primaryTableSampleData}
        sortColumn={sortCol}
        sortDirection={"desc"}
      />

      <br />
      <br />
      <hr />
      <br />
      <br />

      <TableSecondary
        header={
          <SecondaryTableHeading
            header={"Заголовок"}
            description={"Какое то описание"}
            placeAdditional={
              <NotificationPrimary
                text="Внимание"
                type={NotificationType.WARNING}
              />
            }
            placeControls={
              <>
                <LinkPrimary
                  text="Изменить"
                  size={DataAttrSize.L}
                  handleClick={() => `клик`}
                  colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                  placeBefore={
                    <Icon size={DataAttrSize.S} icon={<IconEdit16 />} />
                  }
                />

                <LinkPrimary
                  text="Добавить"
                  size={DataAttrSize.L}
                  handleClick={() => `клик`}
                  colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                  placeBefore={
                    <Icon size={DataAttrSize.S} icon={<IconPlus16 />} />
                  }
                />
              </>
            }
            colspan={4}
          />
        }
        columns={secondaryTableColumns}
        data={secondaryTableSampleData}
        sortColumn={sortCol}
        sortDirection={"desc"}
      />
    </section>
  );
};

export default TablesPartial;
