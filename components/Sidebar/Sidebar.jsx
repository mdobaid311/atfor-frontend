import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import Logo from "../../assets/Atfor.png";
import Image from "next/image";
import { AiFillHome, AiFillPieChart } from "react-icons/ai";
import { FaReceipt } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [location, setLocation] = useState("");
  const router = useRouter();

  useEffect(() => {
    setLocation(router.pathname);
  }, []);

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.profileContainer}>
        <Image src={Logo} width={70} className={styles.logo} alt="app-logo" />
        <Link href="/profile">
          <BiUser className={styles.profileImg} />
        </Link>
      </div>
      <div className={styles.tabsContainer}>
        <Link
          href="/home"
          className={
            location === "/home"
              ? classNames(styles.tab, styles.activeTab)
              : styles.tab
          }
        >
          <AiFillHome className={styles.icon} />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/bills"
          className={
            location === "/bills"
              ? classNames(styles.tab, styles.activeTab)
              : styles.tab
          }
        >
          <FaReceipt className={styles.icon} />
          <span>Bills</span>
        </Link>
        <Link
          href="/analysis"
          className={
            location === "/analysis"
              ? classNames(styles.tab, styles.activeTab)
              : styles.tab
          }
        >
          <AiFillPieChart className={styles.icon} />
          <span>Analysis</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
