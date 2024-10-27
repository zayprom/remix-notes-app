import { ReactNode } from "react";
import styles from "./styles.module.css";

interface SideBarProps {
  children: ReactNode;
}

export const SideBar = (props: SideBarProps) => {
  return <div className={styles.sidebar}>{props.children}</div>;
};
