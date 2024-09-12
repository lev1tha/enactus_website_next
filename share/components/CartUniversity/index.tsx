"use client"
import style from "./cartUniversity.module.css";

export default function UniversityCart({ university }: any) {
  return (
    <div className={style.container}>
      <div className={style.visible_class}>
        {/* university.img */}
        <div className={style.hover_class}>
          <h3>{university.name}</h3>
          <p>{university.city}</p>
        </div>
      </div>
    </div>
  );
}
