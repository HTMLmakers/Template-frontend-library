import React, {useContext, useState} from "react";

import {ContextPopups} from "../../../App";
import {DataAttrColorTheme, DataAttrSize, MessageType} from "../../../../common/services/consts/common";
import {createConfirmationData} from "../../../../common/components/ui-kit/popups/ConfirmationPopup/ConfirmationPopup";
import {setInformationData} from "../../../../common/components/ui-kit/popups/InformationPopup/InformationPopup";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";

import ExampleDefaultPopup from "../../examples/examplePopups/ExampleDefaultPopup/ExampleDefaultPopup";
import ExampleNoCloseButtonsPopup from "../../examples/examplePopups/ExampleNoCloseButtonsPopup/ExampleNoCloseButtonsPopup";
import ExampleNoClosePopup from "../../examples/examplePopups/ExampleNoClosePopup/ExampleNoClosePopup";
import ExampleHeaderControlItemsPopup from "../../examples/examplePopups/ExampleHeaderControlItemsPopup/ExampleHeaderControlItemsPopup";
import ExampleExtendedHeaderPopup from "../../examples/examplePopups/ExampleExtendedHeaderPopup/ExampleExtendedHeaderPopup";
import ExampleMoreButtonsBeforePopup from "../../examples/examplePopups/ExampleMoreButtonsBeforePopup/ExampleMoreButtonsBeforePopup";
import ExampleMoreButtonsAfterPopup from "../../examples/examplePopups/ExampleMoreButtonsAfterPopup/ExampleMoreButtonsAfterPopup";
import ExampleCustomWidthPopup from "../../examples/examplePopups/ExampleCustomWidthPopup/ExampleCustomWidthPopup";
import ExampleMoreButtonsPopup from "../../examples/examplePopups/ExampleMoreButtonsPopup/ExampleMoreButtonsPopup";


const PopupsPartial = () => {

  const [popupsState, setPopupsState] = useContext(ContextPopups);
  const [isDefaultPopup, setIsDefaultPopup] = useState(false);
  const [isCustomWidthPopup, setIsCustomWidthPopup] = useState(false);
  const [isNoCloseButtonsPopup, setIsNoCloseButtonsPopup] = useState(false);
  const [isNoClosePopup, setIsNoClosePopup] = useState(false);
  const [isHeaderControlItemsPopup, setIsHeaderControlItemsPopup] = useState(false);
  const [isExtendedHeaderPopup, setIsExtendedHeaderPopup] = useState(false);
  const [isMoreButtonsBeforePopup, setIsMoreButtonsBeforePopup] = useState(false);
  const [isMoreButtonsAfterPopup, setIsMoreButtonsAfterPopup] = useState(false);
  const [isMoreButtonsPopup, setIsMoreButtonsPopup] = useState(false);

  return (
    <section className="components-library__element">
      <h3 className="components-library__heading h3">
        Popups
      </h3>

      {/* ==========================================================================
          Block UI (Loader)
          ========================================================================== */}
      <table className="components-library__type">
        <thead>
          <tr>
            <th className="name">Block UI</th>
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

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Loader"
                             handleClick={() => {
                               setPopupsState({...popupsState, isBlockUi: true})
                               setTimeout(() => {
                                 setPopupsState({...popupsState, isBlockUi: false})
                               }, 2000)
                             }}
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
          Confirmation popup
          ========================================================================== */}
      <table className="components-library__type">
        <thead>
          <tr>
            <th className="name">Confirmation</th>
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

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Default"
                             handleClick={() => {
                               setPopupsState({
                                 ...popupsState,
                                 ...createConfirmationData(
                                   `Выход`,
                                   `Вы действительно хотите выйти?`,
                                   null,
                                   null,
                                   () => console.log(`sadSD`)
                                 )
                               })
                             }}
              />

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Error"
                             handleClick={() => {
                               setPopupsState({
                                 ...popupsState,
                                 ...createConfirmationData(
                                   `Удалить`,
                                   `Вы действительно хотите удалить компанию?`,
                                   null,
                                   MessageType.ERROR,
                                   () => console.log(`sadSD`)
                                 )
                               })
                             }}
              />

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Success"
                             handleClick={() => {
                               setPopupsState({
                                 ...popupsState,
                                 ...createConfirmationData(
                                   `Добавить`,
                                   `Вы действительно хотите добаавить компанию?`,
                                   null,
                                   MessageType.SUCCESS,
                                   () => console.log(`sadSD`)
                                 )
                               })
                             }}
              />

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Warning"
                             handleClick={() => {
                               setPopupsState({
                                 ...popupsState,
                                 ...createConfirmationData(
                                   `Что-то сделать`,
                                   `Вы действительно хотите что-то сделать?`,
                                   null,
                                   MessageType.WARNING,
                                   () => console.log(`sadSD`)
                                 )
                               })
                             }}
              />

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Info"
                             handleClick={() => {
                               setPopupsState({
                                 ...popupsState,
                                 ...createConfirmationData(
                                   `Что-то сделать`,
                                   `Вы действительно хотите что-то сделать?`,
                                   null,
                                   MessageType.INFO,
                                   () => console.log(`sadSD`)
                                 )
                               })
                             }}
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
          Information popup
          ========================================================================== */}
      <table className="components-library__type">
        <thead>
          <tr>
            <th className="name">Information</th>
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

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Default"
                             handleClick={() => {
                               setPopupsState({
                                 ...popupsState,
                                 ...setInformationData(
                                   `Информационное сообщение`,
                                   `Эксперты утверждают, что реализация намеченных плановых заданий одухотворила всех причастных`,
                                 )
                               })
                             }}
              />

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Error"
                             handleClick={() => {
                               setPopupsState({
                                 ...popupsState,
                                 ...setInformationData(
                                   `Информационное сообщение`,
                                   `Эксперты утверждают, что реализация намеченных плановых заданий одухотворила всех причастных`,
                                   null,
                                   MessageType.ERROR,
                                 )
                               })
                             }}
              />

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Success"
                             handleClick={() => {
                               setPopupsState({
                                 ...popupsState,
                                 ...setInformationData(
                                   `Информационное сообщение`,
                                   `Эксперты утверждают, что реализация намеченных плановых заданий одухотворила всех причастных`,
                                   null,
                                   MessageType.SUCCESS,
                                 )
                               })
                             }}
              />

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Warning"
                             handleClick={() => {
                               setPopupsState({
                                 ...popupsState,
                                 ...setInformationData(
                                   `Информационное сообщение`,
                                   `Эксперты утверждают, что реализация намеченных плановых заданий одухотворила всех причастных`,
                                   null,
                                   MessageType.WARNING,
                                 )
                               })
                             }}
              />

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Info"
                             handleClick={() => {
                               setPopupsState({
                                 ...popupsState,
                                 ...setInformationData(
                                   `Информационное сообщение`,
                                   `Эксперты утверждают, что реализация намеченных плановых заданий одухотворила всех причастных`,
                                   null,
                                   MessageType.INFO,
                                 )
                               })
                             }}
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
          Custom popup
          ========================================================================== */}
      <table className="components-library__type">

        {/* Default
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Custom</th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">Default</td>

            {/*L*/}
            <td>

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Default"
                             handleClick={() => setIsDefaultPopup(true)}
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

        {/* Custom width
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">Custom width</td>

            {/*L*/}
            <td>

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="CustomWidth"
                             handleClick={() => setIsCustomWidthPopup(true)}
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

        {/* isHideCloseButtons, isHideClose
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">isHideCloseButtons, <br/> isHideClose</td>

            {/*L*/}
            <td>

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="isHideCloseButtons"
                             handleClick={() => setIsNoCloseButtonsPopup(true)}
              />

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="isHideClose"
                             handleClick={() => setIsNoClosePopup(true)}
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

        {/* headerControlItems
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">headerControlItems</td>

            {/*L*/}
            <td>

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="headerControlItems"
                             handleClick={() => setIsHeaderControlItemsPopup(true)}
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

        {/* extended header
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">extended header</td>

            {/*L*/}
            <td>

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="кнопка"
                             handleClick={() => setIsExtendedHeaderPopup(true)}
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

        {/* More Buttons Before
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">buttonsBeforeComponent</td>

            {/*L*/}
            <td>

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Кнопка"
                             handleClick={() => setIsMoreButtonsBeforePopup(true)}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>

        {/* More Buttons After
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">buttonsAfterComponent</td>

            {/*L*/}
            <td>

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Кнопка"
                             handleClick={() => setIsMoreButtonsAfterPopup(true)}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>

        {/* More Buttons After
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">more Buttons</td>

            {/*L*/}
            <td>

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             text="Кнопка"
                             handleClick={() => setIsMoreButtonsPopup(true)}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>


      <ExampleDefaultPopup isOpen={isDefaultPopup}
                           close={() => setIsDefaultPopup(false)}
      />

      <ExampleCustomWidthPopup isOpen={isCustomWidthPopup}
                           close={() => setIsCustomWidthPopup(false)}
      />

      <ExampleNoCloseButtonsPopup isOpen={isNoCloseButtonsPopup}
                           close={() => setIsNoCloseButtonsPopup(false)}
      />

      <ExampleNoClosePopup isOpen={isNoClosePopup}
                           close={() => setIsNoClosePopup(false)}
      />

      <ExampleHeaderControlItemsPopup isOpen={isHeaderControlItemsPopup}
                           close={() => setIsHeaderControlItemsPopup(false)}
      />

      <ExampleExtendedHeaderPopup isOpen={isExtendedHeaderPopup}
                                      close={() => setIsExtendedHeaderPopup(false)}
      />

      <ExampleMoreButtonsBeforePopup isOpen={isMoreButtonsBeforePopup}
                                     close={() => setIsMoreButtonsBeforePopup(false)}
      />

      <ExampleMoreButtonsAfterPopup isOpen={isMoreButtonsAfterPopup}
                                     close={() => setIsMoreButtonsAfterPopup(false)}
      />

      <ExampleMoreButtonsPopup isOpen={isMoreButtonsPopup}
                                    close={() => setIsMoreButtonsPopup(false)}
      />
    </section>

  )
};

export default PopupsPartial;
