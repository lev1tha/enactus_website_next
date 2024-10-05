import React from "react";
import Link from "next/link";
import { TFile } from "@/share/lib/GlobalType";
import style from "./article.module.css";

export default function Article({
  documents,
  id,
}: {
  documents: TFile[];
  id: string;
}) {
  console.log(id.split(" "));
  return (
    <div className={style.article_container}>
      <div className={style.title}>Документы</div>
      {documents.map((documentInner, index) => (
        <div key={index} className={style.document_box}>
          <h5>{documentInner.title}</h5>
          <button className={style.button_watch}>
            <Link href={`${documentInner.url}`} target="_blank">
              Смотреть
            </Link>
          </button>
        </div>
      ))}
      <Link href={`${id}/document`}>
        <button className={style.all_document}>Посмотреть все</button>
      </Link>
    </div>
  );
}
