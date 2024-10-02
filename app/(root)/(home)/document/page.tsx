import React from "react";
import Layout from "@/widget/layout/index";
import style from "./document.module.css"

export default function page() {
  return (
    <div className={style.container}>
      <Layout />
      <div className={style.document_container}>
        <div className="breadcrumb"></div>
      </div>
    </div>
  );
}