import React from "react";
import Layout from "@/widget/layout";
import UniversityInfo from "@/share/components/universityInfo";
import Article from "@/share/components/article";
import style from "./page.module.css";
import { $api } from "@/utils/axios";

export default async function UniversityPage({
  params,
}: {
  params: { id: string };
}) {
  const universityId = params.id;

  let universityData;
  try {
    const response = await $api.get(`/universities/${universityId}/`);
    universityData = response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    universityData = null;
  }

  if (!universityData) {
    return <p>Ошибка загрузки данных об университете.</p>;
  }

  return (
    <div className={style.universityInfo_container}>
      <UniversityInfo
        image={universityData.image}
        nameUniversity={universityData.name}
        curtailment={universityData.abbreviation}
        city={universityData.region}
        rector={`${universityData.rectors_first_name} ${
          universityData.rectors_second_name
        } ${universityData.rectors_middle_name || ""}`}
      />
      <div className={style.inner}>
        <Layout />
        <div className={style.complete_university_information}>
          <div className={style.title}>
            <h1>Информация об университете</h1>
          </div>
          <p>
            В истории {universityData.name} было немало значительных событий...
            <br />
          </p>
        </div>
        <Article documents={universityData.documents} />
      </div>
    </div>
  );
}
