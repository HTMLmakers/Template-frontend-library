import React from "react";

import {DataAttrColorTheme, DataAttrSize, ElementPosition} from "../../../../common/services/consts/common";
import Tooltip from "../../../../common/components/ui-kit/Tooltip/Tooltip";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import ElementsWrap from "../../../../common/components/ui-kit/wraps/ElementsWrap/ElementsWrap";


const TooltipsPartial = () => {
  return (

    <section className="components-library__element tooltips-library">
      <h3 className="components-library__heading h3">
        Tooltips
      </h3>

      {/* ==========================================================================
         Tooltip hover
         ========================================================================== */}

      <table className="components-library__type">

        {/* Color theme: blue-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Tooltip hover</th>
            <th colSpan="3"><small>Color theme: blue-primary</small></th>
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

                <ElementsWrap>

                  <Tooltip colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Тултип (left)"
                           position={ElementPosition.LEFT}
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Left"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Тултип (top)"
                           position={ElementPosition.TOP}
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Top"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Тултип (bottom)"
                           position={ElementPosition.BOTTOM}
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Bottom"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Тултип (right)"
                           position={ElementPosition.RIGHT}
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Right"
                    />
                  </Tooltip>

                </ElementsWrap>

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

        {/* Color theme: white
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: white</small></th>
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

                <ElementsWrap>

                  <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                           text="Тултип (left)"
                           position={ElementPosition.LEFT}
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Left"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                           text="Тултип (top)"
                           position={ElementPosition.TOP}
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Top"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                           text="Тултип (bottom)"
                           position={ElementPosition.BOTTOM}
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Bottom"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                           text="Тултип (right)"
                           position={ElementPosition.RIGHT}
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Right"
                    />
                  </Tooltip>

                </ElementsWrap>

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

        {/* Color theme: orange-primary
          ========================================================================== */}
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
        <tbody>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ElementsWrap>

                  <Tooltip colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                           text="Тултип (left)"
                           position={ElementPosition.LEFT}
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Left"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                           text="Тултип (top)"
                           position={ElementPosition.TOP}
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Top"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                           text="Тултип (bottom)"
                           position={ElementPosition.BOTTOM}
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Bottom"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                           text="Тултип (right)"
                           position={ElementPosition.RIGHT}
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Right"
                    />
                  </Tooltip>

                </ElementsWrap>

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

      <table className="components-library__type">

        {/* Color theme: blue-primary
        ========================================================================== */}

        <thead>
          <tr>
            <th className="name">Tooltip click</th>
            <th colSpan="3"><small>Color theme: blue-primary</small></th>
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

                <ElementsWrap>

                  <Tooltip colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nam ut? Adipisci aliquam aliquid autem dicta ducimus fuga perferendis voluptas. Cumque ducimus error illo iure omnis quia similique tenetur voluptates!"
                           position={ElementPosition.LEFT}
                           isClickable
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Left"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nam ut? Adipisci aliquam aliquid autem dicta ducimus fuga perferendis voluptas. Cumque ducimus error illo iure omnis quia similique tenetur voluptates!"
                           position={ElementPosition.TOP}
                           isClickable
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Top"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nam ut? Adipisci aliquam aliquid autem dicta ducimus fuga perferendis voluptas. Cumque ducimus error illo iure omnis quia similique tenetur voluptates!"
                           position={ElementPosition.BOTTOM}
                           isClickable
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Bottom"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nam ut? Adipisci aliquam aliquid autem dicta ducimus fuga perferendis voluptas. Cumque ducimus error illo iure omnis quia similique tenetur voluptates!"
                           position={ElementPosition.RIGHT}
                           isClickable
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Right"
                    />
                  </Tooltip>

                </ElementsWrap>

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

        {/* Color theme: white
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: white</small></th>
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

                <ElementsWrap>

                  <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nam ut? Adipisci aliquam aliquid autem dicta ducimus fuga perferendis voluptas. Cumque ducimus error illo iure omnis quia similique tenetur voluptates!"
                           position={ElementPosition.LEFT}
                           isClickable
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Left"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nam ut? Adipisci aliquam aliquid autem dicta ducimus fuga perferendis voluptas. Cumque ducimus error illo iure omnis quia similique tenetur voluptates!"
                           position={ElementPosition.TOP}
                           isClickable
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Top"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nam ut? Adipisci aliquam aliquid autem dicta ducimus fuga perferendis voluptas. Cumque ducimus error illo iure omnis quia similique tenetur voluptates!"
                           position={ElementPosition.BOTTOM}
                           isClickable
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Bottom"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.WHITE}
                           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nam ut? Adipisci aliquam aliquid autem dicta ducimus fuga perferendis voluptas. Cumque ducimus error illo iure omnis quia similique tenetur voluptates!"
                           position={ElementPosition.RIGHT}
                           isClickable
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Right"
                    />
                  </Tooltip>

                </ElementsWrap>

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

        {/* Color theme: orange-primary
          ========================================================================== */}
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
        <tbody>

          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ElementsWrap>

                  <Tooltip colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nam ut? Adipisci aliquam aliquid autem dicta ducimus fuga perferendis voluptas. Cumque ducimus error illo iure omnis quia similique tenetur voluptates!"
                           position={ElementPosition.LEFT}
                           isClickable
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Left"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nam ut? Adipisci aliquam aliquid autem dicta ducimus fuga perferendis voluptas. Cumque ducimus error illo iure omnis quia similique tenetur voluptates!"
                           position={ElementPosition.TOP}
                           isClickable
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Top"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nam ut? Adipisci aliquam aliquid autem dicta ducimus fuga perferendis voluptas. Cumque ducimus error illo iure omnis quia similique tenetur voluptates!"
                           position={ElementPosition.BOTTOM}
                           isClickable
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Bottom"
                    />
                  </Tooltip>

                  <Tooltip colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nam ut? Adipisci aliquam aliquid autem dicta ducimus fuga perferendis voluptas. Cumque ducimus error illo iure omnis quia similique tenetur voluptates!"
                           position={ElementPosition.RIGHT}
                           isClickable
                  >
                    <ButtonPrimary size={DataAttrSize.S}
                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                   text="Right"
                    />
                  </Tooltip>

                </ElementsWrap>

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

export default TooltipsPartial;



