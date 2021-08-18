import React from "react";

import {DataAttrColorTheme, DataAttrSize, ElementPosition} from "../../../../common/services/consts/common";
import SectionPrimary from "../../../../common/components/ui-kit/wraps/SectionPrimary/SectionPrimary";
import SectionSecondary from "../../../../common/components/ui-kit/wraps/SectionSecondary/SectionSecondary";
import ElementsWrap from "../../../../common/components/ui-kit/wraps/ElementsWrap/ElementsWrap";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import LinkPrimary from "../../../../common/components/ui-kit/links/LinkPrimary/LinkPrimary";
import IconWrap from "../../../../common/components/ui-kit/icons/IconWrap/IconWrap";
import Tag from "../../../../common/components/ui-kit/info-tags/Tag/Tag";
import Status from "../../../../common/components/ui-kit/info-tags/Status/Status";

import {ReactComponent as IconPlus24} from "../../../../common/assets/img/icons/svg/24/icon-plus-24.svg";
import {ReactComponent as IconEdit16} from "../../../../common/assets/img/icons/svg/16/icon-edit-16.svg";
import {ReactComponent as IconUser24} from "../../../../common/assets/img/icons/svg/24/icon-user-24.svg";
import {ReactComponent as IconCheck16} from "../../../../common/assets/img/icons/svg/16/icon-check-16.svg";
import MarkPrimary from "../../../../common/components/ui-kit/marks/MarkPrimary/MarkPrimary";
import Priority, {DataAttrTypePriority} from "../../../../common/components/ui-kit/info-tags/Priority/Priority";
import {ReactComponent as IconTrash24} from "../../../../common/assets/img/icons/svg/24/icon-trash-24.svg";
import LinkSecondary from "../../../../common/components/ui-kit/links/LinkSecondary/LinkSecondary";


const WrapPartial = () => {
  return (
    <section className="components-library__element wraps-library">
      <h3 className="components-library__heading h3">
        Wraps (sections)
      </h3>

      {/* ==========================================================================
         Section primary
         ========================================================================== */}

      <table className="components-library__type">

        <thead>
          <tr>
            <th className="name">Section primary</th>
            <th colSpan="3"><small>Color theme: grey-quaternary</small></th>
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

              <SectionPrimary size={DataAttrSize.L}>
                <p>Content SectionPrimary. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda cumque dolore doloremque expedita harum maiores nobis omnis placeat porro quam quibusdam, sit voluptas. Ab doloribus ea eius labore totam!</p>
              </SectionPrimary>

            </td>

            {/*M*/}
            <td>

              <SectionPrimary size={DataAttrSize.M}>
                <p>Content SectionPrimary. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda cumque dolore doloremque expedita harum maiores nobis omnis placeat porro quam quibusdam, sit voluptas. Ab doloribus ea eius labore totam!</p>
              </SectionPrimary>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         Section secondary
         ========================================================================== */}

      <table className="components-library__type">

        <thead>
          <tr>
            <th className="name">Section secondary</th>
            <th colSpan="3"><small>Color theme: white</small></th>
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
            <td className="name"></td>

            {/*L*/}
            <td>

              <SectionSecondary size={DataAttrSize.L}>
                <p>Content SectionPrimary. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda cumque dolore doloremque expedita harum maiores nobis omnis placeat porro quam quibusdam, sit voluptas. Ab doloribus ea eius labore totam!</p>
              </SectionSecondary>

            </td>

            {/*M*/}
            <td>

              <SectionSecondary size={DataAttrSize.M}>
                <p>Content SectionPrimary. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda cumque dolore doloremque expedita harum maiores nobis omnis placeat porro quam quibusdam, sit voluptas. Ab doloribus ea eius labore totam!</p>
              </SectionSecondary>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         Elements Wrap
         ========================================================================== */}

      {/* XL
          ========================================================================== */}
      <table className="components-library__type">

        {/*---------- wrap ----------*/}
        <thead>
          <tr>
            <th className="name">Elements wrap</th>
            <th colSpan="3"><small>XL</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td colSpan="3">
              <div className="wrap wrap--break">

                <ElementsWrap size={DataAttrSize.XL}>

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                  <IconWrap size={DataAttrSize.M}
                            colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                  />

                  <MarkPrimary value="+222"
                               size={DataAttrSize.XXL}
                               colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                  />

                  <LinkSecondary text="Link secondary"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon icon={<IconTrash24 />} />}
                  />

                  <Priority size={DataAttrSize.L}
                            type={DataAttrTypePriority.LOW}
                  />

                </ElementsWrap>

              </div>
            </td>
          </tr>
        </tbody>

        {/*---------- noWrap ----------*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">noWrap</td>
            <td colSpan="3">
              <div className="wrap">

                <ElementsWrap size={DataAttrSize.XL}
                              isNoWrap>

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                  <IconWrap size={DataAttrSize.M}
                            colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                  />

                  <MarkPrimary value="+222"
                               size={DataAttrSize.XXL}
                               colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                  />

                  <Priority size={DataAttrSize.L}
                            type={DataAttrTypePriority.LOW}
                  />

                </ElementsWrap>

              </div>
            </td>
          </tr>
        </tbody>

        {/*---------- vertical ----------*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th><small>Position: Left</small></th>
            <th><small>Position: Center</small></th>
            <th><small>Position: Right</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">vertical</td>
            <td>
              <div className="wrap">

                <ElementsWrap size={DataAttrSize.XL}
                              direction="vertical"
                              align={ElementPosition.LEFT}
                >

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                </ElementsWrap>

              </div>
            </td>

            <td>
              <div className="wrap">

                <ElementsWrap size={DataAttrSize.XL}
                              direction="vertical"
                              align={ElementPosition.CENTER}
                >

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                </ElementsWrap>

              </div>
            </td>

            <td>
              <div className="wrap">

                <ElementsWrap size={DataAttrSize.XL}
                              direction="vertical"
                              align={ElementPosition.RIGHT}
                >

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                </ElementsWrap>

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* L
          ========================================================================== */}
      <table className="components-library__type">

        {/*---------- wrap ----------*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>L</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td colSpan="3">
              <div className="wrap wrap--break">

                <ElementsWrap size={DataAttrSize.L}>

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                  <IconWrap size={DataAttrSize.M}
                            colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                  />

                  <MarkPrimary value="+222"
                               size={DataAttrSize.XXL}
                               colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                  />

                  <LinkSecondary text="Link secondary"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon icon={<IconTrash24 />} />}
                  />

                  <Priority size={DataAttrSize.L}
                            type={DataAttrTypePriority.LOW}
                  />

                </ElementsWrap>

              </div>
            </td>
          </tr>
        </tbody>

        {/*---------- noWrap ----------*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">noWrap</td>
            <td colSpan="3">
              <div className="wrap">

                <ElementsWrap size={DataAttrSize.L}
                              isNoWrap>

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                  <IconWrap size={DataAttrSize.M}
                            colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                  />

                  <MarkPrimary value="+222"
                               size={DataAttrSize.XXL}
                               colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                  />

                  <Priority size={DataAttrSize.L}
                            type={DataAttrTypePriority.LOW}
                  />

                </ElementsWrap>

              </div>
            </td>
          </tr>
        </tbody>

        {/*---------- vertical ----------*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th><small>Position: Left</small></th>
            <th><small>Position: Center</small></th>
            <th><small>Position: Right</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">vertical</td>
            <td>
              <div className="wrap">

                <ElementsWrap size={DataAttrSize.L}
                              direction="vertical"
                              align={ElementPosition.LEFT}
                >

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                </ElementsWrap>

              </div>
            </td>

            <td>
              <div className="wrap">

                <ElementsWrap size={DataAttrSize.L}
                              direction="vertical"
                              align={ElementPosition.CENTER}
                >

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                </ElementsWrap>

              </div>
            </td>

            <td>
              <div className="wrap">

                <ElementsWrap size={DataAttrSize.L}
                              direction="vertical"
                              align={ElementPosition.RIGHT}
                >

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                </ElementsWrap>

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* M
          ========================================================================== */}
      <table className="components-library__type">

        {/*---------- wrap ----------*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>M</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td colSpan="3">
              <div className="wrap wrap--break">

                <ElementsWrap size={DataAttrSize.M}>

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                  <IconWrap size={DataAttrSize.M}
                            colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                  />

                  <MarkPrimary value="+222"
                               size={DataAttrSize.XXL}
                               colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                  />

                  <LinkSecondary text="Link secondary"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon icon={<IconTrash24 />} />}
                  />

                  <Priority size={DataAttrSize.L}
                            type={DataAttrTypePriority.LOW}
                  />

                </ElementsWrap>

              </div>
            </td>
          </tr>
        </tbody>

        {/*---------- noWrap ----------*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">noWrap</td>
            <td colSpan="3">
              <div className="wrap">

                <ElementsWrap size={DataAttrSize.M}
                              isNoWrap>

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                  <IconWrap size={DataAttrSize.M}
                            colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                  />

                  <MarkPrimary value="+222"
                               size={DataAttrSize.XXL}
                               colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                  />

                  <Priority size={DataAttrSize.L}
                            type={DataAttrTypePriority.LOW}
                  />

                </ElementsWrap>

              </div>
            </td>
          </tr>
        </tbody>

        {/*---------- vertical ----------*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th><small>Position: Left</small></th>
            <th><small>Position: Center</small></th>
            <th><small>Position: Right</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">vertical</td>
            <td>
              <div className="wrap">

                <ElementsWrap size={DataAttrSize.M}
                              direction="vertical"
                              align={ElementPosition.LEFT}
                >

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                </ElementsWrap>

              </div>
            </td>

            <td>
              <div className="wrap">

                <ElementsWrap size={DataAttrSize.M}
                              direction="vertical"
                              align={ElementPosition.CENTER}
                >

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                </ElementsWrap>

              </div>
            </td>

            <td>
              <div className="wrap">

                <ElementsWrap size={DataAttrSize.M}
                              direction="vertical"
                              align={ElementPosition.RIGHT}
                >

                  <ButtonPrimary size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                 placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <LinkPrimary text="Link"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                  />

                  <IconWrap size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                  />

                  <ButtonPrimary text="Button"
                                 size={DataAttrSize.L}
                                 colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                  />

                  <Tag size={DataAttrSize.L}
                       colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                       text="Tag"
                  />

                  <Status text="Status orange"
                          size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                          placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                  />

                </ElementsWrap>

              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default WrapPartial;
