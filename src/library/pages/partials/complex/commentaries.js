import React from "react";
import Image from "../../../../common/assets/img/temp/avatar.jpg";
import Comments from "../../../../common/components/common/Comments/Comments";

let PersonName = "Семёнова Светлана"

let MessageText =
  <>
    <ul>
      <li>
        <p>— Добрый день, у нас авария в подъезде, прорвало трубу горячей воды</p>
      </li>
      <li>
        <p>— Добрый день, одну минуту, давайте уточним ваш адрес</p>
      </li>
      <li>
        <p>— Город Воронеж, Ленина 15 подъезд 2</p>
      </li>
      <li>
        <p>— Спасибо большое, правильно я понимаю, что во втором подъезде авария прорыва трубы горячего водоснабжения?</p>
      </li>
      <li>
        <p>— Да</p>
      </li>
      <li>
        <p>— Могу я зарегистрировать заявку на номер, с которого вы звоните?</p>
      </li>
      <li>
        <p>— Да</p>
      </li>
      <li>
        <p>— Смирнова Валерия Викторовна?</p>
      </li>
      <li>
        <p>— Все верно</p>
      </li>
      <li>
        <p>— Ваша заявка зарегистрирована, в ближайшее время придет информация о времени проведения аварийных работ</p>
      </li>
    </ul>
  </> ;

const Commentaries = () => {
  return (
    <section className="components-library__element comments-library">
      <h3 className="components-library__heading h3">
        Comments
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
            <td className="name"></td>
            <td>

              <Comments imageAvatar={Image}
                        person={PersonName}
                        personAction="принял(а) входящий звонок"
                        text = {MessageText}
              />

            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default Commentaries;
