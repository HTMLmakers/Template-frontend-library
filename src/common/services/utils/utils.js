import { useRowSelect, useSortBy } from "react-table";
import Checkbox from "../../components/common/forms/fields/form-fields/Checkbox/Checkbox";
import {DateTime} from "luxon";

export const replaceTag = (defaultTagName, customTagName) => {
  return customTagName || defaultTagName;
};

export const randomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

/**
 * Определяет тип пропса для тега
 * @param {string} tagName - имя тега
 * @param {string} type - наименование типа кнопки
 * @param {string} href - ссылка
 * @returns {object} - обьект с нужным пропсом для переданного тега
 */
export const identifyTypeTagProps = (tagName, type, href) => {
  const isButton = tagName === `button`;
  const isLink = tagName === `a`;
  if (isButton) return {type}
  if (isLink && href) return {href}
  return {}
};

export const downloadFile = (fullUrl) => {
  const link = document.createElement("a");
  link.href = { fullUrl };
  document.body.appendChild(link);
  if (fullUrl.includes(".pdf")) link.target = `_blank`;
  link.click();
  document.body.removeChild(link);
};

export const lastNameAndInitials = (person) => {
  const lastName = person?.lastName ? person?.lastName : null;
  const firstNameChar = person?.firstName ? person?.firstName[0].toUpperCase() : null;
  const patronimicChar = person?.patronimic ? person?.patronimic[0].toUpperCase() : null;

  return `${lastName ? lastName : ``} ${firstNameChar ? `${firstNameChar}.` : ``}${patronimicChar ? `${patronimicChar}.` : ``}`
};

export const generateParamsForReactTable = (props) => {
  const {
    columns,
    data,
    withCheckboxes,
    sortColumn,
    sortDirection
  } = props;
  let params = [
    {
      columns,
      data,
      initialState:
        sortColumn && sortDirection
          ? {
              sortBy: [
                {
                  id: sortColumn,
                  desc: sortDirection === "desc",
                },
              ],
            }
          : {},
    },
    useSortBy
  ];
  if (withCheckboxes) {
    params.push(useRowSelect);
    params.push((hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox />//<input {...getToggleAllRowsSelectedProps()} type="checkbox" />
          ),
          Cell: ({ row }) => (

            <Checkbox />//<input {...row.getToggleRowSelectedProps()} type="checkbox" />
          ),
        },
        ...columns,
      ]);
    });
  }
  return params;
}

/**
 * Объединяет несколько объектов в один новый
 * @param {...Object} rest - объекты
 * @returns {Object}
 */
export const extendObject = (...rest) => {
  return Object.assign({}, ...rest);
};

/**
 * Заполняет свойства объекта на основании другого объекта.
 * @param {Object} target - объект образец
 * @param {Object} donor - объект из которого взять свойства
 * @returns {Object} - возвращает новый объект с заполненными свойствами
 */
export const fillObjectBasedOn = (target, donor) => {
  const pairs = Object.keys(target).map((key) => ({ [key]: donor[key] }));
  return extendObject(...pairs);
};

export const ReplaceParameterInUrl = {
  id: (url, value) => {
    return url.replace(`:id`, value);
  },
  pagination: (url, page, perPage = 50) => {
    return url.replace(`:pagination`, `?page=${page}&perPage=${perPage}`);
  },
};

/**
 * Возвращает элементы из targetArray, которых нет в comparableArray.
 * Работает только с массивами объектов.
 * @param {Array} targetArray - Массив ИЗ которого берём значения
 * @param {Array} comparableArray - Массив В котором проверяем уникальность
 * @param {string} field - Имя реквизита по которому сравнивать
 * @returns {Array} - Результирующий массив
 */
export const getUniqueArrayObjects = (targetArray, comparableArray, field) => {
  return targetArray.filter(
    (target) =>
      !comparableArray.some((additional) => additional[field] === target[field])
  );
};

export const replaceArrayElementWithId = (array, element) => {
  const oldMeetingIndex = array.findIndex((it) => it.id === element.id);
  return [
    ...array.slice(0, oldMeetingIndex),
    element,
    ...array.slice(oldMeetingIndex + 1),
  ];
};

export const deleteArrayElementById = (array, id) => {
  const deletedMeetingIndex = array.findIndex((it) => it.id === id);
  return [
    ...array.slice(0, deletedMeetingIndex),
    ...array.slice(deletedMeetingIndex + 1),
  ];
};

/**
 * Возвращает элементы из targetArray, которых нет в comparableArray.
 * Работает только с массивами объектов.
 * @param {Array} targetArray - Массив ИЗ которого берём значения
 * @param {Array} comparableArray - Массив В котором проверяем уникальность
 * @param {Array} fields - Массив имен реквизитов по которомым сравнивать
 * @returns {Array} - Результирующий массив
 */
export const getUniqueArrayObjectsMoreFields = (
  targetArray,
  comparableArray,
  fields
) => {
  return targetArray.filter(
    (target) =>
      !comparableArray.some((additional) =>
        fields.every((field) => additional[field] === target[field])
      )
  );
};

/**
 * Делает первый символ строки заглавным
 * @param {string} str - строка
 * @returns {string} - возвращаюет строку с заглавным первым символом
 */
export const transformToFirstCapitalSymbol = (str) => {
  if (str) {
    const lowerStr = str.toLowerCase();
    return `${lowerStr[0].toUpperCase()}${lowerStr.slice(1)}`;
  }
  return ``;
}

export const moneyFormat = (number) => {
  return number?.toLocaleString().replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
}

export const dateParse = (dateString, format = `dd.MM.yy`) => {
  return DateTime.fromISO(dateString, {zone: 'Europe/Moscow', locale: 'ru'}).toFormat(format)
}

