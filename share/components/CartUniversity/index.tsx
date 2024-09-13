"use client";
import style from "./cartUniversity.module.css";
import { useRouter } from "next/navigation";

export default function UniversityCart({ university }: any) {
  const route = useRouter();

  const handleRoutePush = (id: string) => {
    route.push(`university/${id}`);
  };

  return (
    <div className={style.container}>
      <div className={style.visible_class}>
        {/* university.img */}
        <div
          onClick={() => handleRoutePush(university.id)}
          className={style.hover_class}
        >
          <h3>{university.name}</h3>
          <p>{university.city}</p>
        </div>
      </div>
    </div>
  );
}
