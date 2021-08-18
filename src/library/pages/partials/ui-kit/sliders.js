import React, {useState} from "react";
import Slider from "../../../../common/components/ui-kit/sliders/Slider/Slider";
import GalleryInline from "../../../../common/components/ui-kit/sliders/Gallery/Gallery";
import GalleryPopup from "../../../../common/components/ui-kit/sliders/GalleryPopup/GalleryPopup";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import {ReactComponent as IconTrash24} from "../../../../common/assets/img/icons/svg/24/icon-trash-24.svg";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";

const imagesSrcFull = [
  "https://images.pexels.com/photos/2045600/pexels-photo-2045600.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2228585/pexels-photo-2228585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2228554/pexels-photo-2228554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/7202802/pexels-photo-7202802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];

const imagesSrcThumbnail = [
  "https://images.pexels.com/photos/2045600/pexels-photo-2045600.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2228585/pexels-photo-2228585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2228554/pexels-photo-2228554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/7202802/pexels-photo-7202802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];


const Sliders = () => {
  const [isOpenGallery, setIsOpenGallery] = useState(false);

  return (
    <section className="components-library__element selects-library">
      <h3 className="components-library__heading h3">
        Sliders
      </h3>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}

        {/*L*/}
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
        <tbody>
        <tr>
          <td className="name">Simple slider</td>
          <td>

          <Slider>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum reprehenderit, repudiandae. Debitis
                eius fugit ipsum molestiae nostrum quisquam sapiente, veniam.</p>
            </div>
            <div>
              <p>Ad adipisci atque eveniet id minima officia perspiciatis porro quibusdam temporibus? Error, esse eum
                facilis itaque placeat quo vitae voluptate?</p>
            </div>
            <div>
              <p>Alias amet, aut culpa deleniti doloremque eos error et facilis fugiat iusto labore libero nostrum nulla
                perspiciatis quibusdam sit ullam?</p>
            </div>
            <div>
              <p>Ad alias aliquam dignissimos doloribus eaque error exercitationem facilis fuga in nisi nulla officia
                pariatur perferendis rerum, sit velit voluptatum?</p>
            </div>
            <div>
              <p>Amet asperiores delectus dicta dolor dolorum excepturi facilis molestiae nostrum odio optio quaerat
                quam, quibusdam recusandae repellat reprehenderit rerum voluptatem!</p>
            </div>
          </Slider>

          </td>
        </tr>
        </tbody>
      </table>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}

        {/*L*/}
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
        <tbody>
        <tr>
          <td className="name">Gallery slider</td>
          <td>

            <GalleryInline imagesSrcFull={imagesSrcFull}
                           imagesSrcThumbnail={imagesSrcThumbnail}
            />

          </td>
        </tr>
        </tbody>
      </table>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}

        {/*L*/}
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
        <tbody>
        <tr>
          <td className="name">Gallery slider</td>
          <td>

            <ButtonPrimary size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                           text="Открыть галерею"
                           handleClick={() => setIsOpenGallery(true)}
            />

          </td>
        </tr>
        </tbody>
      </table>

      <GalleryPopup isOpen={isOpenGallery}
                    close={() => setIsOpenGallery(false)}
                    imagesSrcFull={imagesSrcFull}
                    imagesSrcThumbnail={imagesSrcThumbnail}
                    initialSlide={0}
      />
    </section>
  )
};

export default Sliders;
