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
        <img src={image} alt="logotype university" />
      </div>
      <div className={style.info}>
        <div className={style.university_name}>
          <h1>
            {/* {nameUniversity}*/}
            Кыргызский Государственный Технический Университет им. И. Раззакова
          </h1>
        </div>
        <div className={style.university_curtailment}>
          <span>
            {/* {curtailment}} */}
            КГТУ-УСТА
          </span>
        </div>
        <div className={style.location_rector}>
          <div className={style.location}>
            <p>
              Город : <span>{/* {city} */} Бишкек</span>
            </p>
          </div>
          <div className={style.rector}>
            <p>
              Ректор: <span>{/* {rector} */} Чыныбаев Мирлан Койчубекович</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
