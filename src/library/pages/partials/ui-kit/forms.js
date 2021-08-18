import React from "react";
import {Form, Formik} from "formik";

import {AttrType, DataAttrColorTheme} from "../../../../common/services/consts/common";
import FormikControl, {ControlType} from "../../../../common/components/common/forms/FormikControl";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";


const Forms = () => {

  return (
    <section className="components-library__element">
      <h3 className="components-library__heading h3">
        Forms
      </h3>

      {/* ==========================================================================
         Form
         ========================================================================== */}
      <Formik
        initialValues={{
          inputText: ``,
          mask: ``,
          textarea: ``,
          checkbox: false,
          checkboxGroup: [`2`],
          radio: `male`,
          radioGroup: `1`,
          select: ``,
          date: ``,
          time: ``,
          inputSeparator1: ``,
          inputSeparator2: ``,
          toggle: true,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.inputText) errors.inputText = 'Поле обязательно для заполнения';
          if (!values.mask) errors.mask = 'Поле обязательно для заполнения';
          if (values.mask.includes(`_`)) errors.mask = 'Поле некорректно заполнено';
          if (!values.textarea) errors.textarea = 'Поле обязательно для заполнения';
          if (!values.checkbox) errors.checkbox = 'Не установлен чекбокс';
          if (values.checkboxGroup?.length < 2) errors.checkboxGroup = 'Не установлено 2 чекбокса  из группы';
          if (!Boolean(values.radio)) errors.radio = 'Не установлена радиокнопка';
          if (values.radioGroup === `1`) errors.radioGroup = 'Не допустимое значение группы';
          if (!values.select) errors.select = 'Не выбрано значение';
          if (!values.date) errors.date = 'Не выбрано значение';
          if (!values.time) errors.time = 'Не выбрано значение';
          if (!values.inputSeparator1) errors.inputSeparator1 = 'Поле обязательно для заполнения';
          if (!values.inputSeparator2) errors.inputSeparator2 = 'Поле обязательно для заполнения';
          if (!values.toggle) errors.toggle = 'Не установлен переключатель';
          return errors;
        }}
        //validateOnBlur={false}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({values, ...props}) => {
          return (
          <Form>
            <table className="components-library__type">
              <thead>
              <tr>
                <th className="name">Formik</th>
                <th colSpan="3"><small>Color theme: default</small></th>
              </tr>
              <tr>
                <th className="name"></th>
                <th><small>L</small></th>
                <th><small>M</small></th>
                <th><small>S</small></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                {/*L*/}
                <td className="name">input</td>
                <td>
                  <FormikControl control={ControlType.INPUT}
                                 name="inputText"
                                 label="Текст"
                  />
                </td>
                {/*M*/}
                <td>
                  <div className="wrap"/>
                </td>
                {/*S*/}
                <td>
                  <div className="wrap"/>
                </td>
              </tr>
              <tr>
                {/*L*/}
                <td className="name">input mask</td>
                <td>
                  <FormikControl control={ControlType.INPUT_MASK}
                                 name="mask"
                                 label="Маска"
                                 mask="999-999/999-999"
                                 placeholder="___-___/___-___"

                  />
                </td>
                {/*M*/}
                <td>
                  <div className="wrap"/>
                </td>
                {/*S*/}
                <td>
                  <div className="wrap"/>
                </td>
              </tr>
              <tr>
                {/*L*/}
                <td className="name">textarea</td>
                <td>
                  <FormikControl control={ControlType.TEXTAREA}
                                 name="textarea"
                                 label="Комментарий"
                                 placeholder="Оставьте отзыв"

                  />
                </td>
                {/*M*/}
                <td>
                  <div className="wrap"/>
                </td>
                {/*S*/}
                <td>
                  <div className="wrap"/>
                </td>
              </tr>
              <tr>
                {/*L*/}
                <td className="name">checkbox</td>
                <td>
                  <FormikControl control={ControlType.CHECKBOX}
                                 name="checkbox"
                                 label="Чекбокс"
                  />
                </td>
                {/*M*/}
                <td>
                  <div className="wrap"/>
                </td>
                {/*S*/}
                <td>
                  <div className="wrap"/>
                </td>
              </tr>
              <tr>
                {/*L*/}
                <td className="name">checkbox group</td>
                <td>
                  <FormikControl control={ControlType.CHECKBOX_GROUP}
                                 name="checkboxGroup"
                                 heading="Группа чекбоксов"
                                 options={[
                                   {label: `Checkbox 1`, value: `1`},
                                   {label: `Checkbox 2`, value: `2`},
                                   {label: `Checkbox 3`, value: `3`},
                                 ]}
                  />
                </td>
                {/*M*/}
                <td>
                  <div className="wrap"/>
                </td>
                {/*S*/}
                <td>
                  <div className="wrap"/>
                </td>
              </tr>
              <tr>
                {/*L*/}
                <td className="name">radio button</td>
                <td>
                  <FormikControl control={ControlType.RADIO}
                                 name="radio"
                                 label="Радио кнопка"
                  />
                </td>
                {/*M*/}
                <td>
                  <div className="wrap"/>
                </td>
                {/*S*/}
                <td>
                  <div className="wrap"/>
                </td>
              </tr>
              <tr>
                {/*L*/}
                <td className="name">checkbox group</td>
                <td>
                  <FormikControl control={ControlType.RADIO_GROUP}
                                 name="radioGroup"
                                 heading="Группа радиокнопок"
                                 options={[
                                   {label: `Radio 1`, value: `1`, state: `disabled`},
                                   {label: `Radio 2`, value: `2`},
                                   {label: `Radio 3`, value: `3`},
                                 ]}
                  />
                </td>
                {/*M*/}
                <td>
                  <div className="wrap"/>
                </td>
                {/*S*/}
                <td>
                  <div className="wrap"/>
                </td>
              </tr>
              <tr>
                {/*L*/}
                <td className="name">select</td>
                <td>
                  <FormikControl control={ControlType.SELECT}
                                 isForm
                                 name="select"
                                 label="Селект"
                                 options={[
                                   {value: `1`, label: `опция 1`},
                                   {value: `2`, label: `опция 2`},
                                   {value: `3`, label: `опция 3`},
                                   {value: `4`, label: `опция 4`},
                                   {value: `5`, label: `опция 5`},
                                   {value: `6`, label: `опция 6`},
                                 ]}
                  />
                </td>
                {/*M*/}
                <td>
                  <div className="wrap"/>
                </td>
                {/*S*/}
                <td>
                  <div className="wrap"/>
                </td>
              </tr>
              <tr>
                {/*L*/}
                <td className="name">date picker</td>
                <td>
                  <FormikControl control={ControlType.DATE}
                                 name="date"
                                 label="Дата"
                  />
                </td>
                {/*M*/}
                <td>
                  <div className="wrap"/>
                </td>
                {/*S*/}
                <td>
                  <div className="wrap"/>
                </td>
              </tr>
              <tr>
                {/*L*/}
                <td className="name">time picker</td>
                <td>
                  <FormikControl control={ControlType.TIME}
                                 name="time"
                                 label="Время"
                  />
                </td>
                {/*M*/}
                <td>
                  <div className="wrap"/>
                </td>
                {/*S*/}
                <td>
                  <div className="wrap"/>
                </td>
              </tr>
              <tr>
                {/*L*/}
                <td className="name">field separator</td>
                <td>
                  <FormikControl control={ControlType.FIELD_SEPARATOR}
                                 heading={"Группа полей с разделителем"}
                                 formErrors={props.errors}
                                 formTouched={props.touched}
                  >
                    <FormikControl control={ControlType.INPUT}
                                   name="inputSeparator1"
                    />
                    <FormikControl control={ControlType.INPUT}
                                   name="inputSeparator2"
                    />
                  </FormikControl>

                </td>
                {/*M*/}
                <td>
                  <div className="wrap"/>
                </td>
                {/*S*/}
                <td>
                  <div className="wrap"/>
                </td>
              </tr>
              <tr>
                {/*L*/}
                <td className="name">toggle</td>
                <td>
                  <FormikControl control={ControlType.TOGGLE}
                                 name="toggle"
                                 label="переключатель"

                  />
                </td>
                {/*M*/}
                <td>
                  <div className="wrap"/>
                </td>
                {/*S*/}
                <td>
                  <div className="wrap"/>
                </td>
              </tr>

              <tr>
                <td className="name">submit</td>
                <td>
                  <div className="wrap">
                    <ButtonPrimary type={AttrType.SUBMIT}
                                   text="Отправить"
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                    />
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </Form>
          )}}
      </Formik>
    </section>
  )
};

export default Forms;
