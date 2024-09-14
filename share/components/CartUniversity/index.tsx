"use client";
import style from "./cartUniversity.module.css";
import { useRouter } from "next/navigation";

interface UniversityProps {
  university: {
    id: string;
    name: string;
    image: string;
    abbreviation: string;
    rector: string;
    region: string;
  };
}

export default function UniversityCart({ university }: UniversityProps) {
  const route = useRouter();

  const handleRoutePush = (id: string) => {
    route.push(`/university/${id}`);
  };

  return (
    <div className={style.container}>
      <div className={style.visible_class}>
        <img
          src={university.image}
          alt={`${university.name} image`}
          className={style.university_image}
        />
        <div
          onClick={() => handleRoutePush(university.id)}
          className={style.hover_class}
        >
          <h3>{university.name}</h3>
          <p>({university.abbreviation})</p>
        </div>
      </div>
    </div>
  );
}
