import React from "react";

import {DataAttrBg, DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import Avatar from "../../../../common/components/common/Avatar/Avatar";

import Image from "../../../../common/assets/img/temp/avatar.jpg";


const AvatarPartial = () => {
  return (
    <section className="components-library__element avatar-library">
      <h3 className="components-library__heading h3">
        Avatar
      </h3>

      {/* ==========================================================================
         no Photo
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: blue-primary
          ========================================================================== */}

        {/*XXXXL – 128×128px*/}
        <thead>
          <tr>
            <th className="name">no Photo</th>
            <th colSpan="6"><small>Color theme: blue-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th colSpan="6"><small>XXXXL – 128×128px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td colSpan="6">

              <Avatar size={DataAttrSize.XXXXL}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_0}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.XXXXL}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_90}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.XXXXL}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_180}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.XXXXL}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_270}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>

        {/*XXXL – 108×108px*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="6"><small>XXXL – 108×108px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td colSpan="6">

              <Avatar size={DataAttrSize.XXXL}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_0}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.XXXL}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_90}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.XXXL}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_180}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.XXXL}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_270}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>

        {/*XXL – 88×88px*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="6"><small>XXL – 88×88px</small></th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td></td>
          <td colSpan="6">

            <Avatar size={DataAttrSize.XXL}
                    colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                    bg={DataAttrBg.ROTATE_0}
                    text="КВ"
            />

            <Avatar size={DataAttrSize.XXL}
                    colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                    bg={DataAttrBg.ROTATE_90}
                    text="КВ"
            />

            <Avatar size={DataAttrSize.XXL}
                    colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                    bg={DataAttrBg.ROTATE_180}
                    text="КВ"
            />

            <Avatar size={DataAttrSize.XXL}
                    colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                    bg={DataAttrBg.ROTATE_270}
                    text="КВ"
            />

          </td>
        </tr>
        </tbody>

        {/*XL – 64×64px*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="6"><small>XL – 64×64px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td colSpan="6">

              <Avatar size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_0}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_90}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_180}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_270}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>

        {/*L – 56×56px*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="6"><small>L – 56×56px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td colSpan="6">

              <Avatar size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_0}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_90}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_180}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_270}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>

        {/*M – 48×48px*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="6"><small>M – 48×48px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td colSpan="6">

              <Avatar size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_0}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_90}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_180}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_270}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>

        {/*S – 40×40px*/}
        <thead>
          <tr>
          <th className="name"></th>
          <th colSpan="6"><small>S – 40×40px</small></th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td colSpan="6">

              <Avatar size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_0}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_90}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_180}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_270}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>

        {/*XS – 32×32px*/}
        <thead>
          <tr>
          <th className="name"></th>
          <th colSpan="6"><small>XS – 32×32px</small></th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td colSpan="6">

              <Avatar size={DataAttrSize.XS}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_0}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.XS}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_90}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.XS}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_180}
                      text="КВ"
              />

              <Avatar size={DataAttrSize.XS}
                      colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                      bg={DataAttrBg.ROTATE_270}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>

        {/* Color theme: blue-light-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="8"><small>Color theme: blue-light-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XXXXL – 128×128px</small></th>
            <th><small>XXXL – 108×108px</small></th>
            <th><small>XXL – 88×88px</small></th>
            <th><small>XL – 64×64px</small></th>
            <th><small>L – 56×56px</small></th>
            <th><small>M – 48×48px</small></th>
            <th><small>S – 40×40px</small></th>
            <th><small>XS – 32×32px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            {/*XXXXL – 128×128px*/}
            <td>
  
              <Avatar size={DataAttrSize.XXXXL}
                      colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                      text="КВ"
              />
  
            </td>

            {/*XXXL – 108×108px*/}
            <td>
  
              <Avatar size={DataAttrSize.XXXL}
                      colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                      text="КВ"
              />
  
            </td>

            {/*XXL – 88×88px*/}
            <td>

              <Avatar size={DataAttrSize.XXL}
                      colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XL – 64×64px*/}
            <td>
  
              <Avatar size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                      text="КВ"
              />
  
            </td>

            {/*L – 56×56px*/}
            <td>

              <Avatar size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*M – 48×48px*/}
            <td>
  
              <Avatar size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                      text="КВ"
              />
  
            </td>

            {/*S – 40×40px*/}
            <td>
  
              <Avatar size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                      text="КВ"
              />
  
            </td>

            {/*XS – 32×32px*/}
            <td>
  
              <Avatar size={DataAttrSize.XS}
                      colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                      text="КВ"
              />
  
            </td>
          </tr>
        </tbody>

        {/* Color theme: orange-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="8"><small>Color theme: orange-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XXXXL – 128×128px</small></th>
            <th><small>XXXL – 108×108px</small></th>
            <th><small>XXL – 88×88px</small></th>
            <th><small>XL – 64×64px</small></th>
            <th><small>L – 56×56px</small></th>
            <th><small>M – 48×48px</small></th>
            <th><small>S – 40×40px</small></th>
            <th><small>XS – 32×32px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>

            {/*XXXXL – 128×128px*/}
            <td>

              <Avatar size={DataAttrSize.XXXXL}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XXXL – 108×108px*/}
            <td>

              <Avatar size={DataAttrSize.XXXL}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XXL – 88×88px*/}
            <td>

              <Avatar size={DataAttrSize.XXL}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XL – 64×64px*/}
            <td>

              <Avatar size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*L – 56×56px*/}
            <td>

              <Avatar size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*M – 48×48px*/}
            <td>

              <Avatar size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*S – 40×40px*/}
            <td>

              <Avatar size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XS – 32×32px*/}
            <td>

              <Avatar size={DataAttrSize.XS}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>

        {/* Color theme: yellow-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="8"><small>Color theme: yellow-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XXXXL – 128×128px</small></th>
            <th><small>XXXL – 108×108px</small></th>
            <th><small>XXL – 88×88px</small></th>
            <th><small>XL – 64×64px</small></th>
            <th><small>L – 56×56px</small></th>
            <th><small>M – 48×48px</small></th>
            <th><small>S – 40×40px</small></th>
            <th><small>XS – 32×32px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>

            {/*XXXXL – 128×128px*/}
            <td>

              <Avatar size={DataAttrSize.XXXXL}
                      colorTheme={DataAttrColorTheme.YELLOW_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XXXL – 108×108px*/}
            <td>

              <Avatar size={DataAttrSize.XXXL}
                      colorTheme={DataAttrColorTheme.YELLOW_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XXL – 88×88px*/}
            <td>

              <Avatar size={DataAttrSize.XXL}
                      colorTheme={DataAttrColorTheme.YELLOW_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XL – 64×64px*/}
            <td>

              <Avatar size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.YELLOW_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*L – 56×56px*/}
            <td>

              <Avatar size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.YELLOW_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*M – 48×48px*/}
            <td>

              <Avatar size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.YELLOW_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*S – 40×40px*/}
            <td>

              <Avatar size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.YELLOW_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XS – 32×32px*/}
            <td>

              <Avatar size={DataAttrSize.XS}
                      colorTheme={DataAttrColorTheme.YELLOW_PRIMARY}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>

        {/* Color theme: green-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="8"><small>Color theme: green-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XXXXL – 128×128px</small></th>
            <th><small>XXXL – 108×108px</small></th>
            <th><small>XXL – 88×88px</small></th>
            <th><small>XL – 64×64px</small></th>
            <th><small>L – 56×56px</small></th>
            <th><small>M – 48×48px</small></th>
            <th><small>S – 40×40px</small></th>
            <th><small>XS – 32×32px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>

            {/*XXXXL – 128×128px*/}
            <td>

              <Avatar size={DataAttrSize.XXXXL}
                      colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XXXL – 108×108px*/}
            <td>

              <Avatar size={DataAttrSize.XXXL}
                      colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XXL – 88×88px*/}
            <td>

              <Avatar size={DataAttrSize.XXL}
                      colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XL – 64×64px*/}
            <td>

              <Avatar size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*L – 56×56px*/}
            <td>

              <Avatar size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*M – 48×48px*/}
            <td>

              <Avatar size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*S – 40×40px*/}
            <td>

              <Avatar size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XS – 32×32px*/}
            <td>

              <Avatar size={DataAttrSize.XS}
                      colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>

        {/* Color theme: azure-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="8"><small>Color theme: azure-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XXXXL – 128×128px</small></th>
            <th><small>XXXL – 108×108px</small></th>
            <th><small>XXL – 88×88px</small></th>
            <th><small>XL – 64×64px</small></th>
            <th><small>L – 56×56px</small></th>
            <th><small>M – 48×48px</small></th>
            <th><small>S – 40×40px</small></th>
            <th><small>XS – 32×32px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>

            {/*XXXXL – 128×128px*/}
            <td>

              <Avatar size={DataAttrSize.XXXXL}
                      colorTheme={DataAttrColorTheme.AZURE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XXXL – 108×108px*/}
            <td>

              <Avatar size={DataAttrSize.XXXL}
                      colorTheme={DataAttrColorTheme.AZURE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XXL – 88×88px*/}
            <td>

              <Avatar size={DataAttrSize.XXL}
                      colorTheme={DataAttrColorTheme.AZURE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XL – 64×64px*/}
            <td>

              <Avatar size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.AZURE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*L – 56×56px*/}
            <td>

              <Avatar size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.AZURE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*M – 48×48px*/}
            <td>

              <Avatar size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.AZURE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*S – 40×40px*/}
            <td>

              <Avatar size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.AZURE_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XS – 32×32px*/}
            <td>

              <Avatar size={DataAttrSize.XS}
                      colorTheme={DataAttrColorTheme.AZURE_PRIMARY}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>

        {/* Color theme: velvet-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="8"><small>Color theme: velvet-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XXXXL – 128×128px</small></th>
            <th><small>XXXL – 108×108px</small></th>
            <th><small>XXL – 88×88px</small></th>
            <th><small>XL – 64×64px</small></th>
            <th><small>L – 56×56px</small></th>
            <th><small>M – 48×48px</small></th>
            <th><small>S – 40×40px</small></th>
            <th><small>XS – 32×32px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>

            {/*XXXXL – 128×128px*/}
            <td>

              <Avatar size={DataAttrSize.XXXXL}
                      colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XXXL – 108×108px*/}
            <td>

              <Avatar size={DataAttrSize.XXXL}
                      colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XXL – 108×108px*/}
            <td>

              <Avatar size={DataAttrSize.XXL}
                      colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XL – 64×64px*/}
            <td>

              <Avatar size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*L – 56×56px*/}
            <td>

              <Avatar size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*M – 48×48px*/}
            <td>

              <Avatar size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*S – 40×40px*/}
            <td>

              <Avatar size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XS – 32×32px*/}
            <td>

              <Avatar size={DataAttrSize.XS}
                      colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>

        {/* Color theme: red-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="8"><small>Color theme: red-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XXXXL – 128×128px</small></th>
            <th><small>XXXL – 108×108px</small></th>
            <th><small>XXL – 88×88px</small></th>
            <th><small>XL – 64×64px</small></th>
            <th><small>L – 56×56px</small></th>
            <th><small>M – 48×48px</small></th>
            <th><small>S – 40×40px</small></th>
            <th><small>XS – 32×32px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>

            {/*XXXXL – 128×128px*/}
            <td>

              <Avatar size={DataAttrSize.XXXXL}
                      colorTheme={DataAttrColorTheme.RED_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XXXL – 108×108px*/}
            <td>

              <Avatar size={DataAttrSize.XXXL}
                      colorTheme={DataAttrColorTheme.RED_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XXL – 88×88px*/}
            <td>

              <Avatar size={DataAttrSize.XXL}
                      colorTheme={DataAttrColorTheme.RED_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XL – 64×64px*/}
            <td>

              <Avatar size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.RED_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*L – 56×56px*/}
            <td>

              <Avatar size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.RED_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*M – 48×48px*/}
            <td>

              <Avatar size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.RED_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*S – 40×40px*/}
            <td>

              <Avatar size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.RED_PRIMARY}
                      text="КВ"
              />

            </td>

            {/*XS – 32×32px*/}
            <td>

              <Avatar size={DataAttrSize.XS}
                      colorTheme={DataAttrColorTheme.RED_PRIMARY}
                      text="КВ"
              />

            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         with Photo
         ========================================================================== */}
      <table className="components-library__type">
        <thead>
          <tr>
            <th className="name">with Photo</th>
            <th><small>XXXXL – 128×128px</small></th>
            <th><small>XXXL – 108×108px</small></th>
            <th><small>XXL – 88×88px</small></th>
            <th><small>XL – 64×64px</small></th>
            <th><small>L – 56×56px</small></th>
            <th><small>M – 48×48px</small></th>
            <th><small>S – 40×40px</small></th>
            <th><small>XS – 32×32px</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>

            {/*XXXXL – 128×128px*/}
            <td>
  
              <Avatar size={DataAttrSize.XXXXL}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      imageSrc={Image}
              />
  
            </td>

            {/*XXXL – 108×108px*/}
            <td>
  
              <Avatar size={DataAttrSize.XXXL}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      imageSrc={Image}
              />
  
            </td>

            {/*XXL – 88×88px*/}
            <td>

              <Avatar size={DataAttrSize.XXL}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      imageSrc={Image}
              />

            </td>

            {/*XL – 64×64px*/}
            <td>
  
              <Avatar size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      imageSrc={Image}
              />
  
            </td>

            {/*L – 64×64px*/}
            <td>

              <Avatar size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      imageSrc={Image}
              />

            </td>

            {/*M – 48×48px*/}
            <td>
  
              <Avatar size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      imageSrc={Image}
              />
  
            </td>

            {/*S – 40×40px*/}
            <td>
  
              <Avatar size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      imageSrc={Image}
              />
  
            </td>

            {/*XS – 32×32px*/}
            <td>
  
              <Avatar size={DataAttrSize.XS}
                      colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      imageSrc={Image}
              />
  
            </td>
          </tr>
        </tbody>
      </table>

    </section>
  )
};

export default AvatarPartial;
