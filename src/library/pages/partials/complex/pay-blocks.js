import React from "react";
import UserBox from "../../../../common/components/common/PayBlock/PayBlock";
import PayBlock from "../../../../common/components/common/PayBlock/PayBlock";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";




const PayBlocks = () => {
  return (
    <section className="components-library__element pay-block-library">
      <h3 className="components-library__heading h3">
        Pay Block
      </h3>

      <table className="components-library__type">
        <thead>
        <tr>
          <th><small>default</small></th>
        </tr>
        </thead>
        <tbody className="bg-darker">
        <tr>
          <td>

            <PayBlock title="Пополнить счёт"
                      desc="Зачисления по карте в течение часа"

            />

          </td>
        </tr>
        </tbody>

        <thead>
        <tr>
          <th><small>isPayInvoice</small></th>
        </tr>
        </thead>
        <tbody className="bg-darker">
        <tr>
          <td>

            <PayBlock title="Сумма к оплате"
                      desc="С учётом всех скидок и бонусов"
                      placeBefore={<><ButtonPrimary text="Списать с личного счёта"
                                                    size={DataAttrSize.L}
                                                    colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                      /></>}
                      isPayInvoice
            />

          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
};

export default PayBlocks;
