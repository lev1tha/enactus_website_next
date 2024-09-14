import React from "react";
import { TUniversityInfoHeader } from "@/share/lib/GlobalType";
import style from "./info.module.css";

export default function UniversityInfo({
  image,
  nameUniversity,
  curtailment,
  city,
  rector,
}: TUniversityInfoHeader) {
  return (
    <div className={style.header_container}>
      <div className={style.logotype}>
        <img src={image} alt={`${nameUniversity} логотип`} />
      </div>
      <div className={style.info}>
        <div className={style.university_name}>
          <h1>{nameUniversity}</h1>
        </div>
        <div className={style.university_curtailment}>
          <span>{curtailment}</span>
        </div>
        <div className={style.location_rector}>
          <div className={style.location}>
            <p>
              Город : <span>{city}</span>
            </p>
          </div>
          <div className={style.rector}>
            <p>
              Ректор: <span>{rector}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
