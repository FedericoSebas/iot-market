import React from "react";
import styles from "./button.module.css";

import Link from "next/link";

const Button = ({ children, slug, company }) => {
  return (
    <>
      <Link className={styles.link} href={company + "/products/" + slug}>
        {children}
      </Link>
    </>
  );
};

export default Button;
