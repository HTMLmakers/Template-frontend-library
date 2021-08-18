import React, {useState} from "react";

import {
  DataAttrColorTheme,
  DataAttrSize,
  DataAttrState,
  FormFieldType,
  DataAttrDirection,
  ElementPosition,
} from "../../../../common/services/consts/common";

import InputText from "../../../../common/components/common/forms/fields/form-fields/InputText/InputText";
import InputMask from "../../../../common/components/common/forms/fields/form-fields/InputMask/InputMask";
import Textarea from "../../../../common/components/common/forms/fields/form-fields/Textarea/Textarea";
import DatePicker from "../../../../common/components/common/forms/fields/form-fields/DatePicker/DatePicker";
import Checkbox from "../../../../common/components/common/forms/fields/form-fields/Checkbox/Checkbox";
import CheckboxGroup from "../../../../common/components/common/forms/fields/form-fields/CheckboxGroup/CheckboxGroup";
import RadioButton from "../../../../common/components/common/forms/fields/form-fields/RadioButton/RadioButton";
import RadioButtonGroup
  from "../../../../common/components/common/forms/fields/form-fields/RadioButtonGroup/RadioButtonGroup";
import Toggle from "../../../../common/components/common/forms/fields/form-fields/Toggle/Toggle";
import ToggleGroup from "../../../../common/components/common/forms/fields/form-fields/ToggleGroup/RadioButtonGroup";
import Label from "../../../../common/components/common/forms/fields/Label/Label";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import Desc from "../../../../common/components/ui-kit/texts/Desc/Desc";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";

import {ReactComponent as IconAlertCircle16} from "../../../../common/assets/img/icons/svg/16/icon-alert-circle-16.svg";
import {ReactComponent as IconClock24} from "../../../../common/assets/img/icons/svg/24/icon-clock-24.svg";
import TimePicker from "../../../../common/components/common/forms/fields/form-fields/TimePicker/TimePicker";
import Select from "../../../../common/components/common/forms/fields/form-fields/Select/Select";
import {ReactComponent as IconUser24} from "../../../../common/assets/img/icons/svg/24/icon-user-24.svg";


const FormFieldsPartial = () => {
  const [phone, setPhone] = useState(``);
  const [number, setNumber] = useState(``);

  const [date, setDate] = useState(``);
  const [time, setTime] = useState(``);

  const [selectedOption, setSelectedOption] = useState(``);
  const [selectedOption2, setSelectedOption2] = useState(``);

  return (
    <section className="components-library__element form-fields-library">
      <h3 className="components-library__heading h3">
        Form Fields
      </h3>

      {/* ==========================================================================
         InputText (input)
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">InputText</th>
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

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <InputText size={DataAttrSize.L} />

                <InputText size={DataAttrSize.L}
                           placeBefore={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           placeAfter={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           customTagName="label"
                />

                <InputText size={DataAttrSize.L}
                           placeAfter={<ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY} />}
                />

                <InputText size={DataAttrSize.L}
                           placeAfter={
                             <>
                               <Icon size={DataAttrSize.S} icon={<IconAlertCircle16 />} />
                               <Desc size={DataAttrSize.XS} text="Какой-то текст" />
                             </>
                           }
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <InputText size={DataAttrSize.M}
                           value="Заполненное поле"
                />

                <InputText size={DataAttrSize.M}
                           placeBefore={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           placeAfter={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           customTagName="label"
                           value="Заполненное поле"
                />

                <InputText size={DataAttrSize.M}
                           placeAfter={<ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY} />}
                           value="Заполненное поле"
                />

                <InputText size={DataAttrSize.M}
                           placeAfter={
                             <>
                               <Icon size={DataAttrSize.S} icon={<IconAlertCircle16 />} />
                               <Desc size={DataAttrSize.XS} text="Какой-то текст" />
                             </>
                           }
                           value="Заполненное поле"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Focus ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">Focus</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <InputText size={DataAttrSize.L}
                           state={DataAttrState.FOCUS} />

                <InputText size={DataAttrSize.L}
                           placeBefore={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           placeAfter={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           customTagName="label"
                           state={DataAttrState.FOCUS}
                />

                <InputText size={DataAttrSize.L}
                           placeAfter={<ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY} />}
                           state={DataAttrState.FOCUS}
                />

                <InputText size={DataAttrSize.L}
                           placeAfter={
                             <>
                               <Icon size={DataAttrSize.S} icon={<IconAlertCircle16 />} />
                               <Desc size={DataAttrSize.XS} text="Какой-то текст" />
                             </>
                           }
                           state={DataAttrState.FOCUS}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <InputText size={DataAttrSize.M}
                           value="Заполненное поле"
                           state={DataAttrState.FOCUS} />

                <InputText size={DataAttrSize.M}
                           placeBefore={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           placeAfter={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           customTagName="label"
                           value="Заполненное поле"
                           state={DataAttrState.FOCUS}
                />

                <InputText size={DataAttrSize.M}
                           placeAfter={<ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY} />}
                           value="Заполненное поле"
                           state={DataAttrState.FOCUS}
                />

                <InputText size={DataAttrSize.M}
                           placeAfter={
                             <>
                               <Icon size={DataAttrSize.S} icon={<IconAlertCircle16 />} />
                               <Desc size={DataAttrSize.XS} text="Какой-то текст" />
                             </>
                           }
                           value="Заполненное поле"
                           state={DataAttrState.FOCUS}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <InputText size={DataAttrSize.L}
                           state={DataAttrState.DISABLED} />

                <InputText size={DataAttrSize.L}
                           placeBefore={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           placeAfter={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           customTagName="label"
                           state={DataAttrState.DISABLED}
                />

                <InputText size={DataAttrSize.L}
                           placeAfter={<ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY} />}
                           state={DataAttrState.DISABLED}
                />

                <InputText size={DataAttrSize.L}
                           placeAfter={
                             <>
                               <Icon size={DataAttrSize.S} icon={<IconAlertCircle16 />} />
                               <Desc size={DataAttrSize.XS} text="Какой-то текст" />
                             </>
                           }
                           state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <InputText size={DataAttrSize.M}
                           value="Заполненное поле"
                           state={DataAttrState.DISABLED} />

                <InputText size={DataAttrSize.M}
                           placeBefore={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           placeAfter={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           customTagName="label"
                           value="Заполненное поле"
                           state={DataAttrState.DISABLED}
                />

                <InputText size={DataAttrSize.M}
                           placeAfter={<ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY} />}
                           value="Заполненное поле"
                           state={DataAttrState.DISABLED}
                />

                <InputText size={DataAttrSize.M}
                           placeAfter={
                             <>
                               <Icon size={DataAttrSize.S} icon={<IconAlertCircle16 />} />
                               <Desc size={DataAttrSize.XS} text="Какой-то текст" />
                             </>
                           }
                           value="Заполненное поле"
                           state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <InputText size={DataAttrSize.L} />

                <InputText size={DataAttrSize.L}
                           placeBefore={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           placeAfter={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           customTagName="label"
                />

                <InputText size={DataAttrSize.L}
                           placeAfter={<ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY} />}
                />

                <InputText size={DataAttrSize.L}
                           placeAfter={
                             <>
                               <Icon size={DataAttrSize.S} icon={<IconAlertCircle16 />} />
                               <Desc size={DataAttrSize.XS} text="Какой-то текст" />
                             </>
                           }
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <InputText size={DataAttrSize.M}
                           value="Заполненное поле"
                />

                <InputText size={DataAttrSize.M}
                           placeBefore={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           placeAfter={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           customTagName="label"
                           value="Заполненное поле"
                />

                <InputText size={DataAttrSize.M}
                           placeAfter={<ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY} />}
                           value="Заполненное поле"
                />

                <InputText size={DataAttrSize.M}
                           placeAfter={
                             <>
                               <Icon size={DataAttrSize.S} icon={<IconAlertCircle16 />} />
                               <Desc size={DataAttrSize.XS} text="Какой-то текст" />
                             </>
                           }
                           value="Заполненное поле"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>


        {/* Color theme: opacity
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: opacity</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <InputText size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           value="Заполненное поле"
                           readOnly
                />

                <InputText size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           placeBefore={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           placeAfter={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           value="Заполненное поле"
                           readOnly
                />

                <InputText size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           placeAfter={<ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY} />}
                           value="Заполненное поле"
                           readOnly
                />

                <InputText size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           placeAfter={
                             <>
                               <Icon size={DataAttrSize.S} icon={<IconAlertCircle16 />} />
                               <Desc size={DataAttrSize.XS} text="Какой-то текст" />
                             </>
                           }
                           value="Заполненное поле"
                           readOnly
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <InputText size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           value="Заполненное поле"
                           readOnly
                />

                <InputText size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           placeBefore={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           placeAfter={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           value="Заполненное поле"
                           readOnly
                />

                <InputText size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           placeAfter={<ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY} />}
                           value="Заполненное поле"
                           readOnly
                />

                <InputText size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           placeAfter={
                             <>
                               <Icon size={DataAttrSize.S} icon={<IconAlertCircle16 />} />
                               <Desc size={DataAttrSize.XS} text="Какой-то текст" />
                             </>
                           }
                           value="Заполненное поле"
                           readOnly
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <InputText size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           value="Заполненное поле"
                           readOnly
                           state={DataAttrState.DISABLED}
                />

                <InputText size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           placeBefore={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           placeAfter={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           value="Заполненное поле"
                           readOnly
                           state={DataAttrState.DISABLED}
                />

                <InputText size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           placeAfter={<ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY} />}
                           value="Заполненное поле"
                           readOnly
                           state={DataAttrState.DISABLED}
                />

                <InputText size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           placeAfter={
                             <>
                               <Icon size={DataAttrSize.S} icon={<IconAlertCircle16 />} />
                               <Desc size={DataAttrSize.XS} text="Какой-то текст" />
                             </>
                           }
                           value="Заполненное поле"
                           readOnly
                           state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <InputText size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           value="Заполненное поле"
                           readOnly
                           state={DataAttrState.DISABLED}
                />

                <InputText size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           placeBefore={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           placeAfter={<Icon size={DataAttrSize.M} icon={<IconClock24 />} />}
                           value="Заполненное поле"
                           readOnly
                           state={DataAttrState.DISABLED}
                />

                <InputText size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           placeAfter={<ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY} />}
                           value="Заполненное поле"
                           readOnly
                           state={DataAttrState.DISABLED}
                />

                <InputText size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           placeAfter={
                             <>
                               <Icon size={DataAttrSize.S} icon={<IconAlertCircle16 />} />
                               <Desc size={DataAttrSize.XS} text="Какой-то текст" />
                             </>
                           }
                           value="Заполненное поле"
                           readOnly
                           state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
       InputMask (input)
       ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: default
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name">InputMask</th>
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

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <InputMask size={DataAttrSize.L}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+7 (___) ___-__-__"
                           value={phone}
                />

                <InputMask size={DataAttrSize.L}
                           onChange={(e) => setNumber(e.target.value)}
                           mask="9999 / 9999 / 9999 / 9999"
                           placeholder="____ / ____ / ____ / ____"
                           value={number}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <InputMask size={DataAttrSize.M}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+7 (___) ___-__-__"
                           value="+7 (222) 333-44-55"
                />

                <InputMask size={DataAttrSize.M}
                           onChange={(e) => setNumber(e.target.value)}
                           mask="9999 / 9999 / 9999 / 9999"
                           placeholder="____ / ____ / ____ / ____"
                           value="9999 / 9999 / 9999 / 9999"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">



              </div>
            </td>
          </tr>

          {/*Focus ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">Focus</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <InputMask size={DataAttrSize.L}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+7 (___) ___-__-__"
                           state={DataAttrState.FOCUS}
                           value={phone}
                  />

                <InputMask size={DataAttrSize.L}
                           onChange={(e) => setNumber(e.target.value)}
                           mask="9999 / 9999 / 9999 / 9999"
                           placeholder="____ / ____ / ____ / ____"
                           state={DataAttrState.FOCUS}
                           value={number}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <InputMask size={DataAttrSize.M}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+7 (___) ___-__-__"
                           value="+7 (222) 333-44-55"
                           state={DataAttrState.FOCUS}
                />

                <InputMask size={DataAttrSize.M}
                           onChange={(e) => setNumber(e.target.value)}
                           mask="9999 / 9999 / 9999 / 9999"
                           placeholder="____ / ____ / ____ / ____"
                           value="9999 / 9999 / 9999 / 9999"
                           state={DataAttrState.FOCUS}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <InputMask size={DataAttrSize.L}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+7 (___) ___-__-__"
                           state={DataAttrState.DISABLED}
                           value={phone}
                />

                <InputMask size={DataAttrSize.L}
                           onChange={(e) => setNumber(e.target.value)}
                           mask="9999 / 9999 / 9999 / 9999"
                           placeholder="____ / ____ / ____ / ____"
                           state={DataAttrState.DISABLED}
                           value={number}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <InputMask size={DataAttrSize.M}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+7 (___) ___-__-__"
                           value="+7 (222) 333-44-55"
                           state={DataAttrState.DISABLED}
                />

                <InputMask size={DataAttrSize.M}
                           onChange={(e) => setNumber(e.target.value)}
                           mask="9999 / 9999 / 9999 / 9999"
                           placeholder="____ / ____ / ____ / ____"
                           value="9999 / 9999 / 9999 / 9999"
                           state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <InputMask size={DataAttrSize.L}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+7 (___) ___-__-__"
                           value={phone}
                />

                <InputMask size={DataAttrSize.L}
                           onChange={(e) => setNumber(e.target.value)}
                           mask="9999 / 9999 / 9999 / 9999"
                           placeholder="____ / ____ / ____ / ____"
                           value={number}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <InputMask size={DataAttrSize.M}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+7 (___) ___-__-__"
                           value="+7 (222) 333-44-55"
                />

                <InputMask size={DataAttrSize.M}
                           onChange={(e) => setNumber(e.target.value)}
                           mask="9999 / 9999 / 9999 / 9999"
                           placeholder="____ / ____ / ____ / ____"
                           value="9999 / 9999 / 9999 / 9999"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: opacity
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: opacity</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <InputMask size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+7 (___) ___-__-__"
                           value={phone}
                />

                <InputMask size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           onChange={(e) => setNumber(e.target.value)}
                           mask="9999 / 9999 / 9999 / 9999"
                           placeholder="____ / ____ / ____ / ____"
                           value={number}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <InputMask size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+7 (___) ___-__-__"
                           value="+7 (222) 333-44-55"
                />

                <InputMask size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           onChange={(e) => setNumber(e.target.value)}
                           mask="9999 / 9999 / 9999 / 9999"
                           placeholder="____ / ____ / ____ / ____"
                           value="9999 / 9999 / 9999 / 9999"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <InputMask size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+7 (___) ___-__-__"
                           state={DataAttrState.DISABLED}
                           value={phone}
                />

                <InputMask size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           onChange={(e) => setNumber(e.target.value)}
                           mask="9999 / 9999 / 9999 / 9999"
                           placeholder="____ / ____ / ____ / ____"
                           state={DataAttrState.DISABLED}
                           value={number}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <InputMask size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+7 (___) ___-__-__"
                           value="+7 (222) 333-44-55"
                           state={DataAttrState.DISABLED}
                />

                <InputMask size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.OPACITY}
                           onChange={(e) => setNumber(e.target.value)}
                           mask="9999 / 9999 / 9999 / 9999"
                           placeholder="____ / ____ / ____ / ____"
                           value="9999 / 9999 / 9999 / 9999"
                           state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         Textarea
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: default
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Textarea</th>
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

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Textarea size={DataAttrSize.L}/>

                <Textarea size={DataAttrSize.L}
                          customHeight="150px"
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Textarea size={DataAttrSize.M}/>

                <Textarea size={DataAttrSize.M}
                          customHeight="150px"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Focus ----------*/}
          <tr>
            <td className="name">Focus</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Textarea size={DataAttrSize.L}
                          state={DataAttrState.FOCUS}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Textarea size={DataAttrSize.M}
                          state={DataAttrState.FOCUS}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Textarea size={DataAttrSize.L}
                          state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Textarea size={DataAttrSize.M}
                          state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Textarea size={DataAttrSize.L} />

                <Textarea size={DataAttrSize.L}
                          customHeight="150px"
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Textarea size={DataAttrSize.M} />

                <Textarea size={DataAttrSize.M}
                          customHeight="150px"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: opacity
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: opacity</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Textarea size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.OPACITY}
                          customHeight="80px"
                          value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aspernatur, assumenda atque autem dicta eaque facere fuga harum hic laboriosam magnam, qui quos tempore temporibus totam veritatis. Alias, eum."
                          readOnly
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Textarea size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.OPACITY}
                          customHeight="80px"
                          value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aspernatur, assumenda atque autem dicta eaque facere fuga harum hic laboriosam magnam, qui quos tempore temporibus totam veritatis. Alias, eum."
                          state={DataAttrState.DISABLED}
                          readOnly
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         DatePicker
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: default
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name">DatePicker</th>
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

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <DatePicker size={DataAttrSize.L}
                            value={date}
                            onChange={(date)=> setDate(date)}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <DatePicker size={DataAttrSize.M}
                            value={date}
                            onChange={(date)=> setDate(date)}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Focus ----------*/}
          <tr>
            <td className="name">Focus</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <DatePicker size={DataAttrSize.L}
                            value={date}
                            onChange={(date)=> setDate(date)}
                            state={DataAttrState.FOCUS}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <DatePicker size={DataAttrSize.M}
                            value={date}
                            onChange={(date)=> setDate(date)}
                            state={DataAttrState.FOCUS}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <DatePicker size={DataAttrSize.L}
                            value={date}
                            onChange={(date)=> setDate(date)}
                            state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <DatePicker size={DataAttrSize.M}
                            value={date}
                            onChange={(date)=> setDate(date)}
                            state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <DatePicker size={DataAttrSize.L}
                            value={date}
                            onChange={(date)=> setDate(date)}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <DatePicker size={DataAttrSize.M}
                            value={date}
                            onChange={(date)=> setDate(date)}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         TimePicker
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: default
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name">TimePicker</th>
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

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <TimePicker size={DataAttrSize.L}
                            value={time}
                            onChange={(time)=> setTime(time)}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <TimePicker size={DataAttrSize.M}
                            value={time}
                            onChange={(time)=> setTime(time)}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Focus ----------*/}
          <tr>
            <td className="name">Focus</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <TimePicker size={DataAttrSize.L}
                            value={time}
                            onChange={(time)=> setTime(time)}
                            state={DataAttrState.FOCUS}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <TimePicker size={DataAttrSize.M}
                            value={time}
                            onChange={(time)=> setTime(time)}
                            state={DataAttrState.FOCUS}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <TimePicker size={DataAttrSize.L}
                            value={time}
                            onChange={(time)=> setTime(time)}
                            state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <TimePicker size={DataAttrSize.M}
                            value={time}
                            onChange={(time)=> setTime(time)}
                            state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <TimePicker size={DataAttrSize.L}
                            value={time}
                            onChange={(time)=> setTime(time)}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <TimePicker size={DataAttrSize.M}
                            value={time}
                            onChange={(time)=> setTime(time)}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         Select
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}

        {/*M*/}
        <thead>
          <tr>
            <th className="name">Select</th>
            <th colSpan="1"><small>Color theme: default</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td>

              <Select
                isButtonTrigger
                isSorting
                handleSorting={(sorting) => console.log(sorting, `111`)}
                isSearchable
                options={[
                  {value: `1`, label: `опция 1`},
                  {value: `2`, label: `опция 2`},
                  {value: `3`, label: `опция 3`},
                  {value: `4`, label: `опция 4`},
                  {value: `5`, label: `опция 5`},
                  {value: `6`, label: `опция 6`},
                ]}
                value={selectedOption}
                onChange={setSelectedOption}
              />

            </td>
          </tr>
          <tr>
            <td className="name"></td>
            <td>

              <Select
                triggerText="Выбрано: "
                isButtonTrigger
                isSearchable
                options={[
                  {value: `1`, label: `опция 1`},
                  {value: `2`, label: `опция 2`},
                  {value: `3`, label: `опция 3`},
                  {value: `4`, label: `опция 4`},
                  {value: `5`, label: `опция 5`},
                  {value: `6`, label: `опция 6`},
                ]}
                value={selectedOption2}
                onChange={setSelectedOption2}
                triggerColorTheme={DataAttrColorTheme.RED_PRIMARY}
                triggerPlaceBefore={<Icon size={DataAttrSize.M} icon={<IconUser24 />} handleClick={() => {
                  console.log(`222`)
                }}/>}
              />

            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         Checkbox
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: default
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Checkbox</th>
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

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Checkbox size={DataAttrSize.L} />

                <Checkbox size={DataAttrSize.L}
                          label="Чекбокс с лейблом"
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Checkbox size={DataAttrSize.M}
                          label="Чекбокс с лейблом"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Hover,Focus ----------*/}
          <tr>
            <td className="name">Hover, Focus</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Checkbox size={DataAttrSize.L}
                          state={DataAttrState.HOVER}
                />

                <Checkbox size={DataAttrSize.L}
                          label="Чекбокс с лейблом"
                          state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Checkbox size={DataAttrSize.M}
                          label="Чекбокс с лейблом"
                          state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Checked ----------*/}
          <tr>
            <td className="name">Checked</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Checkbox size={DataAttrSize.L}
                          state={DataAttrState.CHECKED}
                />

                <Checkbox size={DataAttrSize.L}
                          label="Чекбокс с лейблом"
                          state={DataAttrState.CHECKED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Checkbox size={DataAttrSize.L}
                          label="Чекбокс с лейблом"
                          state={DataAttrState.CHECKED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Checkbox size={DataAttrSize.L}
                          state={DataAttrState.DISABLED}
                          checked
                />

                <Checkbox size={DataAttrSize.L}
                          label="Чекбокс с лейблом"
                          state={DataAttrState.DISABLED}
                          checked
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Checkbox size={DataAttrSize.M}
                          label="Чекбокс с лейблом"
                          state={DataAttrState.DISABLED}
                          checked
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Checkbox size={DataAttrSize.L} />

                <Checkbox size={DataAttrSize.L}
                          label="Чекбокс с лейблом"
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Checkbox size={DataAttrSize.L}
                          label="Чекбокс с лейблом"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         CheckboxGroup
         ========================================================================== */}
      <table className="components-library__type">

        {/* Direction: horizontal
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name">CheckboxGroup</th>
            <th colSpan="2"><small>Direction: horizontal</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
          </tr>
        </thead>
        <tbody>

          {/*position LEFT ----------*/}
          <tr>
            <td className="name">position LEFT</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

                <CheckboxGroup size={DataAttrSize.L}
                               name="checkboxGroup"
                               heading="Горизонтальная группа чекбоксов (левое позиционирование)"
                               options={[
                                 {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                                 {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                                 {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                                 {label: `Checkbox 4`, value: `4`, onChange: () => ``,},
                                 {label: `Checkbox 5`, value: `5`, onChange: () => ``,},
                                 {label: `Checkbox 6`, value: `6`, onChange: () => ``,},
                                 {label: `Checkbox 7`, value: `7`, onChange: () => ``,},
                               ]}
                />

            </td>

            {/*M*/}
            <td>

              <CheckboxGroup size={DataAttrSize.M}
                             name="checkboxGroup"
                             heading="Горизонтальная группа чекбоксов (левое позиционирование)"
                             options={[
                               {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                               {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                               {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                               {label: `Checkbox 4`, value: `4`, onChange: () => ``,},
                               {label: `Checkbox 5`, value: `5`, onChange: () => ``,},
                               {label: `Checkbox 6`, value: `6`, onChange: () => ``,},
                               {label: `Checkbox 7`, value: `7`, onChange: () => ``,},
                             ]}
              />

            </td>
          </tr>

          {/*position RIGHT ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position RIGHT</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

                <CheckboxGroup size={DataAttrSize.L}
                               name="checkboxGroup"
                               heading="Горизонтальная группа чекбоксов (правое позиционирование)"
                               options={[
                                 {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                                 {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                                 {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                                 {label: `Checkbox 4`, value: `4`, onChange: () => ``,},
                               ]}
                               groupPosition={ElementPosition.RIGHT}
                />

            </td>

            {/*M*/}
            <td>

              <CheckboxGroup size={DataAttrSize.M}
                             name="checkboxGroup"
                             heading="Горизонтальная группа чекбоксов (правое позиционирование)"
                             options={[
                               {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                               {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                               {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                               {label: `Checkbox 4`, value: `4`, onChange: () => ``,},
                             ]}
                             groupPosition={ElementPosition.RIGHT}
              />

            </td>
          </tr>

          {/*position CENTER ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position CENTER</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <CheckboxGroup size={DataAttrSize.L}
                             name="checkboxGroup"
                             heading="Горизонтальная группа чекбоксов (центральное позиционирование)"
                             options={[
                               {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                               {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                               {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                             ]}
                             groupPosition={ElementPosition.CENTER}
              />

            </td>

            {/*M*/}
            <td>

              <CheckboxGroup size={DataAttrSize.M}
                             name="checkboxGroup"
                             heading="Горизонтальная группа чекбоксов (центральное позиционирование)"
                             options={[
                               {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                               {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                               {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                             ]}
                             groupPosition={ElementPosition.CENTER}
              />

            </td>
          </tr>

          {/*position BETWEEN ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position BETWEEN</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <CheckboxGroup size={DataAttrSize.L}
                             name="checkboxGroup"
                             heading="Горизонтальная группа чекбоксов (растягивание)"
                             options={[
                               {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                               {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                               {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                             ]}
                             groupPosition={ElementPosition.BETWEEN}
              />

            </td>

            {/*M*/}
            <td>

              <CheckboxGroup size={DataAttrSize.M}
                             name="checkboxGroup"
                             heading="Горизонтальная группа чекбоксов (растягивание)"
                             options={[
                               {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                               {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                               {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                             ]}
                             groupPosition={ElementPosition.BETWEEN}
              />

            </td>
          </tr>
        </tbody>

        {/* Direction: vertical
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="2"><small>Direction: vertical</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
          </tr>
        </thead>
        <tbody>

          {/*position LEFT ----------*/}
          <tr>
            <td className="name">position LEFT</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <CheckboxGroup size={DataAttrSize.L}
                             name="checkboxGroup"
                             heading="Вертикальная группа чекбоксов (левое позиционирование)"
                             options={[
                               {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                               {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                               {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                               {label: `Checkbox 4`, value: `4`, onChange: () => ``,},
                             ]}
                             groupDirection={DataAttrDirection.VERTICAL}
              />

            </td>

            {/*M*/}
            <td>

              <CheckboxGroup size={DataAttrSize.M}
                             name="checkboxGroup"
                             heading="Вертикальная группа чекбоксов (левое позиционирование)"
                             options={[
                               {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                               {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                               {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                               {label: `Checkbox 4`, value: `4`, onChange: () => ``,},
                             ]}
                             groupDirection={DataAttrDirection.VERTICAL}
              />

            </td>
          </tr>

          {/*position RIGHT ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position RIGHT</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <CheckboxGroup size={DataAttrSize.L}
                             name="checkboxGroup"
                             heading="Вертикальная группа чекбоксов (правое позиционирование)"
                             options={[
                               {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                               {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                               {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                               {label: `Checkbox 4`, value: `4`, onChange: () => ``,},
                             ]}
                             groupDirection={DataAttrDirection.VERTICAL}
                             groupPosition={ElementPosition.RIGHT}
              />

            </td>

            {/*M*/}
            <td>

              <CheckboxGroup size={DataAttrSize.M}
                             name="checkboxGroup"
                             heading="Вертикальная группа чекбоксов (правое позиционирование)"
                             options={[
                               {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                               {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                               {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                               {label: `Checkbox 4`, value: `4`, onChange: () => ``,},
                             ]}
                             groupDirection={DataAttrDirection.VERTICAL}
                             groupPosition={ElementPosition.RIGHT}
              />

            </td>
          </tr>

          {/*position CENTER ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position CENTER</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <CheckboxGroup size={DataAttrSize.L}
                             name="checkboxGroup"
                             heading="Вертикальная группа чекбоксов (центральное позиционирование)"
                             options={[
                               {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                               {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                               {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                             ]}
                             groupDirection={DataAttrDirection.VERTICAL}
                             groupPosition={ElementPosition.CENTER}
              />

            </td>

            {/*M*/}
            <td>

              <CheckboxGroup size={DataAttrSize.M}
                             name="checkboxGroup"
                             heading="Вертикальная группа чекбоксов (центральное позиционирование)"
                             options={[
                               {label: `Checkbox 1`, value: `1`, onChange: () => ``,},
                               {label: `Checkbox 2`, value: `2`, onChange: () => ``,},
                               {label: `Checkbox 3`, value: `3`, onChange: () => ``,},
                             ]}
                             groupDirection={DataAttrDirection.VERTICAL}
                             groupPosition={ElementPosition.CENTER}
              />

            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         RadioButton
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: default
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name">RadioButton</th>
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

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <RadioButton size={DataAttrSize.L} />

                <RadioButton size={DataAttrSize.L}
                             label="Радиобатон с лейблом"
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <RadioButton size={DataAttrSize.M}
                             label="Радиобатон с лейблом"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Hover,Focus ----------*/}
          <tr>
            <td className="name">Hover, Focus</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <RadioButton size={DataAttrSize.L}
                             state={DataAttrState.HOVER}
                />

                <RadioButton size={DataAttrSize.L}
                             label="Радиобатон с лейблом"
                             state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <RadioButton size={DataAttrSize.M}
                             label="Радиобатон с лейблом"
                             state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Checked ----------*/}
          <tr>
            <td className="name">Checked</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <RadioButton size={DataAttrSize.L}
                             state={DataAttrState.CHECKED}
                />

                <RadioButton size={DataAttrSize.L}
                             label="Радиобатон с лейблом"
                             state={DataAttrState.CHECKED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <RadioButton size={DataAttrSize.M}
                             label="Радиобатон с лейблом"
                             state={DataAttrState.CHECKED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <RadioButton size={DataAttrSize.L}
                             state={DataAttrState.DISABLED}
                             checked
                />

                <RadioButton size={DataAttrSize.L}
                             label="Радиобатон с лейблом"
                             state={DataAttrState.DISABLED}
                             checked
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <RadioButton size={DataAttrSize.M}
                             label="Радиобатон с лейблом"
                             state={DataAttrState.DISABLED}
                             checked
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <RadioButton size={DataAttrSize.L} />

                <RadioButton size={DataAttrSize.L}
                             label="Радиобатон с лейблом"
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <RadioButton size={DataAttrSize.M}
                             label="Радиобатон с лейблом"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         RadioButtonGroup
         ========================================================================== */}
      <table className="components-library__type">

        {/* Direction: horizontal
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name">RadioButtonGroup</th>
            <th colSpan="2"><small>Direction: horizontal</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
          </tr>
        </thead>
        <tbody>

          {/*position LEFT ----------*/}
          <tr>
            <td className="name">position LEFT</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <RadioButtonGroup size={DataAttrSize.L}
                                name="radioButtonGroup"
                                heading="Горизонтальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                  {label: `RadioButton 4`, value: `4`, onChange: () => ``,},
                                  {label: `RadioButton 5`, value: `5`, onChange: () => ``,},
                                  {label: `RadioButton 6`, value: `6`, onChange: () => ``,},
                                  {label: `RadioButton 7`, value: `7`, onChange: () => ``,},
                                ]}
              />

            </td>

            {/*M*/}
            <td>

              <RadioButtonGroup size={DataAttrSize.M}
                                name="radioButtonGroup"
                                heading="Горизонтальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                  {label: `RadioButton 4`, value: `4`, onChange: () => ``,},
                                  {label: `RadioButton 5`, value: `5`, onChange: () => ``,},
                                  {label: `RadioButton 6`, value: `6`, onChange: () => ``,},
                                  {label: `RadioButton 7`, value: `7`, onChange: () => ``,},
                                ]}
              />

            </td>
          </tr>

          {/*position RIGHT ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position RIGHT</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <RadioButtonGroup size={DataAttrSize.L}
                                name="radioButtonGroup"
                                heading="Горизонтальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                  {label: `RadioButton 4`, value: `4`, onChange: () => ``,},
                                ]}
                                groupPosition={ElementPosition.RIGHT}
              />

            </td>

            {/*M*/}
            <td>

              <RadioButtonGroup size={DataAttrSize.M}
                                name="radioButtonGroup"
                                heading="Горизонтальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                  {label: `RadioButton 4`, value: `4`, onChange: () => ``,},
                                ]}
                                groupPosition={ElementPosition.RIGHT}
              />

            </td>
          </tr>

          {/*position CENTER ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position CENTER</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <RadioButtonGroup size={DataAttrSize.L}
                                name="radioButtonGroup"
                                heading="Горизонтальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                ]}
                                groupPosition={ElementPosition.CENTER}
              />

            </td>

            {/*M*/}
            <td>

              <RadioButtonGroup size={DataAttrSize.M}
                                name="radioButtonGroup"
                                heading="Горизонтальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                ]}
                                groupPosition={ElementPosition.CENTER}
              />

            </td>
          </tr>

          {/*position BETWEEN ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position BETWEEN</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <RadioButtonGroup size={DataAttrSize.L}
                                name="radioButtonGroup"
                                heading="Горизонтальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                ]}
                                groupPosition={ElementPosition.BETWEEN}
              />

            </td>

            {/*M*/}
            <td>

              <RadioButtonGroup size={DataAttrSize.M}
                                name="radioButtonGroup"
                                heading="Горизонтальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                ]}
                                groupPosition={ElementPosition.BETWEEN}
              />

            </td>
          </tr>
        </tbody>

        {/* Direction: vertical
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="2"><small>Direction: vertical</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
          </tr>
        </thead>
        <tbody>

          {/*position LEFT ----------*/}
          <tr>
            <td className="name">position LEFT</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <RadioButtonGroup size={DataAttrSize.L}
                                name="radioButtonGroup"
                                heading="Вертикальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                  {label: `RadioButton 4`, value: `4`, onChange: () => ``,},
                                ]}
                                groupDirection={DataAttrDirection.VERTICAL}
              />

            </td>

            {/*M*/}
            <td>

              <RadioButtonGroup size={DataAttrSize.M}
                                name="radioButtonGroup"
                                heading="Вертикальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                  {label: `RadioButton 4`, value: `4`, onChange: () => ``,},
                                ]}
                                groupDirection={DataAttrDirection.VERTICAL}
              />

            </td>
          </tr>

          {/*position RIGHT ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position RIGHT</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <RadioButtonGroup size={DataAttrSize.L}
                                name="radioButtonGroup"
                                heading="Вертикальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                  {label: `RadioButton 4`, value: `4`, onChange: () => ``,},
                                ]}
                                groupDirection={DataAttrDirection.VERTICAL}
                                groupPosition={ElementPosition.RIGHT}
              />

            </td>

            {/*M*/}
            <td>

              <RadioButtonGroup size={DataAttrSize.M}
                                name="radioButtonGroup"
                                heading="Вертикальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                  {label: `RadioButton 4`, value: `4`, onChange: () => ``,},
                                ]}
                                groupDirection={DataAttrDirection.VERTICAL}
                                groupPosition={ElementPosition.RIGHT}
              />

            </td>
          </tr>

          {/*position CENTER ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position CENTER</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <RadioButtonGroup size={DataAttrSize.L}
                                name="radioButtonGroup"
                                heading="Вертикальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                ]}
                                groupDirection={DataAttrDirection.VERTICAL}
                                groupPosition={ElementPosition.CENTER}
              />

            </td>

            {/*M*/}
            <td>

              <RadioButtonGroup size={DataAttrSize.M}
                                name="radioButtonGroup"
                                heading="Вертикальная группа радиокнопок (левое позиционирование)"
                                options={[
                                  {label: `RadioButton 1`, value: `1`, onChange: () => ``,},
                                  {label: `RadioButton 2`, value: `2`, onChange: () => ``,},
                                  {label: `RadioButton 3`, value: `3`, onChange: () => ``,},
                                ]}
                                groupDirection={DataAttrDirection.VERTICAL}
                                groupPosition={ElementPosition.CENTER}
              />

            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         Toggle
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: default
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Toggle</th>
            <th colSpan="3"><small>Color theme: default</small></th>
          </tr>
          <tr>
            <th className="name"><small>checkbox</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Toggle size={DataAttrSize.L} />

                <Toggle size={DataAttrSize.L}
                        label="Переключатель с лейблом"
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Toggle size={DataAttrSize.M}
                        label="Переключатель с лейблом"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Toggle size={DataAttrSize.L}
                        state={DataAttrState.HOVER}
                />

                <Toggle size={DataAttrSize.L}
                        label="Переключатель с лейблом"
                        state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Toggle size={DataAttrSize.M}
                        label="Переключатель с лейблом"
                        state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Checked ----------*/}
          <tr>
            <td className="name">Checked</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Toggle size={DataAttrSize.L}
                        state={DataAttrState.CHECKED}
                />

                <Toggle size={DataAttrSize.L}
                        label="Переключатель с лейблом"
                        state={DataAttrState.CHECKED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Toggle size={DataAttrSize.M}
                        label="Переключатель с лейблом"
                        state={DataAttrState.CHECKED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Toggle size={DataAttrSize.L}
                        state={DataAttrState.DISABLED}
                />

                <Toggle size={DataAttrSize.L}
                        label="Переключатель с лейблом"
                        state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Toggle size={DataAttrSize.M}
                        label="Переключатель с лейблом"
                        state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Toggle size={DataAttrSize.L} />

                <Toggle size={DataAttrSize.L}
                        label="Переключатель с лейблом"
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Toggle size={DataAttrSize.L}
                        label="Переключатель с лейблом"
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: default</small></th>
          </tr>
          <tr>
            <th className="name"><small>radiobutton</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Toggle size={DataAttrSize.L}
                        type={FormFieldType.RADIO}
                />

                <Toggle size={DataAttrSize.L}
                        label="Переключатель с лейблом"
                        type={FormFieldType.RADIO}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Toggle size={DataAttrSize.M}
                        label="Переключатель с лейблом"
                        type={FormFieldType.RADIO}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Toggle size={DataAttrSize.L}
                        type={FormFieldType.RADIO}
                        state={DataAttrState.HOVER}
                />

                <Toggle size={DataAttrSize.L}
                        label="Переключатель с лейблом"
                        type={FormFieldType.RADIO}
                        state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Toggle size={DataAttrSize.M}
                        label="Переключатель с лейблом"
                        type={FormFieldType.RADIO}
                        state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Checked ----------*/}
          <tr>
            <td className="name">Checked</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Toggle size={DataAttrSize.L}
                        type={FormFieldType.RADIO}
                        state={DataAttrState.CHECKED}
                />

                <Toggle size={DataAttrSize.L}
                        label="Переключатель с лейблом"
                        type={FormFieldType.RADIO}
                        state={DataAttrState.CHECKED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Toggle size={DataAttrSize.M}
                        label="Переключатель с лейблом"
                        type={FormFieldType.RADIO}
                        state={DataAttrState.CHECKED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Toggle size={DataAttrSize.L}
                        type={FormFieldType.RADIO}
                        state={DataAttrState.DISABLED}
                />

                <Toggle size={DataAttrSize.L}
                        label="Переключатель с лейблом"
                        type={FormFieldType.RADIO}
                        state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Toggle size={DataAttrSize.M}
                        label="Переключатель с лейблом"
                        type={FormFieldType.RADIO}
                        state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap wrap--line">

                <Toggle size={DataAttrSize.L}
                        type={FormFieldType.RADIO}
                />

                <Toggle size={DataAttrSize.L}
                        label="Переключатель с лейблом"
                        type={FormFieldType.RADIO}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Toggle size={DataAttrSize.L}
                        label="Переключатель с лейблом"
                        type={FormFieldType.RADIO}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         ToggleGroup
         ========================================================================== */}
      <table className="components-library__type">

        {/* Direction: horizontal
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name">ToggleGroup</th>
            <th colSpan="2"><small>Direction: horizontal</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
          </tr>
        </thead>
        <tbody>

          {/*position LEFT ----------*/}
          <tr>
            <td className="name">position LEFT</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <ToggleGroup size={DataAttrSize.L}
                           name="toggleGroup"
                           heading="Горизонтальная группа переключателей (левое позиционирование)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                             {label: `Toggle 4`, value: `4`, onChange: () => ``,},
                             {label: `Toggle 5`, value: `5`, onChange: () => ``,},
                             {label: `Toggle 6`, value: `6`, onChange: () => ``,},
                             {label: `Toggle 7`, value: `7`, onChange: () => ``,},
                           ]}
              />

            </td>

            {/*M*/}
            <td>

              <ToggleGroup size={DataAttrSize.M}
                           name="toggleGroup"
                           heading="Горизонтальная группа переключателей (левое позиционирование)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                             {label: `Toggle 4`, value: `4`, onChange: () => ``,},
                             {label: `Toggle 5`, value: `5`, onChange: () => ``,},
                             {label: `Toggle 6`, value: `6`, onChange: () => ``,},
                             {label: `Toggle 7`, value: `7`, onChange: () => ``,},
                           ]}
              />

            </td>
          </tr>

          {/*position RIGHT ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position RIGHT</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <ToggleGroup size={DataAttrSize.L}
                           name="toggleGroup"
                           heading="Горизонтальная группа переключателей (правое позиционирование)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                           ]}
                           groupPosition={ElementPosition.RIGHT}
              />

            </td>

            {/*M*/}
            <td>

              <ToggleGroup size={DataAttrSize.M}
                           name="toggleGroup"
                           heading="Горизонтальная группа переключателей (правое позиционирование)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                           ]}
                           groupPosition={ElementPosition.RIGHT}
              />

            </td>
          </tr>

          {/*position CENTER ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position CENTER</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <ToggleGroup size={DataAttrSize.L}
                           name="toggleGroup"
                           heading="Горизонтальная группа переключателей (центральное позиционирование)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                           ]}
                           groupPosition={ElementPosition.CENTER}
              />

            </td>

            {/*M*/}
            <td>

              <ToggleGroup size={DataAttrSize.M}
                           name="toggleGroup"
                           heading="Горизонтальная группа переключателей (центральное позиционирование)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                           ]}
                           groupPosition={ElementPosition.CENTER}
              />

            </td>
          </tr>

          {/*position BETWEEN ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position BETWEEN</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <ToggleGroup size={DataAttrSize.L}
                           name="toggleGroup"
                           heading="Горизонтальная группа переключателей (растягивание)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                           ]}
                           groupPosition={ElementPosition.BETWEEN}
              />

            </td>

            {/*M*/}
            <td>

              <ToggleGroup size={DataAttrSize.L}
                           name="toggleGroup"
                           heading="Горизонтальная группа переключателей (растягивание)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                           ]}
                           groupPosition={ElementPosition.BETWEEN}
              />

            </td>
          </tr>
        </tbody>

        {/* Direction: vertical
        ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="2"><small>Direction: vertical</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
          </tr>
        </thead>
        <tbody>

          {/*position LEFT ----------*/}
          <tr>
            <td className="name">position LEFT</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <ToggleGroup size={DataAttrSize.L}
                           name="toggleGroup"
                           heading="Вертикальная группа переключателей (левое позиционирование)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                           ]}
                           groupDirection={DataAttrDirection.VERTICAL}
              />

            </td>

            {/*M*/}
            <td>

              <ToggleGroup size={DataAttrSize.M}
                           name="toggleGroup"
                           heading="Вертикальная группа переключателей (левое позиционирование)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                           ]}
                           groupDirection={DataAttrDirection.VERTICAL}
              />

            </td>
          </tr>

          {/*position RIGHT ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position RIGHT</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <ToggleGroup size={DataAttrSize.L}
                           name="toggleGroup"
                           heading="Вертикальная группа переключателей (правое позиционирование)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                           ]}
                           groupDirection={DataAttrDirection.VERTICAL}
                           groupPosition={ElementPosition.RIGHT}
              />

            </td>

            {/*M*/}
            <td>

              <ToggleGroup size={DataAttrSize.M}
                           name="toggleGroup"
                           heading="Вертикальная группа переключателей (правое позиционирование)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                           ]}
                           groupDirection={DataAttrDirection.VERTICAL}
                           groupPosition={ElementPosition.RIGHT}
              />

            </td>
          </tr>

          {/*position CENTER ----------*/}
          <tr className="enlarged-indent-top">
            <td className="name">position CENTER</td>

            {/*L*/}
            <td style={{paddingRight: "80px"}}>

              <ToggleGroup size={DataAttrSize.L}
                           name="toggleGroup"
                           heading="Вертикальная группа переключателей (центральное позиционирование)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                           ]}
                           groupDirection={DataAttrDirection.VERTICAL}
                           groupPosition={ElementPosition.CENTER}
              />

            </td>

            {/*M*/}
            <td>

              <ToggleGroup size={DataAttrSize.M}
                           name="toggleGroup"
                           heading="Вертикальная группа переключателей (центральное позиционирование)"
                           options={[
                             {label: `Toggle 1`, value: `1`, onChange: () => ``,},
                             {label: `Toggle 2`, value: `2`, onChange: () => ``,},
                             {label: `Toggle 3`, value: `3`, onChange: () => ``,},
                           ]}
                           groupDirection={DataAttrDirection.VERTICAL}
                           groupPosition={ElementPosition.CENTER}
              />

            </td>
          </tr>
        </tbody>
      </table>





      {/* ==========================================================================
         Label
         ========================================================================== */}
      <table className="components-library__type">

        {/*Color theme: gray-primary*/}
        <thead>
          <tr>
            <th className="name">Label</th>
            <th colSpan="3"><small>Color theme: gray-primary</small></th>
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
            <td className="name"></td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Label text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores fugit iste magnam maiores, minima minus necessitatibus optio pariatur, possimus praesentium rem reprehenderit sapiente sit tempore totam vero. Dolorem, impedit."/>

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">



              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">



              </div>
            </td>
          </tr>
        </tbody>

        {/*Color theme: blue-dark-secondary*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: blue-dark-secondary</small></th>
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
            <td className="name"></td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Label colorTheme="blue-dark-secondary"
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores fugit iste magnam maiores, minima minus necessitatibus optio pariatur, possimus praesentium rem reprehenderit sapiente sit tempore totam vero. Dolorem, impedit."/>

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">



              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">



              </div>
            </td>
          </tr>
        </tbody>
      </table>






    </section>
  )
};

export default FormFieldsPartial;
