import { ReactNode } from "react";
import styles from "./styles.module.css";

interface SideBarProps {
  children: ReactNode;
}

export const SideBar = (props: SideBarProps) => {
  return <nav className={styles.sidebar}>{props.children}</nav>;
};
