import React from "react";
import Layout from "@/widget/layout";
import style from "./document.module.css";
import BreadcrumbComponents from "@/share/ui/breadcrumb";

export default function page() {
  return (
    <div className={style.container}>
      <div>
        <Layout />
      </div>
      <div className={style.document_container}>
        <div className={style.document_backArrow}>
          <img src="/assets/svg/backarrow.svg" alt="стрелка назад" />
          <BreadcrumbComponents university={""} />
        </div>

        <div className="title_document_page">
          <h1 className="title"></h1>
        </div>
      </div>
    </div>
  );
}
