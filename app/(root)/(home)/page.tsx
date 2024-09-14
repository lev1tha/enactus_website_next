"use client";
import { useEffect, useState } from "react";
import style from "./home.module.css";
import UniversityCart from "@/share/components/cartUniversity";
import Select from "@/share/ui/selector";
import Layout from "@/widget/layout";
import { TDataUniversity } from "@/share/lib/GlobalType";
import { $api } from "@/utils/axios";

export default function Home() {
  const [cityData, setDataCity] = useState<string>("Город");
  const [universities, setUniversities] = useState<TDataUniversity[]>([]);
  const [filteredUniversities, setFilteredUniversities] = useState<
    TDataUniversity[]
  >([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await $api.get("/universities");
        const data = response.data.results;
        setUniversities(data);
      } catch (error) {
        console.error("Ошибка при получении данных об университетах:", error);
      }
    };

    fetchUniversities();
  }, []);

  useEffect(() => {
    if (cityData === "Город") {
      setFilteredUniversities(universities);
    } else {
      const filtered = universities.filter(
        (university) => university.region === cityData
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
            <UniversityCart
              key={university.id}
              university={{
                id: university.id,
                name: university.name || "Без названия",
                abbreviation: university.abbreviation || "N/A",
                image: university.image || "/placeholder.jpg",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
