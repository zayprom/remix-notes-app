import { ReactNode } from "react";
import { Outlet } from "@remix-run/react";
import styles from "./styles.module.css";

interface SideBarProps {
  children: ReactNode;
}

export const SideBar = (props: SideBarProps) => {
  return (
    <div className={styles.sidebar}>
      {props.children}
      <Outlet />
    </div>
  );
};
