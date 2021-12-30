import React from "react";
import "animate.css";
import styles from "../styles/TermsAndConditions.module.scss";

const TermsAndConditions = () => {
  return (
    <div className={styles.termsAndConditions}>
      <h2>Terms and Conditions</h2>
      <span>Last updated: December 30, 2021</span>
      <h3>1. IMPORTANT INFORMATION</h3>
      <p>
        You should carefully read the following Terms and Conditions. Your
        purchase or use of our products implies that you have read and accepted
        these Terms and Conditions.
      </p>
      <h3>2. Prices Policy</h3>
      <p>
        The Company reserves the right to revise its prices at any time prior to
        accepting an Order.
      </p>
      <p>
        The prices quoted may be revised by the Company subsequent to accepting
        an Order in the event of any occurrence affecting delivery caused by
        government action, variation in customs duties, increased shipping
        charges, higher foreign exchange costs and any other matter beyond the
        control of the Company. In that event, You will have the right to cancel
        Your Order.
      </p>
      <h3>3. Payments</h3>
      <p>
        Payment can be made through various payment methods we have available,
        such as Visa/MasterCard, Masterpass, Visa Checkout, Privat24, GooglePay,
        ApplePay.
      </p>
      <p>
        Payment cards (credit cards or debit cards) are subject to validation
        checks and authorization by Your card issuer. If we do not receive the
        required authorization, We will not be liable for any delay or
        non-delivery of Your Order.
      </p>
      <p>
        If the payment is payment, the notes will be available on your email
        within 24 hours from the date of purchase.
      </p>
      <h3>4. Intellectual Property</h3>
      <p>
        The Service and its original content, features and functionality are and
        will remain the exclusive property of the Company and its licensors. You
        agree that you will not use the Service and Content or Goods in whole or
        in part for any illegal purpose and that you will not and will not
        permit anyone else to: copy, duplicate, modify, redistribute, reverse
        engineer, decompile or disassemble any element of the Service and its
        Content or Goods.
      </p>
      <h3>5. Availability, Errors and Inaccuracies</h3>
      <p>
        We are constantly updating Our offerings of Goods on the Service. The
        Goods available on Our Service may be mispriced, described inaccurately,
        or unavailable, and We may experience delays in updating information
        regarding our Goods on the Service and in Our advertising on other
        websites.
      </p>
      <p>
        We cannot and do not guarantee the accuracy or completeness of any
        information, including prices, product images, specifications,
        availability, and services. We reserve the right to change or update
        information and to correct errors, inaccuracies, or omissions at any
        time without prior notice.
      </p>
      <h3>6. THIRD-PARTIES SERVICES</h3>
      <p>
        We may use third parties to provide certain services accessible through
        the website. Our website does not control these third parties or their
        services, and you agree that our company will not be liable to you in
        any way for your use of such services. These third parties may have
        their own terms of use and other policies. You agree to comply with such
        terms and policies as well as these. If any such terms or policies
        conflict with our terms, agreements or policies, you must comply with
        those of our website.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions, You can contact us:
        <br /> By email:{" "}
        <span className={styles.contactInfo}>composergeorgeresh@gmail.com</span>
        <br /> By phone number:{" "}
        <span className={styles.contactInfo}>+380 (97) 609-83-41</span>
      </p>
    </div>
  );
};

export default TermsAndConditions;
