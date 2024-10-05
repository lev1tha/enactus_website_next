import Link from "next/link";

interface BreadcrumbProps {
  university: string;
}

export default function BreadcrumbComponents({ university }: BreadcrumbProps) {
  if (!university) {
    return <div>Загрузка университета . . .</div>;
  }

  return (
    <div className="breadcrumb">
      <Link href={`/university/${university}/document`}>{university}</Link>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { university } = context.query;

  if (!university) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      university: String(university),
    },
  };
}
