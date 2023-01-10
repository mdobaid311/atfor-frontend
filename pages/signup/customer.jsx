import React, { useEffect } from "react";
import Logo from "../../assets/Atfor.png";
import styles from "../../styles/signup styles/Signup_customer.module.scss";
import Image from "next/image";
import Link from "next/link";
import authApi from "../../api/authApi";
import axios from "axios";

// {
//   first_name: "mohammed",
//   last_name: "obaid",
//   email: "mdobaid868asasdasdasdasdd6asd6gmail.com",
//   mobile_number: 9515281551,
//   address: { home_number: "18-12" },
//   password: "Obaid311",
//   occupation: "student",
// }
const customer = () => {
  const signUp = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const password = formdata.get("password");
    const confirm_password = formdata.get("confirm_password");

    if (password === confirm_password) {
      const customerData = {
        first_name: formdata.get("first_name"),
        last_name: formdata.get("first_name"),
        email: formdata.get("email"),
        mobile_number: formdata.get("mobile_number"),
        address: formdata.get("address"),
        password: formdata.get("password"),
        occupation: formdata.get("occupation"),
      };
      const res = await authApi.customerSignup(customerData);
      console.log(res);
    } else {
      alert("Both password does not match");
      return;
    }
  };

  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          <Image src={Logo} width={100} className={styles.logo} alt="im" />
        </Link>
      </div>
      <div className={styles.signupContainer}>
        <h1>Signup as a customer</h1>
        <form className={styles.customerForm} onSubmit={signUp}>
          <div>
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="last_name">First name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your E-mail"
            />
          </div>
          <div>
            <label htmlFor="mobile_number">Mobile number</label>
            <input
              type="tel"
              id="mobile_number"
              name="mobile_number"
              placeholder="Enter your mobile number"
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
            />
          </div>
          <div>
            <label htmlFor="occupation">Occupation</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              placeholder="Enter your occupation"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm password</label>
            <input
              type="text"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm your password"
            />
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>
    </div>
  );
};

export default customer;
