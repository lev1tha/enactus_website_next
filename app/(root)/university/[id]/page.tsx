import React from "react";
import Layout from "@/widget/layout";
import UniversityInfo from "@/share/components/universityInfo";
import Article from "@/share/components/article";
import style from "./page.module.css";
import { $api } from "@/utils/axios"; // Импортируй свой настроенный axios

// Асинхронная функция компонента для рендеринга на сервере
export default async function UniversityPage({
  params,
}: {
  params: { id: string };
}) {
  const universityId = params.id;

  // Запрос к API с использованием axios
  let universityData;
  try {
    const response = await $api.get(`/university/${universityId}`);
    universityData = response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    // Верни что-то, если произошла ошибка, например, пустой объект
    universityData = null;
  }

  if (!universityData) {
    return <p>Ошибка загрузки данных об университете.</p>;
  }

  return (
    <div className={style.universityInfo_container}>
      <UniversityInfo
        image={universityData.image}
        nameUniversity={universityData.nameUniversity}
        curtailment={universityData.curtailment}
        city={universityData.city}
        rector={universityData.rector}
      />
      <div className={style.inner}>
        <Layout />
        <div className={style.complete_university_information}>
          <div className={style.title}>
            <h1>Информация об университете</h1>
          </div>
          <p>
            {/* Вставка информации об университете */}В истории{" "}
            {universityData.nameUniversity} было немало значительных событий...
            <br />
            {/* Далее идет текст описания университета */}
          </p>
        </div>
        <Article documents={universityData.documents} />
      </div>
    </div>
  );
}
