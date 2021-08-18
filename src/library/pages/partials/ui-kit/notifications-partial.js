import React from "react";

import {DataAttrBg, DataAttrColorTheme, DataAttrSize, MessageType} from "../../../../common/services/consts/common";
import NotificationPrimary, {NotificationType} from "../../../../common/components/ui-kit/notifications/NotificationPrimary/NotificationPrimary";
import NotificationSecondary, {NotificationGroup} from "../../../../common/components/ui-kit/notifications/NotificationSecondary/NotificationSecondary";
import Avatar from "../../../../common/components/common/Avatar/Avatar";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";

import {ReactComponent as IconQuestion24} from "../../../../common/assets/img/icons/svg/24/icon-question-24.svg";
import {ReactComponent as IconInfo24} from "../../../../common/assets/img/icons/svg/24/icon-info-24.svg";
import {ReactComponent as IconTrash24} from "../../../../common/assets/img/icons/svg/24/icon-trash-24.svg";
import IconWrap from "../../../../common/components/ui-kit/icons/IconWrap/IconWrap";
import {ReactComponent as IconStatusBlock16} from "../../../../common/assets/img/icons/svg/16/icon-status-block-16.svg";


const NotificationsPartial = () => {
  return (
    <section className="components-library__element notifications-library">
      <h3 className="components-library__heading h3">
        Notifications
      </h3>

      {/* ==========================================================================
          Notification primary
          ========================================================================== */}

      <table className="components-library__type">

        {/* Color theme: green-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Primary</th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: green-primary</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <NotificationPrimary text="Успех"
                                   type={MessageType.SUCCESS}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: orange-primary
            ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: orange-primary</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <NotificationPrimary text="Внимание"
                                   type={MessageType.WARNING}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: red-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: red-primary</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <NotificationPrimary text="Ошибка"
                                   type={MessageType.ERROR}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: velvet-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: velvet-primary</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <NotificationPrimary text="Информация"
                                   type={MessageType.INFO}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         Notification secondary
         ========================================================================== */}

      <table className="components-library__type">

        {/* Notification group: Primary
            ========================================================================== */}

        {/* Color theme: green-primary
            -------------------------------------------------------------------------- */}
        <thead>
          <tr>
            <th className="name">Secondary</th>
            <th colSpan="3"><span><b>Notification group: Primary</b></span></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: green-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name">type SUCCESS</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     title="Выполнено"
                                     text="Дополнительный текст в несколько слов"
                                     type={MessageType.SUCCESS}
                                     group={NotificationGroup.PRIMARY}
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     title="Выполнено"
                                     text="Дополнительный текст в несколько слов"
                                     type={MessageType.SUCCESS}
                                     group={NotificationGroup.PRIMARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: orange-primary
            -------------------------------------------------------------------------- */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: orange-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name">type WARNING</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     title="Внимание"
                                     text="Дополнительный текст в несколько слов"
                                     type={MessageType.WARNING}
                                     group={NotificationGroup.PRIMARY}
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     title="Внимание"
                                     text="Дополнительный текст в несколько слов"
                                     type={MessageType.WARNING}
                                     group={NotificationGroup.PRIMARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: red-primary
            -------------------------------------------------------------------------- */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: red-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name">type ERROR</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     title="Удалено"
                                     text="Дополнительный текст в несколько слов"
                                     type={MessageType.ERROR}
                                     group={NotificationGroup.PRIMARY}
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     title="Удалено"
                                     text="Дополнительный текст в несколько слов"
                                     type={MessageType.ERROR}
                                     group={NotificationGroup.PRIMARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>

          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     title="Ошибка"
                                     text="Дополнительный текст в несколько слов"
                                     placePic={<IconWrap size={DataAttrSize.M}
                                                         colorTheme={DataAttrColorTheme.RED_PRIMARY}
                                                         icon={<Icon size={DataAttrSize.M} icon={<IconTrash24/>}/>}/>}
                                     type={MessageType.ERROR}
                                     group={NotificationGroup.PRIMARY}
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     title="Ошибка"
                                     text="Дополнительный текст в несколько слов"
                                     placePic={<IconWrap size={DataAttrSize.M}
                                                         colorTheme={DataAttrColorTheme.RED_PRIMARY}
                                                         icon={<Icon size={DataAttrSize.M} icon={<IconTrash24/>}/>}/>}
                                     type={MessageType.ERROR}
                                     group={NotificationGroup.PRIMARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: velvet-primary
            -------------------------------------------------------------------------- */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: velvet-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name">type INFO</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     title="Информационное сообщение"
                                     text="Дополнительный текст в несколько слов"
                                     type={MessageType.INFO}
                                     group={NotificationGroup.PRIMARY}
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     title="Информационное сообщение"
                                     text="Дополнительный текст в несколько слов"
                                     type={MessageType.INFO}
                                     group={NotificationGroup.PRIMARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Notification group: Secondary
            ========================================================================== */}

        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><span><b>Notification group: Secondary</b></span></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>

        {/* type SUCCESS
            -------------------------------------------------------------------------- */}
        <tbody className="bg-darker">
          <tr>
            <td className="name">type SUCCESS</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     text={<><b>Выполненное действие</b> текст с описанием сути уведомления</>}
                                     date="22 янв. 2021 в 12:30"
                                     type={MessageType.SUCCESS}
                                     group={NotificationGroup.SECONDARY}
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     text={<><b>Выполненное действие</b> текст с описанием сути уведомления</>}
                                     date="22 янв. 2021 в 12:30"
                                     type={MessageType.SUCCESS}
                                     group={NotificationGroup.SECONDARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* type WARNING
            -------------------------------------------------------------------------- */}
        <tbody className="bg-darker">
          <tr>
            <td className="name">type WARNING</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     text={<><b>Внимание!</b> текст с описанием сути уведомления</>}
                                     date="22 янв. 2021 в 12:30"
                                     type={MessageType.WARNING}
                                     group={NotificationGroup.SECONDARY}
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     text={<><b>Внимание!</b> текст с описанием сути уведомления</>}
                                     date="22 янв. 2021 в 12:30"
                                     type={MessageType.WARNING}
                                     group={NotificationGroup.SECONDARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* type ERROR
            -------------------------------------------------------------------------- */}
        <tbody className="bg-darker">
          <tr>
            <td className="name">type ERROR</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     text={<><b>Критичное уведомление или ошибка</b> текст с описанием сути уведомления</>}
                                     date="22 янв. 2021 в 12:30"
                                     type={MessageType.ERROR}
                                     group={NotificationGroup.SECONDARY}
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     text={<><b>Критичное уведомление или ошибка</b> текст с описанием сути уведомления</>}
                                     date="22 янв. 2021 в 12:30"
                                     type={MessageType.ERROR}
                                     group={NotificationGroup.SECONDARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* type INFO
            -------------------------------------------------------------------------- */}
        <tbody className="bg-darker">
          <tr>
            <td className="name">type INFO</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     text={<><b>Информационное сообщение</b> текст с описанием сути уведомления</>}
                                     date="22 янв. 2021 в 12:30"
                                     type={MessageType.INFO}
                                     group={NotificationGroup.SECONDARY}
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     text={<><b>Информационное сообщение</b> текст с описанием сути уведомления</>}
                                     date="22 янв. 2021 в 12:30"
                                     type={MessageType.INFO}
                                     group={NotificationGroup.SECONDARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* not type
            -------------------------------------------------------------------------- */}
        <tbody className="bg-darker">
          <tr>
            <td className="name">not type</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     text={<><b>Прочитанное уведомление</b> текст с описанием сути уведомления</>}
                                     date="22 янв. 2021 в 12:30"
                                     group={NotificationGroup.SECONDARY}
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     text={<><b>Прочитанное уведомление</b> текст с описанием сути уведомления</>}
                                     date="22 янв. 2021 в 12:30"
                                     group={NotificationGroup.SECONDARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* avatar
            -------------------------------------------------------------------------- */}
        <tbody className="bg-darker">
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     placePic={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ" />}
                                     text={<><b>Виктор Петров</b> оставил сообщение в заявке №234 (Прорыв трубопровода)</>}
                                     date="22 янв. 2021 в 12:30"
                                     group={NotificationGroup.SECONDARY}
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     placePic={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ" />}
                                     text={<><b>Виктор Петров</b> оставил сообщение в заявке №234 (Прорыв трубопровода)</>}
                                     date="22 янв. 2021 в 12:30"
                                     group={NotificationGroup.SECONDARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Notification group: Tertiary
            ========================================================================== */}

        {/* Color theme: default
            -------------------------------------------------------------------------- */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><span><b>Notification group: Tertiary</b></span></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: default</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name">not type</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconQuestion24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconQuestion24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconInfo24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconInfo24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>


        {/* Color theme: green-primary
            -------------------------------------------------------------------------- */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: green-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name">type SUCCESS</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconQuestion24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.SUCCESS}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconQuestion24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.SUCCESS}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconInfo24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.SUCCESS}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconInfo24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.SUCCESS}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: orange-primary
            -------------------------------------------------------------------------- */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: orange-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name">type WARNING</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconQuestion24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.WARNING}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconQuestion24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.WARNING}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconInfo24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.WARNING}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconInfo24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.WARNING}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: red-primary
            -------------------------------------------------------------------------- */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: red-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name">type ERROR</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconQuestion24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.ERROR}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconQuestion24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.ERROR}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconInfo24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.ERROR}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconInfo24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.ERROR}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: velvet-primary
            -------------------------------------------------------------------------- */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: velvet-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name">type INFO</td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconQuestion24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.INFO}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconQuestion24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.INFO}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <NotificationSecondary size={DataAttrSize.L}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconInfo24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий  одухотворила всех причастных"
                                     type={MessageType.INFO}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*M*/}
            <td>

              <NotificationSecondary size={DataAttrSize.M}
                                     icon={<Icon size={DataAttrSize.M} icon={<IconInfo24/>}/>}
                                     text="Эксперты утверждают, что реализация намеченных плановых заданий одухотворила всех причастных"
                                     type={MessageType.INFO}
                                     group={NotificationGroup.TERTIARY}
                                     isHideClose
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

      </table>
    </section>
  )
};

export default NotificationsPartial;



