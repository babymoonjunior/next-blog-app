import React from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";

export default function ThemeToggle() {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="darktheme" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="lighttheme" width={14} height={14} />
    </div>
  );
}
