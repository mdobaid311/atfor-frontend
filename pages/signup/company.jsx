import React from "react";
import styles from "../../styles/signup styles/Signup_company.module.scss";
import Image from "next/image";
import Logo from "../../assets/Atfor.png";
import Link from "next/link";
import authApi from "../../api/authApi";

const company = () => {
  const signUp = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const password = formdata.get("password");
    const confirm_password = formdata.get("confirm_password");

    if (password === confirm_password) {
      const companyData = {
        company_name: formdata.get("company_name"),
        company_email: formdata.get("company_email"),
        company_mobile_number: formdata.get("company_mobile_number"),
        address: formdata.get("address"),
        business_structure: formdata.get("business_structure"),
        password: formdata.get("password"),
      };
      console.log(companyData);
      const res = await authApi.companySignup(companyData);
      console.log(res);
    } else {
      alert("Both password does not match");
      return;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          <Image src={Logo} width={100} className={styles.logo}  alt="app-logo" />
        </Link>{" "}
      </div>
      <div className={styles.signupContainer}>
        <h1>Signup as a company</h1>
        <form className={styles.companyForm} onSubmit={signUp}>
          <div>
            <label htmlFor="company_name">Company name</label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              placeholder="Enter your company name"
            />
          </div>
          <div>
            <label htmlFor="company_email">Company email</label>
            <input
              type="company_email"
              id="company_email"
              name="company_email"
              placeholder="Enter your E-mail"
            />
          </div>
          <div>
            <label htmlFor="company_mobile_number">Company phone number</label>
            <input
              type="tel"
              id="company_mobile_number"
              name="company_mobile_number"
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
            <label htmlFor="business_structure">Business structure</label>
            <input
              type="text"
              id="business_structure"
              name="business_structure"
              placeholder="Enter your business_structure"
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

export default company;
