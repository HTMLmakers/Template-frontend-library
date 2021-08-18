import React from "react";

import {DataAttrColorTheme, DataAttrSize, MessageType} from "../../../../common/services/consts/common";

import NotificationPrimary, {NotificationType} from "../../../../common/components/ui-kit/notifications/NotificationPrimary/NotificationPrimary";
import IconWrap from "../../../../common/components/ui-kit/icons/IconWrap/IconWrap";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import {ReactComponent as IconBell24} from "../../../../common/assets/img/icons/svg/24/icon-bell-24.svg";
import NotificationSecondary
  from "../../../../common/components/ui-kit/notifications/NotificationSecondary/NotificationSecondary";

import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import {
  addMessage,
  createMessage,
  MessageContainer,
  MessageDismiss
} from "../../../../common/components/common/Message/Message";


const Messages = () => {
  return (
    <section className="components-library__element messages-library">
      <h3 className="components-library__heading h3">
        Messages
      </h3>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}

        {/*M*/}
        <thead>
        <tr>
          <th className="name"></th>
          <th colSpan="1"><small>Color theme: default</small></th>
        </tr>
        <tr>
          <th className="name"></th>
          <th><small>L</small></th>
        </tr>
        </thead>
        <tbody className="bg-darker">
        <tr>
          <td className="name"></td>
          <td>
            <ButtonPrimary size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Ошибка"
                           handleClick={() => (
                             addMessage(createMessage(MessageType.ERROR,`Ошибка`, `Произошла ошибка`))
                           )}
            />
            <ButtonPrimary size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Успешно"
                           handleClick={() => (
                             addMessage(createMessage(MessageType.SUCCESS,`Успешно`, `Успешно выполнено`))
                           )}
            />
            <ButtonPrimary size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Внимание"
                           handleClick={() => (
                             addMessage(createMessage(MessageType.WARNING,`Внимание`, `Обратите внимание`))
                           )}
            />
            <ButtonPrimary size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Информация"
                           handleClick={() => (
                             addMessage(createMessage(MessageType.INFO,`Информация`, `Новая информация`))
                           )}
            />
            <ButtonPrimary size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Удалить"
                           handleClick={() => (
                             addMessage(createMessage(MessageType.ERROR,`Информация`, `Новая информация`, true))
                           )}
            />
          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
};

export default Messages;
