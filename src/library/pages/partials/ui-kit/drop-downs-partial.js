import React from "react";

import {DataAttrColorTheme, DataAttrSize, ElementPosition} from "../../../../common/services/consts/common";
import DropDown from "../../../../common/components/ui-kit/DropDown/DropDown";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import ElementsWrap from "../../../../common/components/ui-kit/wraps/ElementsWrap/ElementsWrap";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import LinkSecondary from "../../../../common/components/ui-kit/links/LinkSecondary/LinkSecondary";

import {ReactComponent as IconTrash24} from "../../../../common/assets/img/icons/svg/24/icon-trash-24.svg";


const dropdownContent1 = [
  {
    title: "Заголовок",
    textControl: "Действие",
    handleClickControl: () => console.log('действие 1 списка'),
    lists: [
      {id: 1, content: <LinkSecondary text="Link secondary" placeBefore={<Icon icon={<IconTrash24 />} />} href="http://lk.reestrdoma.ru/reestrdoma/" />, disabled: false},
      {id: 2, content: <LinkSecondary text="Link secondary" placeBefore={<Icon icon={<IconTrash24 />} />} customTagName="button" handleClick={() => console.log('действие по клику на кнопку')} />, disabled: false},
      {id: 3, content: "Item 13", disabled: false},
      {id: 4, content: "Item 14", disabled: false},
      {id: 5, content: "Item 15", disabled: false},
    ]
  },
];

const dropdownContent2 = [
  {
    title: "Заголовок секции 1",
    textControl: "Действие 1",
    handleClickControl: () => console.log('действие 1 списка'),
    lists: [
      {id: 1, content: <LinkSecondary text="Link secondary" placeBefore={<Icon icon={<IconTrash24 />} />} href="http://lk.reestrdoma.ru/reestrdoma/" />, disabled: false},
      {id: 2, content: <LinkSecondary text="Link secondary" placeBefore={<Icon icon={<IconTrash24 />} />} customTagName="button" handleClick={() => console.log('действие по клику на кнопку')} />, disabled: false},
      {id: 3, content: "Item 13", disabled: false},
      {id: 4, content: "Item 14", disabled: false},
      {id: 5, content: "Item 15", disabled: false},
    ]
  },
  {
    title: "Заголовок секции 2",
    textControl: "Действие 2",
    handleClickControl: () => console.log('действие 2 списка'),
    lists: [
      {id: 1, content: "Item 21", disabled: false},
      {id: 2, content: "Item 22", disabled: false},
      {id: 3, content: "Item 23", disabled: false},
    ]
  },
];

const dropdownContent3 = [
  {
    title: "Заголовок секции 1",
    textControl: "Действие 1",
    handleClickControl: () => console.log('действие 1 списка'),
    lists: [
      {id: 1, content: "Item 11", disabled: true},
      {id: 2, content: "Item 12", disabled: false},
      {id: 3, content: "Item 13", disabled: false},
      {id: 4, content: "Item 14", disabled: true},
      {id: 5, content: "Item 15", disabled: false},
    ]
  },
  {
    title: "Заголовок секции 2",
    textControl: "Действие 2",
    handleClickControl: () => console.log('действие 2 списка'),
    lists: [
      {id: 1, content: "Item 21", disabled: false},
      {id: 2, content: "Item 22", disabled: false},
      {id: 3, content: "Item 23", disabled: true},
    ]
  },
];


const DropDownsPartial = () => {
  return (
    <section className="components-library__element drop-down-library">
      <h3 className="components-library__heading h3">
        DropDown
      </h3>

      {/* ==========================================================================
         Color theme: default
         ========================================================================== */}

      <table className="components-library__type">
        <thead>
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

        {/* Position
          ========================================================================== */}
        <tbody>
          <tr>
            <td className="name">Position</td>

            {/*L*/}
            <td>

              <ElementsWrap>

                <DropDown dropDownContent={dropdownContent1}
                          position={ElementPosition.LEFT}
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="Left"
                  />
                </DropDown>

                <DropDown dropDownContent={dropdownContent1}
                          position={ElementPosition.CENTER}
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="Center"
                  />
                </DropDown>

                <DropDown dropDownContent={dropdownContent1}
                          position={ElementPosition.RIGHT}
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="Right"
                  />
                </DropDown>

              </ElementsWrap>

            </td>

            {/*M*/}
            <td>

              <ElementsWrap>

                <DropDown size={DataAttrSize.M}
                          dropDownContent={dropdownContent1}
                          position={ElementPosition.LEFT}
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="Left"
                  />
                </DropDown>

                <DropDown size={DataAttrSize.M}
                          dropDownContent={dropdownContent1}
                          position={ElementPosition.CENTER}
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="Center"
                  />
                </DropDown>

                <DropDown size={DataAttrSize.M}
                          dropDownContent={dropdownContent1}
                          position={ElementPosition.RIGHT}
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="Right"
                  />
                </DropDown>

              </ElementsWrap>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Custom width
          ========================================================================== */}
        <tbody>
          <tr>
            <td className="name">Custom width</td>

            {/*L*/}
            <td>

              <DropDown dropDownContent={dropdownContent1}
                        position={ElementPosition.LEFT}
                        width="600px"
              >
                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               text="Custom width"
                />
              </DropDown>

            </td>

            {/*M*/}
            <td>

              <DropDown size={DataAttrSize.M}
                        dropDownContent={dropdownContent1}
                        position={ElementPosition.LEFT}
                        width="600px"
              >
                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               text="Custom width"
                />
              </DropDown>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Multisection
          ========================================================================== */}
        <tbody>
          <tr>
            <td className="name">Multisection</td>

            {/*L*/}
            <td>

              <DropDown dropDownContent={dropdownContent2}
                        position={ElementPosition.LEFT}
              >
                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               text="Multisection"
                />
              </DropDown>

            </td>

            {/*M*/}
            <td>

              <DropDown size={DataAttrSize.M}
                        dropDownContent={dropdownContent2}
                        position={ElementPosition.LEFT}
              >
                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               text="Multisection"
                />
              </DropDown>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* isDraggable
          ========================================================================== */}
        <tbody>
          <tr>
            <td className="name">isDraggable</td>

            {/*L*/}
            <td>

              <ElementsWrap>

                <DropDown dropDownContent={dropdownContent1}
                          position={ElementPosition.LEFT}
                          isDraggable
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="isDraggable"
                  />
                </DropDown>

                <DropDown dropDownContent={dropdownContent2}
                          position={ElementPosition.LEFT}
                          isDraggable
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="isDraggable мultisection"
                  />
                </DropDown>

              </ElementsWrap>

            </td>

            {/*M*/}
            <td>

              <ElementsWrap>

                <DropDown size={DataAttrSize.M}
                          dropDownContent={dropdownContent1}
                          position={ElementPosition.LEFT}
                          isDraggable
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="isDraggable"
                  />
                </DropDown>

                <DropDown size={DataAttrSize.M}
                          dropDownContent={dropdownContent2}
                          position={ElementPosition.LEFT}
                          isDraggable
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="isDraggable мultisection"
                  />
                </DropDown>

              </ElementsWrap>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* isScrollable
          ========================================================================== */}
        <tbody>
          <tr>
            <td className="name">isScrollable</td>

            {/*L*/}
            <td>

              <ElementsWrap>

                <DropDown dropDownContent={dropdownContent1}
                          position={ElementPosition.LEFT}
                          isScrollable
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="isScrollable"
                  />
                </DropDown>

                <DropDown dropDownContent={dropdownContent2}
                          position={ElementPosition.LEFT}
                          isScrollable
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="isScrollable мultisection"
                  />
                </DropDown>

              </ElementsWrap>

            </td>

            {/*M*/}
            <td>

              <ElementsWrap>

                <DropDown size={DataAttrSize.M}
                          dropDownContent={dropdownContent1}
                          position={ElementPosition.LEFT}
                          isScrollable
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="isScrollable"
                  />
                </DropDown>

                <DropDown size={DataAttrSize.M}
                          dropDownContent={dropdownContent2}
                          position={ElementPosition.LEFT}
                          isScrollable
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="isScrollable мultisection"
                  />
                </DropDown>

              </ElementsWrap>



            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* isSearchable
          ========================================================================== */}

        <tbody>
          <tr>
            <td className="name">isSearchable</td>

            {/*L*/}
            <td>

              <DropDown dropDownContent={dropdownContent1}
                        position={ElementPosition.LEFT}
                        isSearchable
              >
                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               text="isSearchable"
                />
              </DropDown>

            </td>

            {/*M*/}
            <td>

              <DropDown size={DataAttrSize.M}
                        dropDownContent={dropdownContent1}
                        position={ElementPosition.LEFT}
                        isSearchable
              >
                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               text="isSearchable"
                />
              </DropDown>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Disabled item
          ========================================================================== */}

        <tbody>
          <tr>
            <td className="name">Disabled item</td>

            {/*L*/}
            <td>

              <ElementsWrap>

                <DropDown dropDownContent={dropdownContent3}
                          position={ElementPosition.LEFT}
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="disabled"
                  />
                </DropDown>

                <DropDown dropDownContent={dropdownContent3}
                          position={ElementPosition.LEFT}
                          isDraggable
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="disabled isDraggable"
                  />
                </DropDown>

              </ElementsWrap>

            </td>

            {/*M*/}
            <td>

              <ElementsWrap>

                <DropDown size={DataAttrSize.M}
                          dropDownContent={dropdownContent3}
                          position={ElementPosition.LEFT}
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="disabled"
                  />
                </DropDown>

                <DropDown size={DataAttrSize.M}
                          dropDownContent={dropdownContent3}
                          position={ElementPosition.LEFT}
                          isDraggable
                >
                  <ButtonPrimary size={DataAttrSize.S}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 text="disabled мultisection"
                  />
                </DropDown>

              </ElementsWrap>

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

export default DropDownsPartial;
