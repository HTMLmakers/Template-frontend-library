import React from "react";

import Desc from "../../../../common/components/ui-kit/texts/Desc/Desc";
import Value from "../../../../common/components/ui-kit/texts/Value/Value";
import {DataAttrHeadingLevel, DataAttrSize} from "../../../../common/services/consts/common";
import Heading from "../../../../common/components/ui-kit/texts/Heading/Heading";


const TextsPartial = () => {
  return (
    <section className="components-library__element texts-library">
      <h3 className="components-library__heading h3">
        Texts
      </h3>

      {/* Heading
          ========================================================================== */}
      <table className="components-library__type">
        <thead>
          <tr>
            <th className="name">Heading</th>
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

          {/*H1 ----------*/}
          <tr>
            <td className="name">H1</td>

            {/*L*/}
            <td>

              <Heading text="Heading 1"
                       level={DataAttrHeadingLevel.LEVEL_1}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>

          {/*H2 ----------*/}
          <tr>
            <td className="name">H2</td>

            {/*L*/}
            <td>

              <Heading text="Heading 2"
                       level={DataAttrHeadingLevel.LEVEL_2}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>

          {/*H3 ----------*/}
          <tr>
            <td className="name">H3</td>

            {/*L*/}
            <td>

              <Heading text="Heading 3"
                       level={DataAttrHeadingLevel.LEVEL_3}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>

          {/*H4 ----------*/}
          <tr>
            <td className="name">H4</td>

            {/*L*/}
            <td>

              <Heading text="Heading 4"
                       level={DataAttrHeadingLevel.LEVEL_4}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>

          {/*H5 ----------*/}
          <tr>
            <td className="name">H5</td>

            {/*L*/}
            <td>

              <Heading text="Heading 5"
                       level={DataAttrHeadingLevel.LEVEL_5}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>

          {/*H6 ----------*/}
          <tr>
            <td className="name">H6</td>

            {/*L*/}
            <td>

              <Heading text="Heading 6"
                       level={DataAttrHeadingLevel.LEVEL_6}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>

          {/*H7 ----------*/}
          <tr>
            <td className="name">H7</td>

            {/*L*/}
            <td>

              <Heading text="Heading 7"
                       level={DataAttrHeadingLevel.LEVEL_7}
                       customTagName="h6"
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

      {/* Description
          ========================================================================== */}
      <table className="components-library__type">

        {/*XS ----------*/}
        <thead>
          <tr>
            <th className="name">Desc</th>
            <th><small>XS</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>

                <Desc text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi doloremque enim error esse et facere fuga in ipsa minus necessitatibus odit optio, possimus, quis repellendus rerum sequi tempore, voluptate."
                      size={DataAttrSize.XS}
                />

                <Desc text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi doloremque enim error esse et facere fuga in ipsa minus necessitatibus odit optio, possimus, quis repellendus rerum sequi tempore, voluptate."
                      size={DataAttrSize.XS}
                      weight="bold"
                />

            </td>
          </tr>
        </tbody>

        {/*S ----------*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>

              <Desc text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi doloremque enim error esse et facere fuga in ipsa minus necessitatibus odit optio, possimus, quis repellendus rerum sequi tempore, voluptate."
                    size={DataAttrSize.S}
              />

            </td>
          </tr>
        </tbody>

        {/*M ----------*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th><small>M</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>

              <Desc text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi doloremque enim error esse et facere fuga in ipsa minus necessitatibus odit optio, possimus, quis repellendus rerum sequi tempore, voluptate."
                    size={DataAttrSize.M}
              />

            </td>
          </tr>
        </tbody>

        {/*L ----------*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>

              <Desc text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi doloremque enim error esse et facere fuga in ipsa minus necessitatibus odit optio, possimus, quis repellendus rerum sequi tempore, voluptate."
                    size={DataAttrSize.L}
              />

            </td>
          </tr>
        </tbody>
      </table>

      {/* Value
          ========================================================================== */}
      <table className="components-library__type">

        <thead>
          <tr>
            <th className="name">Value</th>
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

              <Value size={DataAttrSize.L}
                     text="27663 ₽"
              />

            </td>

            {/*M*/}
            <td>

              <Value size={DataAttrSize.M}
                     text="27663 ₽"
              />

            </td>

            {/*S*/}
            <td>

              <Value size={DataAttrSize.S}
                     text="27663 ₽"
              />

            </td>
          </tr>
          <tr>
            <td className="name">title</td>

            {/*L*/}
            <td>

              <Value size={DataAttrSize.L}
                     title="Сумма"
                     text="27663₽"
              />

            </td>

            {/*M*/}
            <td>

              <Value size={DataAttrSize.M}
                     title="Сумма"
                     text="27663₽"
              />

            </td>

            {/*S*/}
            <td>

              <Value size={DataAttrSize.S}
                     title="Сумма"
                     text="27663₽"
              />

            </td>
          </tr>
          <tr>
            <td className="name">discount</td>

            {/*L*/}
            <td>

              <Value size={DataAttrSize.L}
                     value={27663}
                     text="₽"
                     discount={10}
              />

            </td>

            {/*M*/}
            <td>

              <Value size={DataAttrSize.M}
                     value={27663}
                     text="₽"
                     discount={10}
              />

            </td>

            {/*S*/}
            <td>

              <Value size={DataAttrSize.S}
                     value={27663}
                     text="₽"
                     discount={10}
              />

            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default TextsPartial;
