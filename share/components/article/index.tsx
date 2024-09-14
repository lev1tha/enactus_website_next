import React from "react";
import Link from "next/link";

import { TFile } from "@/share/lib/GlobalType";
import style from "./article.module.css";

export default function Article({ documents }: TFile) {
  return (
    <div className={style.article_container}>
      <div className={style.title}>Документы</div>
      {/* {document.map((documentInner, index)=> { 
        <div className={}>

        </div>
      })} */}
      <div className={style.document_box}>
        <h5>Годовой Отчет 2021-2022</h5>
        <button className={style.button_watch}>
          <Link href={""}>Смотреть</Link>
        </button>
      </div>
      <div className={style.document_box}>
        <h5>Годовой Отчет 2022-2023</h5>
        <button className={style.button_watch}>
          <Link href={""}>Смотреть</Link>
        </button>
      </div>
      <div className={style.document_box}>
        <h5>Годовой Отчет 2023-2024</h5>
        <button className={style.button_watch}>
          <Link href={""}>Смотреть</Link>
        </button>
      </div>
      <div className={style.document_box}>
        <h5>Годовой Отчет 2024-2025</h5>
        <button className={style.button_watch}>
          <Link href={""}>Смотреть</Link>
        </button>
      </div>
    </div>
  );
}
