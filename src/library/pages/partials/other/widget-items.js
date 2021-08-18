import React from "react";

import Widget from "../../../../common/components/common/Widget/Widget";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import IconWrap from "../../../../common/components/ui-kit/icons/IconWrap/IconWrap";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import Value from "../../../../common/components/ui-kit/texts/Value/Value";
import ImgBanner from "../../../../common/assets/img/temp/banner.png";
import ButtonIcon from "../../../../common/components/ui-kit/buttons/ButtonIcon/ButtonIcon";
import LinkPrimary from "../../../../common/components/ui-kit/links/LinkPrimary/LinkPrimary";
import Status, {DataAttrType} from "../../../../common/components/ui-kit/info-tags/Status/Status";
import MarkPrimary from "../../../../common/components/ui-kit/marks/MarkPrimary/MarkPrimary";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import Tooltip from "../../../../common/components/ui-kit/Tooltip/Tooltip";

import {ReactComponent as IconBuildings40} from "../../../../common/assets/img/icons/svg/40/icon-buildings-40.svg";
import {ReactComponent as IconRefreshAlert40} from "../../../../common/assets/img/icons/svg/40/icon-refresh-alert-40.svg";
import {ReactComponent as IconRefresh16} from "../../../../common/assets/img/icons/svg/16/icon-refresh-16.svg";
import {ReactComponent as IconDoor40} from "../../../../common/assets/img/icons/svg/40/icon-door-40.svg";
import {ReactComponent as IconCamera16} from "../../../../common/assets/img/icons/svg/16/icon-camera-16.svg";
import {ReactComponent as IconSpeaker16} from "../../../../common/assets/img/icons/svg/16/icon-speaker-16.svg";
import {ReactComponent as IconSpeaker40} from "../../../../common/assets/img/icons/svg/40/icon-speaker-40.svg";
import {ReactComponent as IconCpu16} from "../../../../common/assets/img/icons/svg/16/icon-cpu-16.svg";
import {ReactComponent as IconCpu40} from "../../../../common/assets/img/icons/svg/40/icon-cpu-40.svg";
import {ReactComponent as IconChartCircles40} from "../../../../common/assets/img/icons/svg/40/icon-chart-circles-40.svg";
import {ReactComponent as IconPlus16} from "../../../../common/assets/img/icons/svg/16/icon-plus-16.svg";
import {ReactComponent as IconQuestion24} from "../../../../common/assets/img/icons/svg/24/icon-question-24.svg";
import {ReactComponent as IconRosreestr40} from "../../../../common/assets/img/icons/svg/40/icon-rosreestr-40.svg";
import {ReactComponent as IconCamera40} from "../../../../common/assets/img/icons/svg/40/icon-camera-40.svg";
import {ReactComponent as IconInfo24} from "../../../../common/assets/img/icons/svg/24/icon-info-24.svg";
import {ReactComponent as IconChartCircle40} from "../../../../common/assets/img/icons/svg/40/icon-chart-circle-40.svg";
import {ReactComponent as IconPayCard40} from "../../../../common/assets/img/icons/svg/40/icon-pay-card-40.svg";
import {ReactComponent as IconReceipt40} from "../../../../common/assets/img/icons/svg/40/icon-receipt-40.svg";
import {ReactComponent as IconDownload40} from "../../../../common/assets/img/icons/svg/40/icon-download-40.svg";
import {ReactComponent as IconCoin40} from "../../../../common/assets/img/icons/svg/40/icon-coin-40.svg";
import {ReactComponent as IconHeadset40} from "../../../../common/assets/img/icons/svg/40/icon-headset-40.svg";
import {ReactComponent as IconChartLines40} from "../../../../common/assets/img/icons/svg/40/icon-chart-lines-40.svg";
import {ReactComponent as IconFileExport40} from "../../../../common/assets/img/icons/svg/40/icon-file-export-40.svg";
import {ReactComponent as IconCheck24} from "../../../../common/assets/img/icons/svg/24/icon-check-24.svg";
import {ReactComponent as IconUsers40} from "../../../../common/assets/img/icons/svg/40/icon-users-40.svg";
import {ReactComponent as IconCheckCircle40} from "../../../../common/assets/img/icons/svg/40/icon-check-circle-40.svg";
import {ReactComponent as IconCheckList40} from "../../../../common/assets/img/icons/svg/40/icon-check-list-40.svg";
import {ReactComponent as IconZip40} from "../../../../common/assets/img/icons/svg/40/icon-zip-40.svg";
import {ReactComponent as IconUserCheck40} from "../../../../common/assets/img/icons/svg/40/icon-user-check-40.svg";
import {ReactComponent as IconCheck16} from "../../../../common/assets/img/icons/svg/16/icon-check-16.svg";
import {ReactComponent as IconWrite40} from "../../../../common/assets/img/icons/svg/40/icon-write-40.svg";
import {ReactComponent as IconFilePause40} from "../../../../common/assets/img/icons/svg/40/icon-file-pause-40.svg";
import {ReactComponent as IconPriorityOne40} from "../../../../common/assets/img/icons/svg/40/icon-priority-one-40.svg";
import {ReactComponent as IconIncomingCall40} from "../../../../common/assets/img/icons/svg/40/icon-incoming-call-40.svg";
import {ReactComponent as IconTimeMeter40} from "../../../../common/assets/img/icons/svg/40/icon-time-meter-40.svg";
import {ReactComponent as IconCallOut40} from "../../../../common/assets/img/icons/svg/40/icon-call-out-40.svg";
import {ReactComponent as IconCallInOut40} from "../../../../common/assets/img/icons/svg/40/icon-call-in-out-40.svg";
import {ReactComponent as IconFileAlert40} from "../../../../common/assets/img/icons/svg/40/icon-file-alert-40.svg";
import {ReactComponent as IconFileCheck40} from "../../../../common/assets/img/icons/svg/40/icon-file-check-40.svg";
import {ReactComponent as IconCoins40} from "../../../../common/assets/img/icons/svg/40/icon-coins-40.svg";
import {ReactComponent as IconCalendarTime40} from "../../../../common/assets/img/icons/svg/40/icon-calendar-time-40.svg";
import {ReactComponent as IconUpload40} from "../../../../common/assets/img/icons/svg/40/icon-upload-40.svg";
import {ReactComponent as IconCanselCircle40} from "../../../../common/assets/img/icons/svg/40/icon-cansel-circle-40.svg";
import {ReactComponent as IconCertificate40} from "../../../../common/assets/img/icons/svg/40/icon-certificate-40.svg";
import {ReactComponent as IconScale40} from "../../../../common/assets/img/icons/svg/40/icon-scale-40.svg";
import {ReactComponent as IconCase40} from "../../../../common/assets/img/icons/svg/40/icon-case-40.svg";

const WidgetItems = () => {
  return (
    <section className="components-library__element header-library">
      <h3 className="components-library__heading h3">
        Widgets
      </h3>

      <table className="components-library__type">

        {/* Page - Мои дома
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Core</small></th>
          </tr>
          <tr>
            <th><small>Page: Мои дома</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Всего домов / квартир*/}
          <tr>
            <td>

              <Widget heading="Всего домов / квартир"
                      desc="Дома с заказанной услугой актуализации"
                      placeComponents={ <Value text="25 / 650"
                                               size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconBuildings40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Требуется актуализация*/}
          <tr>
            <td>
              <Widget heading="Требуется актуализация"
                      desc="Дома с устаревшими данными из Росреестра"
                      placeComponents={<><Value text="35 / 2"
                                                size={DataAttrSize.L} />
                        <ButtonPrimary text="Показать"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                                                       icon={<IconRefreshAlert40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Работайте вместе*/}
          <tr>
            <td>
              <Widget heading="Работайте вместе!"
                      desc="Корпоративный доступ на месяц"
                      placeComponents={<><Value text="1 250₽"
                                                size={DataAttrSize.S}
                                                colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/>
                                                <ButtonPrimary text="Заказать"
                                                               size={DataAttrSize.S}
                                                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeImage={ImgBanner}
              />

            </td>
          </tr>
        </tbody>

        {/* Page - Страница дома
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Page: Страница дома</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Всего помещений*/}
          <tr>
            <td>

              <Widget heading="Всего помещений"
                      desc="Данные обновлены 22 янв. 2021"
                      placeComponents={<><Value text="172"
                                                size={DataAttrSize.L} />
                                         <ButtonPrimary size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                                        placeBefore= {<Icon size={DataAttrSize.S}
                                                                            icon={<IconRefresh16/>}/>} />
                                         <ButtonPrimary text="Скачать реестр"
                                                        size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconDoor40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Подключенные опции*/}
          <tr>
            <td>

              <Widget heading="Подключенные опции"
                      desc="Автоматизация и другие возможности"
                      placeComponentsSize={DataAttrSize.M}
                      placeComponents={<><Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                          Действует до 21 янв. 2021 или подобный текст </>}
                                                  position={'top'}
                                         >
                                           <IconWrap size={DataAttrSize.S}
                                                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                                                     icon={ <Icon size={DataAttrSize.S}
                                                                  icon={<IconRefresh16 />} />}
                                           />
                                         </Tooltip>

                                         <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                          Действует до 21 янв. 2021 или подобный текст </>}
                                                  position={'top'}
                                         >
                                           <IconWrap size={DataAttrSize.S}
                                                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                                                     icon={ <Icon size={DataAttrSize.S}
                                                                  icon={<IconCamera16 />} />}
                                           />
                                         </Tooltip>

                                         <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                           Действует до 21 янв. 2021 или подобный текст </>}
                                                  position={'top'}
                                         >
                                           <IconWrap size={DataAttrSize.S}
                                                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                                                     icon={ <Icon size={DataAttrSize.S}
                                                                  icon={<IconSpeaker16 />} />}
                                                     markNotice
                                           />
                                         </Tooltip>

                                         <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                          Действует до 21 янв. 2021 или подобный текст </>}
                                                  position={'top'}
                                         >
                                           <IconWrap size={DataAttrSize.S}
                                                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                                                     icon={ <Icon size={DataAttrSize.S}
                                                                  icon={<IconCpu16 />} />}
                                           />
                                         </Tooltip>

                                         <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                          Действует до 21 янв. 2021 или подобный текст </>}
                                                  position={'top'}
                                         >
                                           <MarkPrimary value="+2"
                                                        size={DataAttrSize.XL}
                                                        colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                                           />
                                         </Tooltip>

                                         <ButtonPrimary size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                                        placeBefore={<Icon size={DataAttrSize.S}
                                                                           icon={<IconPlus16 />} />} /> </>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconChartCircles40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Актуализация сведений*/}
          <tr>
            <td>

              <Widget heading="Актуализация сведений"
                      desc="Автоматическое обновление реестра"
                      placeComponents={<><Value text="1 050₽"
                                                size={DataAttrSize.S} />
                                         <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                          Действует до 21 янв. 2021 или подобный текст </>}
                                                   position={'top'}
                                          >
                                            <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                                        icon={<IconQuestion24 />} />} />
                                          </Tooltip>

                                         <ButtonPrimary text="Подключить"
                                                        size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconRosreestr40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Видеонаблюдение*/}
          <tr>
            <td>

              <Widget heading="Видеонаблюдение"
                      desc="Подзаголовок в несколько слов максимум"
                      placeComponents={<><Value text="от 2 050₽"
                                                size={DataAttrSize.S} />
                                         <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                          Действует до 21 янв. 2021 или подобный текст </>}
                                                  position={'top'}
                                         >
                                         <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                                     icon={<IconQuestion24 />} />} />
                                         </Tooltip>

                                         <ButtonPrimary text="Подключить"
                                                        size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconCamera40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Расчётный центр (пример)*/}
          <tr>
            <td>
              <Widget heading="Расчётный центр (пример)"
                      desc="Подзаголовок в несколько слов максимум"
                      placeComponents={<><Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                          Действует до 21 янв. 2021 или подобный текст </>}
                                                  position={'top'}
                      >
                        <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                    icon={<IconInfo24 />} />} />
                      </Tooltip>

                        <ButtonPrimary text="Отключить"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                                                       icon={<IconCpu40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Опция*/}
          <tr>
            <td>
              <Widget heading="Опция"
                      desc="Будет активирована после оплаты"
                      placeComponents={<><Value text="1 050₽"
                                                size={DataAttrSize.S} />
                        <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                 text={<><b>Информация об условиях: </b> <br />
                                         Действует до 21 янв. 2021 или подобный текст </>}
                                 position={'top'}
                        >
                          <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                      icon={<IconQuestion24 />} />} />
                        </Tooltip>

                        <ButtonPrimary text="Ожидает оплаты..."
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                                                       icon={<IconChartCircle40/>}/>}/>}
              />

            </td>
          </tr>
        </tbody>

        {/* Page - Мой профиль
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Page: Мой профиль</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Личный счёт*/}
          <tr>
            <td>

              <Widget heading="Личный счёт"
                      desc={<>Посмотреть <LinkPrimary text="историю пополнений"
                                                      size={DataAttrSize.L}
                                                      colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                                                      isUnderline /> </>}
                      placeComponents={<><Value text="57 098 ₽"
                                                size={DataAttrSize.L} />
                                         <ButtonPrimary text="Пополнить"
                                                        size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconPayCard40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Выставленные счета*/}
          <tr>
            <td>

              <Widget heading="Выставленные счета"
                      desc="За всё время"
                      placeComponents={<><Value text="35 / 2"
                                                size={DataAttrSize.L} />
                                         <ButtonPrimary text="Показать"
                                                        size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                                                       icon={<IconReceipt40/>}
                                                       type={"stroke"}/>}/>}
              />

            </td>
          </tr>

          {/*Состояние счёта?*/}
          <tr>
            <td>

              <Widget heading="Состояние счёта"
                      desc="Ваш личный счет"
                      placeComponents={<Value text="57 098 ₽"
                                              size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconPayCard40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Оплатить картой*/}
          <tr>
            <td>

              <Widget heading="Оплатить картой"
                      desc="Visa, Mastercard, Мир, Maestro"
                      placeComponents={<><Value text="25 000 ₽"
                                              size={DataAttrSize.S} />
                                         <ButtonPrimary text="Оплатить"
                                                        size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconPayCard40/>}/>}/>}
               />

            </td>
          </tr>

          {/*Скачать счет*/}
          <tr>
            <td>

              <Widget heading="Скачать счет"
                      desc="Файл в формате doc, 100Kb"
                      placeComponents={<ButtonPrimary text="Скачать"
                                                      size={DataAttrSize.S}
                                                      colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconDownload40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Голосования*/}
          <tr>
            <td>

              <Widget heading="Голосования"
                      desc="Подзаголовок в пару строк максимум"
                      placeComponents={<><Value text="1 050₽"
                                                size={DataAttrSize.S} />
                                         <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                          Действует до 21 янв. 2021 или подобный текст </>}
                                                  position={'top'}
                                         >
                                           <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                                       icon={<IconQuestion24 />} />} />
                                         </Tooltip>

                                         <ButtonPrimary text="Подключить"
                                                        size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconSpeaker40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Долги по ЖКХ*/}
          <tr>
            <td>

              <Widget heading="Долги по ЖКХ"
                      desc="Подзаголовок в пару строк максимум"
                      placeComponents={<><Value text="2 000₽"
                                                size={DataAttrSize.S} />
                                         <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                          Действует до 21 янв. 2021 или подобный текст </>}
                                                  position={'top'}
                                         >
                                           <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                                       icon={<IconQuestion24 />} />} />
                                         </Tooltip>

                                         <ButtonPrimary text="Подключить"
                                                        size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                                                       icon={<IconCoin40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Диспетчерская*/}
          <tr>
            <td>

              <Widget heading="Диспетчерская"
                      desc="Подзаголовок в пару строк максимум"
                      placeComponents={<><Value text="2 000₽"
                                                size={DataAttrSize.S} />
                        <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                 text={<><b>Информация об условиях: </b> <br />
                                         Действует до 21 янв. 2021 или подобный текст </>}
                                 position={'top'}
                        >
                          <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                      icon={<IconQuestion24 />} />} />
                        </Tooltip>

                        <ButtonPrimary text="Подключить"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                                                       icon={<IconHeadset40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Статистика*/}
          <tr>
            <td>

              <Widget heading="Статистика"
                      desc="Подзаголовок в пару строк максимум"
                      placeComponents={<><Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                          text={<><b>Информация об условиях: </b> <br />
                                                  Действует до 21 янв. 2021 или подобный текст </>}
                                          position={'top'}
                                 >
                                   <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                               icon={<IconQuestion24 />} />} />
                                 </Tooltip>

                                 <ButtonPrimary text="Отключить"
                                                size={DataAttrSize.S}
                                                colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.AZURE_PRIMARY}
                                                       icon={<IconChartLines40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Пятый модуль*/}
          <tr>
            <td>

              <Widget heading="Пятый модуль"
                      desc="Подзаголовок в пару строк максимум"
                      placeComponents={<><Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                    Действует до 21 янв. 2021 или подобный текст </>}
                                                  position={'top'}
                                         >
                                           <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                                       icon={<IconQuestion24 />} />} />
                                         </Tooltip>

                                         <ButtonPrimary text="Отключить"
                                                        size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.YELLOW_PRIMARY}
                                                       icon={<IconFileExport40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Шестой модуль*/}
          <tr>
            <td>

              <Widget heading="Шестой модуль"
                      desc="Подзаголовок в пару строк максимум"
                      placeComponents={<><Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                    Действует до 21 янв. 2021 или подобный текст </>}
                                                  position={'top'}
                                         >
                                           <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                                       icon={<IconQuestion24 />} />} />
                                         </Tooltip>

                                         <ButtonPrimary text="Отключить"
                                                        size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.RED_PRIMARY}
                                                       icon={<IconCpu40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Модуль «Диспетчерская»*/}
          <tr>
            <td>

              <Widget heading="Модуль «Диспетчерская»"
                      desc="Краткий промо-текст в одну-две строчки"
                      placeComponents={<><Value text="1 200₽ / месяц"
                                                size={DataAttrSize.S} />
                                         <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                                  text={<><b>Информация об условиях: </b> <br />
                                                          Действует до 21 янв. 2021 или подобный текст </>}
                                                  position={'top'}
                                         >
                                           <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                                       icon={<IconQuestion24 />} />} />
                                         </Tooltip> </>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                                                       icon={<IconHeadset40/>}/>}/>}
              />

            </td>
          </tr>
        </tbody>

        {/* Page - Компании и сотрудники
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Page: Компании и сотрудники</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Дома в управлении*/}
          <tr>
            <td>

              <Widget heading="Дома в управлении"
                      desc="Все дома относящиеся к управляющей компании"
                      placeComponents={ <Value text="125"
                                               size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconBuildings40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Сотрудники*/}
          <tr>
            <td>

              <Widget heading="Сотрудники"
                      desc="Все рабочие группы"
                      placeComponents={ <Value text="205"
                                               size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconUsers40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Всего заявок / Активные заявки*/}
          <tr>
              <td>

              <Widget heading="Всего заявок / Активные заявки"
                      desc="Статистика за все время"
                      placeComponents={ <Value text="75 / 4"
                                               size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconFileExport40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Эффективность работы*/}
          <tr>
            <td>

              <Widget heading="Эффективность работы"
                      desc="Соотношение выполненных и взятых в работу заявок"
                      placeComponents={ <Value text="90%"
                                               size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconChartCircle40/>}/>}/>}
              />

            </td>
          </tr>
        </tbody>

        {/* Page - Выписки из ЕГРН
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Page: Выписки из ЕГРН</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Готовые выписки из росреестра*/}
          <tr>
            <td>

              <Widget heading="Готовые выписки из росреестра"
                      desc="Доступные для скачивания"
                      placeComponents={ <Value text="25 / 2"
                                               size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconRosreestr40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Ожидают оплаты*/}
          <tr>
            <td>

              <Widget heading="Ожидают оплаты"
                      desc="Требуется оплата удобным для вас способом"
                      placeComponents={<><Value text="2"
                                                size={DataAttrSize.L} />
                        <ButtonPrimary text="Показать"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconPayCard40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Заказать выписку из Росреестра*/}
          <tr>
            <td>

              <Widget heading="Заказать выписку из Росреестра"
                      desc={<>Кад. №: 63:01:0620002:759 <br /> ул. Пушкина, д.95, кв.45, г. Уфа</>}
                      placeComponents={<><Value text="900₽"
                                                size={DataAttrSize.S} />
                        <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                 text={<><b>Информация об условиях: </b> <br /> Действует до 21 янв. 2021 или подобный текст </>}
                                 position={'top'}
                        >
                          <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                      icon={<IconQuestion24 />} />} />
                        </Tooltip>
                      </>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconRosreestr40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Готовые выписки для помещений*/}
          <tr>
            <td>

              <Widget heading="Готовые выписки для помещений"
                      desc="Доступные для скачивания"
                      placeComponents={<><Value text="22 / 2"
                                                size={DataAttrSize.L} />
                        <ButtonPrimary text="Показать"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                                                       icon={<IconCheckCircle40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Заказать выписку из Росреестра*/}
          <tr>
            <td>

              <Widget heading="Заказать выписку из Росреестра"
                      desc="Доступно несколько вариантов"
                      placeComponents={<><Value text="от 850₽"
                                                size={DataAttrSize.S} />
                        <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                                 text={<><b>Информация об условиях: </b> <br /> Действует до 21 янв. 2021 или подобный текст </>}
                                 position={'top'}
                        >
                          <ButtonIcon placePic={<Icon size={DataAttrSize.M}
                                                      icon={<IconQuestion24 />} />} />
                        </Tooltip>
                        <ButtonPrimary text="Заказать"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconRosreestr40/>}/>}/>}
              />

            </td>
          </tr>
        </tbody>

        {/* Page - Список собраний
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Собрания</small></th>
          </tr>
          <tr>
            <th><small>Page: Список собраний</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Всего завершено*/}
          <tr>
            <td>

              <Widget heading="Всего завершено"
                      desc="Данные за всё время работы"
                      placeComponents={ <Value text="120"
                                               size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                                                       icon={<IconCheckList40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Документы готовы*/}
          <tr>
            <td>

              <Widget heading="Документы готовы"
                      desc="Можно скачать пакет документов"
                      placeComponents={<><Value text="34"
                                                size={DataAttrSize.L} />
                        <ButtonPrimary text="Показать"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconZip40/>}/>}/>}
              />

            </td>
          </tr>
        </tbody>

        {/* Page - Информация о собрании
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Page: Информация о собрании</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Подсчёт голосов*/}
          <tr>
            <td>

              <Widget heading="Подсчёт голосов"
                      desc="Собственники принявшие участие в голосовании"
                      placeComponents={<><Value text="272 / 60%"
                                                size={DataAttrSize.L} />
                        <Status text="Завершено"
                                size={DataAttrSize.L}
                                colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                                type={DataAttrType.EXTRALIGHT}
                                placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                        />
                      </>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconUserCheck40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Принятые решения*/}
          <tr>
            <td>

              <Widget heading="Принятые решения"
                      desc="Вопросы набравшие нужное кол-во голосов"
                      placeComponents={ <Value text="3 / 3"
                                               size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                                                       icon={<IconCheckList40/>}/>}/>}
              />

            </td>
          </tr>
        </tbody>

        {/* Page - Собственники
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Page: Собственники</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Площадь дома*/}
          <tr>
            <td>

              <Widget heading="Площадь дома"
                      desc="По данным выписки из Росреестра"
                      placeComponents={<><Value text="246 м2"
                                                size={DataAttrSize.S} />
                        <Icon size={DataAttrSize.M}
                              colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                              icon={<IconCheck24/>}/>
                        <ButtonPrimary text="Проверить"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconBuildings40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Заказать реестр*/}
          <tr>
            <td>

              <Widget heading="Заказать реестр"
                      desc="Выписка из Росреестра (срок: 1-2 дня)"
                      placeComponents={<><Value text="1 050 ₽"
                                                size={DataAttrSize.S} />
                        <ButtonPrimary text="Заказать"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconRosreestr40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Повестка дня «под ключ»*/}
          <tr>
            <td>

              <Widget heading="Повестка дня «под ключ»"
                      desc="Подготовка формулировок вопросов повестки собрания"
                      placeComponents={<><Value text="1 050 ₽"
                                                size={DataAttrSize.S}
                                                colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}/>
                        <ButtonPrimary text="Заказать"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconWrite40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Пакет документов*/}
          <tr>
            <td>

              <Widget heading="Пакет документов"
                      desc="Необходимые документы для проведения собрания"
                      placeComponents={<ButtonPrimary text="Скачать"
                                                     size={DataAttrSize.S}
                                                     colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconZip40/>}/>}/>}
              />

            </td>
          </tr>

        </tbody>

        {/* Page - Задачи и заявки
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Control-room</small></th>
          </tr>
          <tr>
            <th><small>Page: Задачи и заявки</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Актуальные заявки*/}
          <tr>
            <td>

              <Widget heading="Актуальные заявки"
                      desc="Со статусом «В работе», «Назначено»"
                      placeComponents={ <Value text="230 / 25"
                                               size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconFileExport40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Временно отложенные*/}
          <tr>
            <td>

              <Widget heading="Временно отложенные"
                      desc="К этим задачам нужно вернуться позднее"
                      placeComponents={<><Value text="105 / 75"
                                                size={DataAttrSize.L} />
                                         <ButtonPrimary text="Показать"
                                                        size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconFilePause40/>}/>}/>}
              />

            </td>
          </tr>

        </tbody>

        {/* Page - Мои задачи
        ========================================================================== */}

        <thead>
          <tr>
            <th><small>Page: Мои задачи</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*С высоким приоритетом*/}
          <tr>
            <td>

              <Widget heading="С высоким приоритетом"
                      desc="Необходимо выполнить в первую очередь"
                      placeComponents={<><Value text="17 / 2"
                                                size={DataAttrSize.L} />
                                         <ButtonPrimary text="Показать"
                                                        size={DataAttrSize.S}
                                                        colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                                                       icon={<IconPriorityOne40/>}/>}/>}
              />

            </td>
          </tr>

        </tbody>

        {/* Page - Обработка звонков
        ========================================================================== */}

        <thead>
          <tr>
            <th><small>Page: Обработка звонков</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Принято / пропущенно звонков*/}
          <tr>
            <td>

              <Widget heading="Принято / пропущенно звонков"
                      desc="Статистика звонков за сегодня"
                      placeComponents={<Value text="230 / 01"
                                                size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconIncomingCall40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Средняя длительность / ожидание*/}
          <tr>
            <td>

              <Widget heading="Средняя длительность / ожидание"
                      desc="Статистика звонков за сегодня"
                      placeComponents={<Value text="05:32 / 00:05"
                                              size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconTimeMeter40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Исходящие звонки / недозвон*/}
          <tr>
            <td>

              <Widget heading="Исходящие звонки / недозвон"
                      desc="Статистика звонков за сегодня"
                      placeComponents={<Value text="27 / 4"
                                              size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                                                       icon={<IconCallOut40/>}/>}/>}
              />

            </td>
          </tr>


        </tbody>

        {/* Page - Контакты заявителей
        ========================================================================== */}

        <thead>
          <tr>
            <th><small>Page: Контакты заявителей</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Входящие / исходящие звонки*/}
          <tr>
            <td>

              <Widget heading="Входящие / исходящие звонки"
                      desc="Статистика за всё время"
                      placeComponents={<Value text="27 / 15"
                                              size={DataAttrSize.L}/>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconCallInOut40/>}/>}/>}
              />

            </td>
          </tr>
        </tbody>

        {/* Page - Судебные участки
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Дебиторка</small></th>
          </tr>
          <tr>
            <th><small>Page: Судебные участки</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Судебные участки*/}
          <tr>
            <td>

              <Widget heading="Судебные участки"
                      desc="Подтверждённые / неподтверждённые"
                      placeComponents={<Value text="15 / 01"
                                                size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconScale40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Всего домов /квартир*/}
          <tr>
            <td>

              <Widget heading="Всего домов /квартир"
                      desc="По всем участкам"
                      placeComponents={<Value text="75 / 1500"
                                              size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconBuildings40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Заведённых дел*/}
          <tr>
            <td>

              <Widget heading="Заведённых дел"
                      desc="Общее кол-во / в этом месяце"
                      placeComponents={<Value text="27 / 15"
                                              size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconCase40/>}/>}/>}
              />

            </td>
          </tr>

        </tbody>


        {/* Page - Лицевые счета
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Page: Лицевые счета</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Собственники с неполными данными*/}
          <tr>
            <td>

              <Widget heading="Собственники с неполными данными"
                      desc="По любому из документов"
                      placeComponents={<><Value text="256"
                                                size={DataAttrSize.L} />
                        <ButtonPrimary text="Показать"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconFileAlert40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Можно отпправить в работу*/}
          <tr>
            <td>

              <Widget heading="Можно отпправить в работу"
                      desc="Документы готовы для передачи в суд"
                      placeComponents={<><Value text="25"
                                                size={DataAttrSize.L} />
                        <ButtonPrimary text="Показать"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconFileCheck40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Общая задолженность*/}
          <tr>
            <td>

              <Widget heading="Общая задолженность"
                      desc="Всех собственников данного помещения"
                      placeComponents={<Value text="27 500₽"
                                                size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconCoins40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Период задолженности*/}
          <tr>
            <td>

              <Widget heading="Период задолженности"
                      desc="Со дня подачи документов УК или подобный текст"
                      placeComponents={<Value text="12 янв. 2020 — 20 фев. 2021"
                                                size={DataAttrSize.S} />
                      }
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconCalendarTime40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Запросить выписку из Росреестра*/}
          <tr>
            <td>

              <Widget heading="Запросить выписку из Росреестра"
                      desc="Срок: 1-3 рабочих дней"
                      placeComponents={<><Value text="150₽"
                                                size={DataAttrSize.S} />
                        <ButtonPrimary text="Запросить"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconRosreestr40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Загрузить с устройства*/}
          <tr>
            <td>

              <Widget heading="Загрузить с устройства"
                      desc="CSV таблица с данными, zip не более 1Мб"
                      placeComponents={<ButtonPrimary text="Укажите файл"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconUpload40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Долг собственника*/}
          <tr>
            <td>

              <Widget heading="Долг собственника"
                      desc="На основе его доли в помещении"
                      placeComponents={<Value text="7 500₽"
                                              size={DataAttrSize.L} />
                      }
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconCoins40/>}/>}/>}
              />

            </td>
          </tr>

        </tbody>

        {/* Page - Мировые суды
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Page: Мировые суды</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Удовлетворённые иски*/}
          <tr>
            <td>

              <Widget heading="Удовлетворённые иски"
                      desc="Можно приступать к взысканию долга"
                      placeComponents={<><Value text="35"
                                                size={DataAttrSize.L} />
                        <ButtonPrimary text="Показать"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                                                       icon={<IconCheckCircle40/>}/>}/>}
              />

            </td>
          </tr>

          {/*Отклонённые иски*/}
          <tr>
            <td>

              <Widget heading="Отклонённые иски"
                      desc="Эти иски можно, например, отправлять в архив"
                      placeComponents={<><Value text="14"
                                                size={DataAttrSize.L} />
                        <ButtonPrimary text="Показать"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.RED_PRIMARY}
                                                       icon={<IconCanselCircle40/>}/>}/>}
              />

            </td>
          </tr>

        </tbody>


        {/* Page - Взыскание долга
            ========================================================================== */}

        <thead>
          <tr>
            <th><small>Page: Взыскание долга</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Общая сумма к взысканию*/}
          <tr>
            <td>

              <Widget heading="Общая сумма к взысканию"
                      desc="По всем удовлетворённым искам или подобный текст"
                      placeComponents={<Value text="2 450 020₽"
                                                size={DataAttrSize.L} />}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                       icon={<IconCoins40/>}/>}/>}
              />

            </td>
          </tr>

          {/*ИЛ на руках*/}
          <tr>
            <td>

              <Widget heading="ИЛ на руках"
                      desc="Нужно передать приставам или в банк"
                      placeComponents={<><Value text="27"
                                                size={DataAttrSize.L} />
                        <ButtonPrimary text="Показать"
                                       size={DataAttrSize.S}
                                       colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/></>}
                      placeIcon={<IconWrap size={DataAttrSize.XL}
                                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                           icon={<Icon size={DataAttrSize.L}
                                                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                       icon={<IconCertificate40/>}/>}/>}
              />

            </td>
          </tr>
        </tbody>
      </table>
    </section>


  )
};

export default WidgetItems;
