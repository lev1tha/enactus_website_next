"use client";
import { useEffect, useState } from "react";
import style from "./home.module.css";
import UniversityCart from "@/share/components/cartUniversity";
import Select from "@/share/ui/selector";
import Layout from "@/widget/layout";

import { DataUniversity } from "@/share/lib/GlobalType";

export default function Home() {
  const [cityData, setDataCity] = useState<string>("Город");
  const [universities, setUniversities] = useState<DataUniversity[]>([]);
  const [filteredUniversities, setFilteredUniversities] = useState<
    DataUniversity[]
  >([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      const data: DataUniversity[] = [
        { id: 1, name: "ОшГУ", city: "Ош" },
        { id: 2, name: "ОшТУ", city: "Ош" },
        { id: 3, name: "ОшКУУ", city: "Ош" },
        { id: 4, name: "КГУ", city: "Бишкек" },
        { id: 5, name: "БГУ", city: "Баткен" },
        { id: 6, name: "АУЦА", city: "Бишкек" },
        { id: 7, name: "КГМА", city: "Бишкек" },
        { id: 8, name: "ДЖГУ", city: "Джалал-Абад" },
        { id: 9, name: "УрФУ", city: "Екатеринбург" },
      ];
      setUniversities(data);
    };

    fetchUniversities();
  }, []);

  useEffect(() => {
    if (cityData === "Город") {
      setFilteredUniversities(universities);
    } else {
      const filtered = universities.filter(
        (university) => university.city === cityData
      );
      setFilteredUniversities(filtered);
    }
  }, [cityData, universities]);

  return (
    <>
      <Layout />

      <div className={style.container_home_page}>
        <div className={style.title_inner}>
          <div className="title">
            <h1>Университеты</h1>
          </div>
          <div className="suptitle">
            <p>Познакомьтесь с нашими университетами</p>
          </div>
        </div>

        <div className={style.search_param}>
          <div className={style.search_form}>
            <input type="text" placeholder="Поиск..." />
            <Select
              initialValue={"Город"}
              cityData={cityData}
              setDataCity={setDataCity}
            />
          </div>
          <button className={style.button_search}>Поиск</button>
        </div>

        <div className={style.university_list}>
          {filteredUniversities.map((university) => (
            <UniversityCart key={university.id} university={university} />
          ))}
        </div>
      </div>
    </>
  );
}
