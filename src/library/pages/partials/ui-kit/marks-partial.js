import React from "react";

import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import MarkPrimary from "../../../../common/components/ui-kit/marks/MarkPrimary/MarkPrimary";


const MarksPartial = () => {
  return (
    <section className="components-library__element marks-library">
      <h3 className="components-library__heading h3">
        Marks
      </h3>

      {/* ==========================================================================
          Mark primary
          ========================================================================== */}

      <table className="components-library__type">

        {/* Color theme: gray-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">MarkPrimary</th>
            <th colSpan="7"><small>Color theme: gray-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XXXL</small></th>
            <th><small>XXL</small></th>
            <th><small>XL</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
            <th><small>XS</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>

            {/*XXXL – 48×48px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="+2"
                             size={DataAttrSize.XXXL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <MarkPrimary value="+22"
                             size={DataAttrSize.XXXL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

              </div>
            </td>

            {/*XXL – 40×40px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="+2"
                             size={DataAttrSize.XXL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <MarkPrimary value="+22"
                             size={DataAttrSize.XXL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <MarkPrimary value="+222"
                             size={DataAttrSize.XXL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

              </div>
            </td>

            {/*XL – 32×32px*/}
            <td>
              <div className="wrap">

                  <MarkPrimary value="+2"
                               size={DataAttrSize.XL}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                  />

                  <MarkPrimary value="+22"
                               size={DataAttrSize.XL}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                  />

                  <MarkPrimary value="+222"
                               size={DataAttrSize.XL}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                  />

              </div>
            </td>

            {/*L – 24×24px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

              </div>
            </td>

            {/*M – 20×20px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

              </div>
            </td>

            {/*S – 18×18px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

              </div>
            </td>

            {/*XS – 13×13px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.XS}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.XS}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.XS}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">markNotice</td>

            {/*XXXL – 48×48px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="+2"
                             size={DataAttrSize.XXXL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="+22"
                             size={DataAttrSize.XXXL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

              </div>
            </td>

            {/*XXL – 40×40px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="+2"
                             size={DataAttrSize.XXL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="+22"
                             size={DataAttrSize.XXL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="+222"
                             size={DataAttrSize.XXL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

              </div>
            </td>

            {/*XL – 32×32px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="+2"
                             size={DataAttrSize.XL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="+22"
                             size={DataAttrSize.XL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="+222"
                             size={DataAttrSize.XL}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

              </div>
            </td>

            {/*L – 24×24px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

              </div>
            </td>

            {/*M – 20×20px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

              </div>
            </td>

            {/*S – 18×18px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

              </div>
            </td>

            {/*XS – 13×13px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.XS}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.XS}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.XS}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isMarkNotice
                />

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: gray-tertiary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="7"><small>Color theme: gray-tertiary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XXXL</small></th>
            <th><small>XXL</small></th>
            <th><small>XL</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
            <th><small>XS</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>

            {/*XXXL – 48×48px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="+2"
                             size={DataAttrSize.XXXL}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="+22"
                             size={DataAttrSize.XXXL}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

              </div>
            </td>

            {/*XXL – 40×40px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="+2"
                             size={DataAttrSize.XXL}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="+22"
                             size={DataAttrSize.XXL}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="+222"
                             size={DataAttrSize.XXL}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

              </div>
            </td>

            {/*XL – 32×32px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="+2"
                             size={DataAttrSize.XL}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="+22"
                             size={DataAttrSize.XL}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="+222"
                             size={DataAttrSize.XL}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

              </div>
            </td>

            {/*L – 24×24px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

              </div>
            </td>

            {/*M – 20×20px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

              </div>
            </td>

            {/*S – 18×18px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

              </div>
            </td>

            {/*XS – 13×13px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.XS}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.XS}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.XS}
                             colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                />

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: orange-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="7"><small>Color theme: orange-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XXXL</small></th>
            <th><small>XXL</small></th>
            <th><small>XL</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
            <th><small>XS</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>

            {/*XXXL – 48×48px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="+2"
                             size={DataAttrSize.XXXL}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="+22"
                             size={DataAttrSize.XXXL}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

              </div>
            </td>

            {/*XXL – 40×40px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="+2"
                             size={DataAttrSize.XXL}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="+22"
                             size={DataAttrSize.XXL}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="+222"
                             size={DataAttrSize.XXL}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

              </div>
            </td>

            {/*XL – 32×32px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="+2"
                             size={DataAttrSize.XL}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="+22"
                             size={DataAttrSize.XL}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="+222"
                             size={DataAttrSize.XL}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

              </div>
            </td>

            {/*L – 24×24px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

              </div>
            </td>

            {/*M – 20×20px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

              </div>
            </td>

            {/*S – 18×18px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

              </div>
            </td>

            {/*XS – 13×13px*/}
            <td>
              <div className="wrap">

                <MarkPrimary value="4"
                             size={DataAttrSize.XS}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="40"
                             size={DataAttrSize.XS}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <MarkPrimary value="440"
                             size={DataAttrSize.XS}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default MarksPartial;
