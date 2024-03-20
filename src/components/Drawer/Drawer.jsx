import React, { useState, useEffect } from "react";
import styles from "./drawer.module.css";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  }

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openDrawer}>Toggle Drawer</button>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""} ${
          isOpen ? styles.bounce : ""
        }`}
      >
        <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
          <div className={styles.handle} onClick={closeDrawer}></div>
          <div className={styles.content}>
            <h2>Drawer Content</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
