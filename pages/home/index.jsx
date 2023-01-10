import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../styles/Homepage/Homepage.module.scss";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.homepageContainer}>
      <Sidebar />
      <Navbar />
      Home
    </div>
  );
};

export default Home;
