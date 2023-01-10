import React from "react";
import styles from "../../styles/Signup.module.scss";
import Image from "next/image";
import Logo from "../../assets/Atfor.png";
import Link from "next/link";
import classNames from "classnames";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          <Image
            src={Logo}
            width={100}
            className={styles.logo}
            alt="app-logo"
          />
        </Link>
        <div className={styles.navLinks}>
          <Link href="/login" className={styles.navLink}>
            Login
          </Link>
        </div>
      </div>
      <div className={styles.optionsContainer}>
        <div
          className={classNames(styles.customerSignup, styles.optionContainer)}
        >
          <Link href="signup/customer" className={styles.signupButton}>
            Signup as Customer
          </Link>
        </div>
        <div
          className={classNames(styles.companySignup, styles.optionContainer)}
        >
          <Link href="signup/company" className={styles.signupButton}>
            Signup as Company
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
