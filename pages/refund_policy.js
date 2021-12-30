import React from "react";
import "animate.css";
import styles from "../styles/RefundPolicy.module.scss";

const RefundPolicy = () => {
  return (
    <div className={styles.refundPolicy}>
      <h2>Refund Policy</h2>
      <p>
        Since our shop is offering non-tangible, irrevocable goods we do not
        issue refunds after the product is shipped, which you acknowledge prior
        to purchasing any product at our site. We only make exceptions with this
        rule when the product appears to be not-as-described on a case by case
        basis at our sole discretion. The deadline for any refund claim is one
        week after the delivery date.{" "}
      </p>
      <p>
        Refunds will be issued to the original payment method used
        (Visa/MasterCard, Masterpass, Visa Checkout, Privat24, GooglePay,
        ApplePay).
      </p>
      <h2>Return Policy</h2>
      <p>
        If you have not yet downloaded and/or printed your sheet music, you may
        self-cancel digital sheet music orders for up to seven days after
        purchase. If an order has been successfully printed or downloaded , we
        are unable to grant a refund due to the copyright restrictions and
        agreements we hold with our publishers. Add-on products may be cancelled
        individually, however the add-on products may not be retained if the
        initial, related GeorgeShop product is to be cancelled; for these cases,
        both the initial, related GeorgeShop product and the add-on product must
        be cancelled together.
      </p>
    </div>
  );
};

export default RefundPolicy;
