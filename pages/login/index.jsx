import React from "react";
import styles from "../../styles/Login.module.scss";
import Image from "next/image";
import Logo from "../../assets/Atfor.png";
import Link from "next/link";
import classNames from "classnames";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          <Image  src={Logo} width={100} className={styles.logo}  alt="app-logo" />
        </Link>
        <div className={styles.navLinks}>
          <Link href="/signup" className={styles.navLink}>
            Signup
          </Link>
        </div>
      </div>
      <div className={styles.loginContainer}>
        <h1>Login</h1>
        <form className={styles.loginForm}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <input type="submit" name="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
